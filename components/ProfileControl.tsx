import Image from 'next/image'
import Link from 'next/link'

type ProfileControlPropsT = {
  profileUrl: string
}

export default function ProfileControl ({ profileUrl }: ProfileControlPropsT) {
  return <Link href={profileUrl}>
      <Image className="rounded-full outline outline-2 outline-white" src={'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7613a33995339a8aa86e01ffdce99a35~c5_168x168.webp?x-expires=1672279200&x-signature=B6JLoRlqY%2FKl109E7kLGUVc9UOk%3D'} width={40} height={40} alt='profile user image' />
  </Link>
}
