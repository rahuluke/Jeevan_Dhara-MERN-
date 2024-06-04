import React from 'react'
import BloodDB from '../components/BloodDB'

export default function SearchBloodPage() {
    return (
        <>
            <div className="about-heading min-h-[60vh] bg-red-500 text-white px-4 flex flex-col justify-center items-center">
                <div className="heading font-bold text-2xl text-center md:text-3xl">In Need for Blood? Find Here</div>
                <div className="para text-center mt-3 md:text-lg">search for the type of blood in the region contact us and we will deliver it to you as soon as possible</div>
            </div>
            <div className="md:px-4">
                <div className="container m-auto px-4 mdLpx-0">
                    <div className="heading text-2xl font-semibold text-zinc-800 my-5 sm:text-3xl md:my-8 text-center">Blood DB</div>
                </div>
            </div>
            <BloodDB />
        </>
    )
}
