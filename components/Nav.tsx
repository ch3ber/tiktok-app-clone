import Image from 'next/image'
import Link from 'next/link'

export default function Nav () {
  return (
    <nav className="absolute bottom-0 left-0 right-0 h-14 border-t border-zinc-500 bg-black text-white">
      <ul className="flex justify-evenly items-center my-2">
        <li>
          <Link href={'/'} className='felx flex-col justify-center items-center'>
            <div className="flex flex-col justify-center items-center" >
              <Image className="m-0 p-0" src={'/home-icon.svg'} width={20} height={20} alt='home icon' />
              <p>Home</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href={'/'} className='felx flex-col justify-center items-center'>
            <div className="flex flex-col justify-center items-center" >
              <Image className="m-0 p-0" src={'/users-line.svg'} width={20} height={20} alt='users icon' />
              <p>Friends</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href={'/'} className='felx flex-col justify-center items-center'>
            <div className="bg-white px-3 py-1 rounded-lg flex flex-col justify-center items-center" >
              <Image className="m-0 p-0" src={'/plus-icon.svg'} width={20} height={20} alt='plus icon' />
            </div>
          </Link>
        </li>
        <li>
          <Link href={'/'} className='felx flex-col justify-center items-center'>
            <div className="flex flex-col justify-center items-center" >
              <Image className="m-0 p-0" src={'/chat-square.svg'} width={20} height={20} alt='Inbox icon' />
              <p>Inbox</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href={'/'} className='felx flex-col justify-center items-center'>
            <div className="flex flex-col justify-center items-center" >
              <Image className="m-0 p-0" src={'/user-icon.svg'} width={20} height={20} alt='Profile icon' />
              <p>Profile</p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
