import Image from 'next/image'
import Link from 'next/link'
import { Controls } from '../components/Controls'

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

        <nav className="absolute bottom-0 left-0 right-0 h-14 border-t border-zinc-500 bg-black text-white">
          <ul className="flex justify-evenly items-center my-2">
            <li>
              <Link href={'/'} className='felx flex-col justify-center items-center'>
                <div className="flex flex-col justify-center items-center" >
                  <Image className="m-0 p-0" src={'/home-icon.svg'} width={20} height={20} alt='home icon'/>
                  <p>Home</p>
                </div>
                </Link>
            </li>
            <li>
              <Link href={'/'}>Friends</Link>
            </li>
            <li>
              <Link href={'/'}>+</Link>
            </li>
            <li>
              <Link href={'/'}>Inbox</Link>
            </li>
            <li>
              <Link href={'/'}>Profile</Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  )
}
