import ConnectToDB from "@/DB/ConnectToDB";
import Requests from "@/schema/Requests";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const { firstName, lastName, email, phone, bloodType, message } = await req.json()

    try {
        ConnectToDB()

        await Requests.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            bloodType: bloodType,
            message: message
        })

        return NextResponse.json({ status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ messege: "something went wrong" }, { status: 500 })
    }
}
