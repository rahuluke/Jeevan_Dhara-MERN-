import React from 'react'
import About from '../components/About'

export default function AboutPage() {
    return (
        <>
            <div className="about-heading min-h-[60vh] bg-red-500 text-white px-4 flex flex-col justify-center items-center">
                <div className="heading font-bold text-2xl text-center md:text-3xl">Who are we?</div>
                <div className="para text-center mt-3 md:text-lg">we are a community working on a welfare of people</div>
            </div>
            <About/>
        </>
    )
}
