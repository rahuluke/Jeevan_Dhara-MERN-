import ConnectToDB from "@/DB/ConnectToDB";
import Donate from "@/schema/Donate";
import { NextResponse } from "next/server";

export async function POST(req, res) {

    const {firstName, lastName, email, phone, bloodType, message} = await req.json()
    // console.log(firstName, lastName, email, phone, bloodType, messege)

    try{
        ConnectToDB()

        await Donate.create({
            firstName: firstName, 
            lastName: lastName,
            email: email,
            phone: phone,
            bloodType: bloodType,
            message: message
        })

        return NextResponse.json({status: 200})
    }catch(err){
        console.log(err)
        return NextResponse.json({messege: "something went wrong"}, {status: 500})
    }

}
