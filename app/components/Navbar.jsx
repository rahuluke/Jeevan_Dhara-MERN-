"use client"

import { HiBars3 } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import Link from 'next/link'
import { useState } from 'react';


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const links = [{
        name: "Home",
        href: "/"
    }, {
        name: "Blood Database",
        href: "/bloods"
    }, {
        name: "Donate Blood",
        href: "/donate"
    }, {
        name: "FAQs",
        href: "/faq"
    }, {
        name: "About Us",
        href: "/about"
    }
    ]

    function handleHamburger() {
        setIsOpen(!isOpen)
    }


    return (
        <nav className="py-3 md:py-4 px-4">
            <div className="container m-auto flex items-center justify-between">
                <Link href={"/"} className="logo font-semibold text-xl lg:text-2xl text-red-500">Jeevan<span className="">Dhara</span></Link>
                <button className="forMobi md:hidden" onClick={() => { handleHamburger() }}><HiBars3 size={30} /></button>
                <div className={`${isOpen ? "flex" : "hidden"} overlay absolute top-0 left-0 h-screen w-screen bg-black/40 z-10`}></div>
                <div className={`${isOpen ? "flex z-20 right-0" : "hidden right-32 "} flex-col sidebar absolute top-0  h-screen bg-white w-60 text-neutral-900 py-3 px-4 `}>
                    <div className="header flex justify-end items-center">
                        <button onClick={() => { handleHamburger() }}> <HiOutlineX size={30} /> </button>
                    </div>
                    <ul className="flex flex-col space-y-4 font-medium px-2 mt-4">
                        {links.map((link, key) => (
                            <li key={key} onClick={() => { handleHamburger() }}>
                                <Link href={link.href} className="" >{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className="hidden md:flex gap-7 md:text-sm lg:text-base">
                    {links.map((link, key) => (
                        <li key={key}>
                            <Link href={link.href} className="text-zinc-600 hover:text-zinc-900" >{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}