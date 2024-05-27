"use client"

import { useState, useEffect } from 'react'

export default function AdminFAQs() {

  const [FAQs, setFAQs] = useState([])

  const getAllFAQs = async () => {
    let res = await fetch('http://localhost:3000/api/faq')
    let data = await res.json()
    setFAQs(data.data)
  }

  const updateTitle = (event, index) => {
    let newData = [...FAQs]
    newData[index].title = event.target.value
    setFAQs(newData)
  }

  const updateParagraph = (event, index) => {
    let newData = [...FAQs]
    newData[index].paragraph = event.target.value
    setFAQs(newData)
  }

  const updateData = async () => {
    let res = await fetch('http://localhost:3000/api/admin/faq', {
      method: "POST",
      body: JSON.stringify({ AllFAQs: FAQs })
    })
    let data = await res.json()
    console.log(res.status)
  }

  useEffect(() => {
    getAllFAQs()
  }, [])

  return (
    <div className="md:mx-4">
      <div className="container m-auto px-4 md:px-0">
        <div className="heading text-3xl font-semibold text-center my-4">FAQs</div>
        <div className="faqs flex flex-col gap-6">
          {console.log(FAQs)}
          {FAQs?.map((item, index) => (
            <div className="faq flex flex-col" key={index}>
              <label htmlFor="name">
                <div className="block py-2">Title</div>
                <input type="text" name="name" id="name" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.title} onChange={(e) => {
                  updateTitle(e, index)
                }} />
              </label>
              <label htmlFor="para">
                <div className="block py-2">Paragraph</div>
                <textarea name="para" id="para" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.paragraph} onChange={(e) => {
                  updateParagraph(e, index)
                }}></textarea>
              </label>
            </div>
          ))}
        </div>
        <div className="buttons my-4">
          <button className="bg-zinc-800 text-white py-[2px] px-4 rounded-md" onClick={() => {
            updateData()
          }}>Save</button>
        </div>
      </div>
    </div>
  )
}
