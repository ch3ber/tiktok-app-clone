import Image from 'next/image'
import ToggleCountButton from '../ToggleCountButton'

export default function BookMarkControl () {
  return (
    <ToggleCountButton initialCount={254}>
      <Image src='/bookmark.svg' alt='book mark' width={40} height={40} />
    </ToggleCountButton>
  )
}
