import { useRef } from 'react'

export const useAutoPlay = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const options = {

  }

  // eslint-disable-next-line no-undef
  const intersectionObserverCallback: IntersectionObserverCallback = (entries) => {
    const [entry] = entries

    const videoElement = entry.target as HTMLVideoElement
    if (!entry.isIntersecting) {
      videoElement.pause()
    }

    if (entry.isIntersecting) {
      videoElement.play()
    }
  }

  const observer = new IntersectionObserver(intersectionObserverCallback, options)

  observer.observe(videoRef.current as HTMLVideoElement)

  return [videoRef]
}
