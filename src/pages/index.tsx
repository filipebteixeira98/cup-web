import Image from 'next/image'

import logoImg from '../assets/logo.svg'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import usersAvatarExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'

export default function Home() {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logoImg} alt="NLW Copa" />
        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Create your own sweepstake and share with friends!
        </h1>
        <div className="mt-10 flex items-center gap-2">
          <Image src={usersAvatarExampleImg} alt="" />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.592</span> people are already
            using
          </strong>
        </div>
        <form className="mt-10 flex gap-2">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
            type="text"
            required
            placeholder="What are you going to call it?"
          />
          <button
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            type="submit"
          >
            Create my pool
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          After creating your pool, you will receive an unique code that you can
          use to invite other ones 🚀
        </p>
        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.034</span>
              <span>Pools created</span>
            </div>
          </div>
          <div className="w-px h-14 bg-gray-600" />
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+192.847</span>
              <span>Guesses sent</span>
            </div>
          </div>
        </div>
      </main>
      <Image src={appPreviewImg} alt="Application preview" quality={100} />
    </div>
  )
}
