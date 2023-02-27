import { config } from '../config'

export const useGetFeedVideos = async () => {
  // eslint-disable-next-line no-undef
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': config.X_RapidAPI_Key,
      'X-RapidAPI-Host': config.X_RapidAPI_Host
    }
  }

  const response = await fetch(`${config.API_URL}/feed?region=US&device_id=7523368224928586621`, options)
  const json = await response.json()
  const videos = json.aweme_list
  return videos
}
