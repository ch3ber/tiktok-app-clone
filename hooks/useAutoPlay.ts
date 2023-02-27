import { useRef } from 'react'

export const useAutoPlay = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const options = {

  }

  // eslint-disable-next-line no-undef
  const intersectionObserverCallback: IntersectionObserverCallback = (entries) => {
    const [entry] = entries

    if (!entry.isIntersecting) {
      entry.target.pause()
    }

    if (entry.isIntersecting) {
      entry.target.play()
    }
  }

  const observer = new IntersectionObserver(intersectionObserverCallback, options)

  observer.observe(videoRef.current as HTMLVideoElement)

  return [videoRef]
}
