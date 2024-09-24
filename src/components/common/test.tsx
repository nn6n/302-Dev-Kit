/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Button } from "@/components/ui/button"
import { login } from "@/lib/auth"
import { emitter } from "@/lib/mitt"
import { useToolStore } from "@/stores"

export function Test() {
  const { updateAll } = useToolStore()

  const handleError = () => {
    emitter.emit("ToastError", -10005)
  }

  const handleAuth = () => {
    const loginCode = "123"
    login(loginCode).then((res: any) => {
      if (res.data?.info) {
        updateAll({ info: res.data?.info })
      }

      if (res.success) {
        updateAll({
          ...res.data,
          code: loginCode,
        })
        return res
      }
      // setErrMessage(result.errorMessage)
      console.log("ers:::", res)
      emitter.emit("ToastError", -99)
    })

  }

  return (
    <>
      <Button onClick={handleError}>错误测试</Button>
      <Button onClick={handleAuth}>验证测试</Button>
    </>
  )
}
