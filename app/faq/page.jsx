import React from 'react'
import FAQs from '../components/FAQs'
import { Suspense } from 'react'
export default function FAQsPage() {
    return (
        <>
            <div className="about-heading min-h-[60vh] bg-red-500 text-white px-4 flex flex-col justify-center items-center">
                <div className="heading font-bold text-2xl text-center md:text-3xl">Frequently asked questions</div>
                <div className="para text-center mt-3 md:text-lg">ask us every thing we are ready to answer all of your questions </div>
            </div>

            <FAQs />


        </>
    )
}
