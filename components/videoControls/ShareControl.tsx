import Image from 'next/image'
import ToggleCountButton from '../ToggleCountButton'

export default function ShareControl () {
  return (
    <ToggleCountButton initialCount={254}>
      <Image src='/share-arrow.svg' alt='book mark' width={40} height={40} />
    </ToggleCountButton>
  )
}
