import { env } from "@/env"
import { login } from "@/lib/auth"
import { useAppStore } from "@/stores"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
// import toast from "react-hot-toast"
import { useIsAuthPath } from "./use-is-auth-path"

// const authPath = env.NEXT_PUBLIC_AUTH_PATH!

export const useLogin = () => {
  const router = useRouter()
  const { isAuthPage } = useIsAuthPath()

  const [code, setCode] = useState("")
  const [errMessage, setErrMessage] = useState<string | undefined>("")

  const { apiKey, updateConfig } = useAppStore((state) => ({
    apiKey: state.apiKey,
    updateConfig: state.updateConfig,
  }))

  // 登录
  const handleLogin = useCallback(
    async (loginCode?: string, rememberCode?: boolean) => {
      const result = await login(loginCode)

      if (result.success) {
        if (isAuthPage) {
          if (rememberCode && loginCode) {
            localStorage.setItem("code", loginCode)
          } else {
            localStorage.setItem("code", "")
          }
        }

        updateConfig({
          ...result.data,
          code: loginCode,
        })

        return result
      }
      setErrMessage(result.errorMessage)

      return result
    },
    [isAuthPage, updateConfig]
  )
  useEffect(() => {
    const performLogin = async () => {
      if (isAuthPage || apiKey) return

      const urlParams = new URLSearchParams(window.location.search)
      const urlCode = urlParams.get("pwd")
      const urlRegion =
        urlParams.get("region") || env.NEXT_PUBLIC_DEFAULT_REGION!

      updateConfig({ region: urlRegion })

      let result = await handleLogin()

      if (result.success) {
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        )

        return
      }

      const storageCode = localStorage.getItem("code")
      if (urlCode) {
        result = await handleLogin(urlCode)
      } else if (storageCode) {
        result = await handleLogin(storageCode)
      }

      if (result.success) {
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        )

        return
      }
      // toast.error(result.errorMessage || "auth:errors.unknown_error")
      // router.push(authPath, { scroll: false })
    }

    // if (hasHydrated) {
    //   performLogin().catch((e) => {
    //     console.error(`Login error: ${JSON.stringify(e)}`)
    //   })
    // }
  }, [handleLogin, apiKey, isAuthPage, updateConfig, router, t])

  useEffect(() => {
    if (!isAuthPage) {
      return
    }

    const urlParams = new URLSearchParams(window.location.search)
    const urlCode = urlParams.get("pwd") || localStorage.getItem("code")

    if (urlCode) {
      setCode(urlCode)
    }
  }, [isAuthPage])

  return {
    code,
    setCode,
    errMessage,
    setErrMessage,
    handleLogin,
  }
}
