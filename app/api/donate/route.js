import ConnectToDB from "@/DB/ConnectToDB";
import Donate from "@/schema/Donate";
import { NextResponse } from "next/server";
import validator from "validator";


export async function POST(req, res) {
  const { firstName, lastName, email, phone, bloodType, message } =
    await req.json();
  // console.log(firstName, lastName, email, phone, bloodType, messege)

  try {
    ConnectToDB();

    if (validator.isEmail(email) && phone.length == 10) {
      await Donate.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        bloodType: bloodType,
        message: message,
      });

      return NextResponse.json({ status: 200 });
    } else {
      return NextResponse.json({ message: "invailed format" }, { status: 403 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { messege: "something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    ConnectToDB();

    let data = await Donate.find({});
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { messege: "something went wrong" },
      { status: 500 }
    );
  }
}
