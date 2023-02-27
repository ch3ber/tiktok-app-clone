import Image from 'next/image'
import { useState } from 'react'

export default function CommentsControl () {
  const [isOpen, setIsOpen] = useState(false)

  const recommendSearch = {
    label: 'Example',
    link: 'https://ch3ber.github.io'
  }

  const LIKE_COUNT = 317

  const COMMENS = [
    {
      profile: {
        link: 'https://ch3ber.github.io',
        photo: 'https://picsum.photos/200',
        name: 'Eber Alejo'
      },
      comment: 'Phasellus bibendum maecenas primis tincidunt aptent',
      time: '2d',
      likeCount: 441
    },
    {
      profile: {
        link: 'https://ch3ber.github.io',
        photo: 'https://picsum.photos/200',
        name: 'Eber Alejo'
      },
      comment: 'Phasellus bibendum maecenas primis tincidunt aptent',
      time: '2d',
      likeCount: 441
    },
    {
      profile: {
        link: 'https://ch3ber.github.io',
        photo: 'https://picsum.photos/200',
        name: 'Eber Alejo'
      },
      comment: 'Phasellus bibendum maecenas primis tincidunt aptent',
      time: '2d',
      likeCount: 441
    },
    {
      profile: {
        link: 'https://ch3ber.github.io',
        photo: 'https://picsum.photos/200',
        name: 'Eber Alejo'
      },
      comment: 'Phasellus bibendum maecenas primis tincidunt aptent',
      time: '2d',
      likeCount: 441
    },
    {
      profile: {
        link: 'https://ch3ber.github.io',
        photo: 'https://picsum.photos/200',
        name: 'Eber Alejo'
      },
      comment: 'Phasellus bibendum maecenas primis tincidunt aptent',
      time: '2d',
      likeCount: 441
    },
    {
      profile: {
        link: 'https://ch3ber.github.io',
        photo: 'https://picsum.photos/200',
        name: 'Eber Alejo'
      },
      comment: 'Phasellus bibendum maecenas primis tincidunt aptent',
      time: '2d',
      likeCount: 441
    },
    {
      profile: {
        link: 'https://ch3ber.github.io',
        photo: 'https://picsum.photos/200',
        name: 'Eber Alejo'
      },
      comment: 'Phasellus bibendum maecenas primis tincidunt aptent',
      time: '2d',
      likeCount: 441
    }
  ]

  return (
      <>
        <button onClick={() => setIsOpen(true)}><Image src='/comments.svg' width={40} height={40} alt='Comment icon' /></button>

      <section className={`${isOpen ? 'translate-y-0' : 'translate-y-[500px] pointer-events-none'} transition-all duration-300 fixed z-10 pb-24 bottom-0 h-4/6 max-w-sm mx-auto bg-white right-0 left-0 rounded text-zinc-900`}>
        <div className='border-b-2 w-full p-4'>
          <h3 className='text-zinc-600 font-bold'>Search: <a className='text-blue-800' href={recommendSearch.link}>{recommendSearch.label}</a></h3>
        </div>
        <div className='relative'>
          <p className='text-center font-bold mt-5'>{LIKE_COUNT} comments</p>
          <button onClick={() => setIsOpen(false)}><Image className='absolute right-5 top-0' src='/close-icon.svg' width={15} height={15} alt='Close icon button' /></button>
        </div>
        <section className='p-5 flex flex-col gap-4 overflow-scroll h-full'>
          {COMMENS.map((comment, index) => {
            return (
              <article className='flex justify-start items-start gap-1' key={index}>
                <Image className='rounded-full' src={comment.profile.photo} width={30} height={30} alt="Profile picture" />
                <div>
                  <h4 className='text-zinc-600 font-bold'>{comment.profile.name}</h4>
                  <p>{comment.comment}</p>
                  <div className='flex justify-between items-center  text-zinc-800'>
                    <div className='flex items-center gap-3'>
                      <p>{comment.time}</p>
                      <p className='font-bold'>Reply</p>
                    </div>
                    <div className='flex items-center gap-8'>
                      <button className='flex gap-1'>
                        <Image src='/ghost-heart.svg' width={15} height={15} alt="Ghost heart icon" />
                        <p>{comment.likeCount}</p>
                      </button>
                      <button>
                        <Image src='dislike-icon.svg' width={15} height={15} alt="Dislike icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </section>
      </section>
      </>
  )
}
