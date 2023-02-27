import { useAutoPlay } from '../hooks/useAutoPlay'

type VideoProps = {
  src: string
}

export default function Video ({ src }: VideoProps) {
  const [autoPlayRef] = useAutoPlay()

  return (
    <div
      className="bg-black snap-start h-video flex justify-center items-center"
    >

      <video
        className="h-video"
        controls
        loop
        ref={autoPlayRef}
      >
        <source src={src} type="video/mp4"></source>
      </video>
    </div>
  )
}
