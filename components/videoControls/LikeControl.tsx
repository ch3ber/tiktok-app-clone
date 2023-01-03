import Image from 'next/image'
import { useRef, useState } from 'react'

let isLiked = false

export default function LikeControl () {
  const imageRef = useRef<HTMLImageElement>(null)
  const [likeCount, setLikeCount] = useState(99)

  function onLikeVideo () {
    if (isLiked) {
      imageRef.current!.classList.remove('animate-likeVideo')
      imageRef.current!.src = '/fill-heart.svg'
      isLiked = false
      setLikeCount(prev => prev - 1)
      return
    }
    isLiked = true
    imageRef.current!.classList.add('animate-likeVideo')
    imageRef.current!.src = '/fill-heart-red.svg'
    setLikeCount(prev => prev + 1)
  }

  return (
  <button onClick={() => onLikeVideo()}>
      <Image ref={imageRef} className="" src={'/fill-heart.svg'} width={40} height={40} alt='heart white icon' />
      <p>{likeCount}</p>
  </button>
  )
}
