import BookMarkControl from './videoControls/BookMarkControl'
import CommentsControl from './videoControls/CommentsControl'
import LikeControl from './videoControls/LikeControl'
import ProfileControl from './videoControls/ProfileControl'
import ShareControl from './videoControls/ShareControl'

export function Controls () {
  return (
    <ul className="absolute right-3 bottom-3 flex justify-end items-center gap-5 flex-col">
      <li>{<ProfileControl profileUrl={'/'} />}</li>
      <li>{<LikeControl />}</li>
      <li>{<CommentsControl />}</li>
      <li>{<BookMarkControl />}</li>
      <li>{<ShareControl />}</li>
      <li>{<ProfileControl profileUrl={'/'} />}</li>
    </ul>
  )
}
