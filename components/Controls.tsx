import ProfileControl from './ProfileControl'

export function Controls () {
  return (
    <ul className="absolute right-3 bottom-3 flex justify-end items-center gap-5 flex-col">
      <li>{<ProfileControl profileUrl={'/'} />}</li>
      <li>{<ProfileControl profileUrl={'/'} />}</li>
      <li>{<ProfileControl profileUrl={'/'} />}</li>
      <li>{<ProfileControl profileUrl={'/'} />}</li>
      <li>{<ProfileControl profileUrl={'/'} />}</li>
      <li>{<ProfileControl profileUrl={'/'} />}</li>
    </ul>
  )
}
