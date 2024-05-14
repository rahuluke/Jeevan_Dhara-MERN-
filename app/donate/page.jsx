import React from 'react'
import Contact from '../components/Contact'

export default function DonatePage() {
  return (
    <>
      <div className="about-heading min-h-[60vh] bg-red-500 text-white px-4 flex flex-col justify-center items-center">
        <div className="heading font-bold text-2xl text-center md:text-3xl">Want to donate blood? Contact us</div>
        <div className="para text-center mt-3 md:text-lg">Help us to by donating bolood this may save a persons life, help them and save their lives</div>
      </div>

      <Contact />
    </>
  )
}
