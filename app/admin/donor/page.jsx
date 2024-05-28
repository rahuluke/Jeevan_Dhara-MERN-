"use client"

import { useState, useEffect } from "react"
import { MdDelete } from "react-icons/md";

export default function DonorsPage() {
    const [Donors, setDonors] = useState([])
    const [Render, setRender] = useState(undefined)

    const getAllDonors = async () => {
        let res = await fetch('http://localhost:3000/api/donate')
        let data = await res.json()
        setDonors(data.data)
    }

    const deleteItem = async (index) => {
        let newData = [...Donors]
        // newData.splice(index, 1)

        let data = await fetch('http://localhost:3000/api/admin/donor', {
            method: "DELETE",
            body: JSON.stringify({ id: newData[index]._id })
        })

        if (data.status == 200) {
            setRender(Math.floor(Math.random()))
        } else {
            console.log("something went wrong")
        }

    }

    useEffect(() => {
        getAllDonors()
    }, [Render])
    return (
        <div className="md:px-4">
            <div className="container m-auto my-2 px-4 md:px-0">
                <div className="heading font-semibold text-3xl text-center mb-8">Donor Requests</div>
                <div className="data my-4 text-zinc-800 flex flex-col gap-4">
                    {Donors.length >= 0 && Donors.map((item, index) => (
                        <div className="box flex flex-col ring-1 py-2 px-2 sm:px-4 md:py-4 ring-zinc-300 rounded-lg" key={index}>
                            <div className="top flex flex-col mb-4">
                                <div className="localty text-xl font-semibold flex items-center justify-between">Name: {item.firstName} <button className="text-red-600" onClick={() => { deleteItem(index) }}><MdDelete size={25} /></button></div>
                                <div className="upload-time text-sm text-zinc-500">Request Time: 5hrs ago</div>
                            </div>
                            <div className="mid flex flex-col"><div className="name text-zinc-600">Email: <span className="text-zinc-600 font-bold">{item.email}</span></div> <div className="age text-zinc-600">Phone Number: {item.phone}</div> </div>
                            <div className="bottom mt-2 flex flex-col gap-1">
                                <div className="blood-type text-zinc-600 ">Blood Type: <span className="text-zinc-600 font-bold">{item.bloodType}</span> </div>
                                <div className="available-blood text-zinc-600 ">Message: <span className="text-zinc-600 font-bold">{item.message}</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
