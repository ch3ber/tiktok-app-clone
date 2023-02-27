import { config } from '../config'

export const useGetFeedVideos = async () => {
  // eslint-disable-next-line no-undef
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': config.X_RapidAPI_Key,
      'X-RapidAPI-Host': config.X_RapidAPI_Host
    }
  }

  // eslint-disable-next-line no-undef
  const response = await fetch(`${config.API_URL}/feed?region=MX&device_id=7523368224928586621`, options as RequestInit)
  const json = await response.json()
  const videos = json.aweme_list
  return videos
}
