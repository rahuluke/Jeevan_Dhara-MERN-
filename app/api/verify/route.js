import { NextResponse } from "next/server";
import jsonwebtoken from "jsonwebtoken"

export async function POST(req, res) {

    const { token } = await req.json()

    try {
        let isVailed = jsonwebtoken.verify(token, process.env.JWT_SECRET)

        if (isVailed) {

            return NextResponse.json({ messege: "redirect" })
        }

    } catch (error) {

        return NextResponse.json({ it: "worked" })
    }

}
