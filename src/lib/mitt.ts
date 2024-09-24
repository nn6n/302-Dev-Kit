"use client"
import mitt from "mitt"
export type ErrorEvent = {
  ToastError: number
}
const emitter = mitt<ErrorEvent>()

export { emitter }
