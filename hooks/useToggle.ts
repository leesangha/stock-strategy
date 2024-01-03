import { useState } from 'react'

type UseToggleProps = {
  showing?: boolean
}

const useToggle = ({ showing }: UseToggleProps) => {
  const [isShowing, setIsShowing] = useState(showing)

  const toggle = () => {
    setIsShowing(!isShowing)
  }

  const open = () => {
    setIsShowing(true)
  }

  const close = () => {
    setIsShowing(false)
  }

  const setShowing = (value: boolean) => {
    setIsShowing(value)
  }

  return {
    isShowing,
    toggle,
    close,
    open,
    setShowing,
  }
}

export default useToggle
