/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Button } from "@/components/ui/button"
import { login } from "@/lib/auth"
import { emitter } from "@/lib/mitt"
import Locale from "@/locales"
import { useAppStore } from "@/stores"
import { useRouter } from "next/navigation"

export function Test() {
  const router = useRouter()
  const { updateConfig } = useAppStore()

  const handleTestRoute = () => {
    router.push("/auth")
  }

  const handleTestError = () => {
    emitter.emit("ToastError", -10005)
  }

  const handleTestAuth = () => {
    const loginCode = "123"
    login(loginCode).then((res: any) => {
      if (res.data?.info) {
        updateConfig({ info: res.data?.info })
      }
      if (res.success) {
        updateConfig({
          ...res.data,
          code: loginCode,
        })
        return res
      }
      emitter.emit("ToastError", -99)
    })

  }

  return (
    <div className="flex flex-col space-y-4 p-4 text-center">
      <p>{Locale.Title}</p>
      <Button onClick={handleTestRoute}>Test Route</Button>
      <Button onClick={handleTestAuth}>Test Auth</Button>
      <Button onClick={handleTestError}>Test Error</Button>
    </div>
  )
}
