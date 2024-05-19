import React from 'react'
import Contact from '../components/Contact'

export default function RequestDonation() {
  return (
    <>
    <div className="about-heading min-h-[60vh] bg-red-500 text-white px-4 flex flex-col justify-center items-center">
      <div className="heading font-bold text-2xl text-center md:text-3xl">In Need of blood? Contact us</div>
      <div className="para text-center mt-3 md:text-lg">Fill the form and we willmake the blood available to you as soon as possible</div>
    </div>

    <Contact />
  </>
  )
}
