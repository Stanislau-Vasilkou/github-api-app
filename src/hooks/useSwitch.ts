import { useState } from 'react'

export const useSwitch = (
  defaultStatus = false,
): [boolean, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultStatus)

  const close = () => setIsOpen(false)

  const open = () => setIsOpen(true)

  return [isOpen, close, open]
}
