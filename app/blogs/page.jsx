import React from 'react'
import BlogsCmp from '../components/Blogs'

export default function BlogsPage() {

  return (
    <>
      <div className="about-heading min-h-[60vh] bg-red-500 text-white px-4 flex flex-col justify-center items-center mb-8">
        <div className="heading font-bold text-2xl text-center md:text-3xl">Blogs</div>
        <div className="para text-center mt-3 md:text-lg">Read the blogs of lead industry professionals</div>
      </div>
      <BlogsCmp />
    </>
  )
}
