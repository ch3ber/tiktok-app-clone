import { useEffect, useState } from 'react'
import { useGetFeedVideos } from '../hooks/useGetFeedVideos'
import Video from './Video'

export default function VideoList () {
  const [videos, setVideos] = useState()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGetFeedVideos()
      .then(videos => setVideos(videos))
  }, [])

  console.log(videos)

  return (
    <section className='pb-14 h-full absolute top-0 right-0 left-0 flex flex-col snap-y snap-mandatory overflow-y-auto'>
      {!videos
        ? 'Loading...'
        // @ts-ignore
        : videos.map((video, index) => {
          return <Video key={index} src={video.video.download_addr.url_list[0]} />
        })
      }
    </section>
  )
}
