import Image from 'next/image'
import { useState, useRef } from 'react'

type CountButtonProps = {
  initialCount: number
  srcIcon: string,
  srcActiveIcon: string,
  iconWidth?: number,
  iconHeigth?: number
}

let IS_COUNT = false

export default function ToggleCountButton ({ initialCount, srcIcon, srcActiveIcon, iconWidth = 40, iconHeigth = 40 }: CountButtonProps) {
  const [count, setCount] = useState(initialCount)
  const imageRef = useRef<HTMLImageElement>(null)

  const toggleCount = () => {
    if (!IS_COUNT) {
      imageRef.current!.classList.add('animate-likeVideo')
      imageRef.current!.src = srcActiveIcon
      setCount(count + 1)
      IS_COUNT = true
      return
    }

    if (IS_COUNT) {
      imageRef.current!.classList.remove('animate-likeVideo')
      imageRef.current!.src = srcIcon
      setCount(count - 1)
      IS_COUNT = false
    }
  }

  return (
    <button onClick={() => toggleCount()} >
        <Image ref={imageRef} src={srcIcon} width={iconWidth} height={iconHeigth} alt="A simple icon element" />
        <p>{count}</p>
    </button>
  )
}
