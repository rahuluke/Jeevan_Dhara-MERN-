import React from 'react'

export default function BloodDB() {
    return (
        <div className="md:px-4">
            <div className="container m-auto px-4 md:px-0">
                <div className="heading text-2xl font-semibold text-zinc-800 my-5 sm:text-3xl md:my-8 text-center">Blood DB</div>
                <div className="data my-4 text-zinc-800 flex flex-col gap-4">
                    <div className="box flex flex-col ring-1 py-2 px-2 sm:px-4 md:py-4 ring-zinc-300 rounded-lg">
                        <div className="top flex flex-col mb-4">
                            <div className="localty text-xl font-semibold">Region: Raipur</div>
                            <div className="upload-time text-sm text-zinc-500">Danation Time: 5hrs ago</div>
                        </div>
                        <div className="mid flex flex-col"><div className="name text-zinc-600">Donar Name: <span className="text-zinc-600 font-bold">Rahul Sharma</span></div> <div className="age text-zinc-600">age: 32</div> </div>
                        <div className="bottom mt-2 flex flex-col gap-1">
                            <div className="blood-type text-zinc-600 ">Blood Type: <span className="text-zinc-600 font-bold">A+</span> </div>
                            <div className="available-blood text-zinc-600 ">Quantity: <span className="text-zinc-600 font-bold">370ml</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
