import LikeControl from './videoControls/LikeControl'
import ProfileControl from './videoControls/ProfileControl'

export function Controls () {
  return (
    <ul className="absolute right-3 bottom-3 flex justify-end items-center gap-5 flex-col">
      <li>{<ProfileControl profileUrl={'/'} />}</li>
      <li>{<LikeControl />}</li>
      <li>{<ProfileControl profileUrl={'/'} />}</li>
      <li>{<ProfileControl profileUrl={'/'} />}</li>
      <li>{<ProfileControl profileUrl={'/'} />}</li>
      <li>{<ProfileControl profileUrl={'/'} />}</li>
    </ul>
  )
}
