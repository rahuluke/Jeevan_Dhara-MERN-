"use client"

import ConnectToDB from '@/DB/ConnectToDB'
import React from 'react'
import { useState } from 'react'

export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="flex justify-center items-center flex-col h-[70vh]">
            <div className="md:px-4">
                <div className="container m-auto px-4 md:px-0">
                    <div className="Heading font-bold text-center text-2xl mt-4 md:mt-8 text-zinc-700 md:text-3xl">Login</div>
                </div>
            </div>
            <div className=" container mx-auto flex flex-col md:px-32 lg:px-52 xl:px-64 2xl:px-72 ">
                <div className="right px-4 py-2 flex flex-col gap-6 lg:py-8 lg:px-12 xl:px-28">

                    <div className="email">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input type="email" name="" id="email" className="w-full px-2 py-1 outline-zinc-600 outline-1 ring-1 rounded-sm ring-neutral-400" value={email} onChange={getEmail} />
                    </div>
                    <div className="password">
                        <label htmlFor="password" className="block mb-2">Password</label>
                        <input type="password" name="" id="password" className="w-full px-2 py-1 outline-zinc-600 outline-1 ring-1 rounded-sm ring-neutral-400" value={password} onChange={getPassword} />
                    </div>

                    <button className="text-white px-4 py-2 rounded-md bg-red-500 hover:bg-red-500/90 w-full font-semibold">Login</button>

                </div>
            </div>
        </div>
    )
}
