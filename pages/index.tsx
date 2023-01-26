import Image from 'next/image'
import Link from 'next/link'
import { Controls } from '../components/Controls'
import Nav from '../components/Nav'

export default function Home () {
  return (
    <>
      <main className="relative bg-black text-white max-w-sm w-full h-screen mx-auto p-3 text-xs">
        <nav className="relative">
          <ul className="flex justify-center items-center gap-3">
            <li>Following</li>
            <li><Link href={'/'} className="underline">For Your</Link></li>
          </ul>
          <Link href={'/'} className='absolute top-0 right-0'><Image src='/search-icon.svg' width={'30'} height={'30'} alt="search icon" /></Link>
        </nav>
        <Controls />
        <Nav />
      </main>
    </>
  )
}
