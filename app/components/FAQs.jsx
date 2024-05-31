"use client"

import React from 'react'
import { useState, useEffect } from 'react/'

export default function FAQs() {

    const [AllFAQs, setAllFAQs] = useState(undefined)

    const getAllFAQs = async () => {
        let res = await fetch('http://localhost:3000/api/faq')
        let data = await res.json()
        setAllFAQs(data.data)
    }

    useEffect(() => {
        getAllFAQs()
    }, [])

    return (

        <div className="md:px-4">

            <div className="container m-auto px-4 md:px-0 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 rounded-t-lg my-6">
                    {AllFAQs ? AllFAQs.map(() => (
                        <div className="box py-4 md:px-6 px-4 ring-1 ring-zinc-700/50 rounded-lg">
                            <div className="question text-xl font-semibold text-zinc-800">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                            <div className="answer mt-3 text-zinc-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe labore omnis adipisci quas, placeat quibusdam eum necessitatibus dolore ipsum ab, amet dolor nostrum nam libero quos! Magnam facilis consequatur quo modi laboriosam illo dolor.</div>
                        </div>
                    )) :
                        <>
                            <div className="box py-4 md:px-6 px-4 bg-gray-100 rounded-lg">
                                <div className="h-6 w-full bg-gray-300 animate-pulse md:h-7"></div>
                                <div className="my-2 flex flex-col justify-start items-start w-full gap-2">
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-[35%] bg-gray-300 animate-pulse"></div>
                                </div>
                            </div>
                            <div className="box py-4 md:px-6 px-4 bg-gray-100 rounded-lg">
                                <div className="h-6 w-full bg-gray-300 animate-pulse md:h-7"></div>
                                <div className="my-2 flex flex-col justify-start items-start w-full gap-2">
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-[35%] bg-gray-300 animate-pulse"></div>
                                </div>
                            </div>
                            <div className="box py-4 md:px-6 px-4 bg-gray-100 rounded-lg">
                                <div className="h-6 w-full bg-gray-300 animate-pulse md:h-7"></div>
                                <div className="my-2 flex flex-col justify-start items-start w-full gap-2">
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-[35%] bg-gray-300 animate-pulse"></div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
