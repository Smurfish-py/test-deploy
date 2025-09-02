import './index.css'

function Header() {
  return (
    <>
      <header className='flex items-center px-8 h-15 bg-sky-500 '>
        <div className='font-sans flex justify-between w-full text-white'>
          <h1 className='text-xl font-semibold'>Test Deploy Website ke Docker</h1>
          <p>Muhamad Rifqi Kurniawan</p>
          <p>Dibuat dengan React, Vite, dan Tailwindcss</p>
        </div>
      </header>
    </>
  )
}

export default Header
