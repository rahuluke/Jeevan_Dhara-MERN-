"use client"

import { useState, useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { HiOutlineChevronDown } from 'react-icons/hi2';
import mongoose from 'mongoose';



export default function BloodsPage() {

    const [Donors, setDonors] = useState([])

    const getAllDonors = async () => {
        let res = await fetch('http://localhost:3000/api/blood_db')
        let data = await res.json()
        setDonors(data.data)
    }

    const addFeild = () => {
        let data = [...Donors]
        data.push({ name: "Enter Name", region: "", age: "", bloodType: "", quantity: "" })
        setDonors(data)
    }

    const removeFeild = (index) => {
        let data = [...Donors]
        data.splice(index, 1)
        setDonors(data)
    }

    const updateName = (event, id) => {
        let data = [...Donors]

        let donorIndex = data.findIndex((item) => item._id == id)
        if (donorIndex != -1) {
            data[donorIndex].name = event.target.value
            setDonors(data)
        }

    }



    useEffect(() => {
        getAllDonors()
    }, [])

    return (
        <div className="md:mx-4">
            <div className="container m-auto px-4 md:px-0">
                <div className="heading text-3xl font-semibold text-center my-4">FAQs</div>
                <div className="faqs flex flex-col gap-6">
                    {Donors?.map((item, index) => (
                        <details className="group border-b-[1px] py-4 border-neutral-300 w-full cursor-pointer" key={index}>
                            <summary className="text-neutral-900 flex items-center justify-between gap-2">
                                <div className="left font-semibold text-xl">{item.name}</div>
                                <div className="right flex items-center gap-4">
                                    <button className="text-red-600"><MdDelete size={20} onClick={() => {
                                        removeFeild(index)
                                    }} /></button>
                                    <div className="group-open:rotate-180 flex gap-2"><HiOutlineChevronDown size={26} /> </div>
                                </div>
                            </summary>
                            <div className="faq flex flex-col my-2">
                                <label htmlFor="name">
                                    <div className="py-2 flex items-center justify-between">Name </div>
                                    <input type="text" name="name" id="name" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.name} onChange={(e) => {
                                        updateName(e, item._id)
                                    }} />
                                </label>
                                <label htmlFor="region">
                                    <div className="block py-2">Region</div>
                                    <input type="text" name="region" id="region" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.region} />
                                </label>
                                <label htmlFor="age">
                                    <div className="block py-2">Age</div>
                                    <input type="number" name="age" id="age" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.age} />
                                </label>
                                <label htmlFor="bloodType">
                                    <div className="block py-2">Blood Type</div>
                                    <input type="text" name="bloodType" id="bloodType" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.bloodType} />
                                </label>
                                <label htmlFor="qty">
                                    <div className="block py-2">Quantity</div>
                                    <input type="number" name="qty" id="qty" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.quantity} />
                                </label>
                            </div>
                        </details>

                    ))}

                </div>
                <div className="buttons my-4 flex flex-col gap-4">
                    <button className="outline-dashed outline-1 py-1 rounded-sm outline-zinc-400 flex items-center justify-center text-sm" onClick={() => {
                        addFeild()
                    }}> <span><IoIosAdd size={26} /></span>Add Column</button>
                    <button className="bg-zinc-800 text-white py-[2px] px-4 rounded-md w-fit self-end" onClick={() => { }}>Save</button>
                </div>
            </div>
        </div>
    )
}
