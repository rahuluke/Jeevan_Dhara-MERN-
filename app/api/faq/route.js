import ConnectToDB from '@/DB/ConnectToDB'
import FAQs from '@/schema/FAQs'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        ConnectToDB()
        let allEntries = await FAQs.find({})

        // if all entries 0 then create 3 of them

        if (allEntries.length == 0) {
            await FAQs.create({ title: "title1", paragraph: "paragraph1" }, { title: "title2", paragraph: "paragraph2" }, { title: "title3", paragraph: "paragraph3" })

            let allData = await FAQs.find({})

            return NextResponse.json({data: allData})
        }else{
            return NextResponse.json({data: allEntries})
        }

    } catch (err) {
        return NextResponse.json({ message: "something went wrong" }, {status: 500})
    }
}
