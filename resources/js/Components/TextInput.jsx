import { forwardRef, useEffect, useRef } from "react"

export default forwardRef(function TextInput({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef()

  useEffect(() => {
    if (isFocused) {
      input.current.focus()
    }
  }, [])

  return <input {...props} type={type} className={"bg-white border-gray-300 text-gray-950 focus:border-gray-900 focus:ring-gray-900 rounded-md shadow-sm " + className} ref={input} />
})
