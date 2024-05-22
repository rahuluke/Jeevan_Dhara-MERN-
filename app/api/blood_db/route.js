import { NextResponse } from "next/server";

export async function GET() {

    try { } catch (err) {
        console.log(err)
    }

    return NextResponse.json({ message: "returns all records of bloods available in db" })
}
