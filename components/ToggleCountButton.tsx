import { ReactNode, useState } from 'react'

type CountButtonProps = {
  initialCount: number
  children: ReactNode
}

let IS_COUNT = false

export default function ToggleCountButton ({ initialCount, children }: CountButtonProps) {
  const [count, setCount] = useState(initialCount)

  const toggleCount = () => {
    if (!IS_COUNT) {
      setCount(count + 1)
      IS_COUNT = true
      return
    }

    if (IS_COUNT) {
      setCount(count - 1)
      IS_COUNT = false
    }
  }

  return (
    <button onClick={() => toggleCount()}>
        {children}
        <p>{count}</p>
    </button>
  )
}
