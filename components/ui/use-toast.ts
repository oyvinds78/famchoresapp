// Simplified version for brevity. You might want to implement a full toast system.
import { useState } from 'react'

export const useToast = () => {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description }) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prevToasts) => [...prevToasts, { id, title, description }])
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id))
    }, 3000)
  }

  return { toast, toasts }
}