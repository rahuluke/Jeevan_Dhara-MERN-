import ConnectToDB from "@/DB/ConnectToDB";
import User from "@/schema/Users";
import bcrypt from "bcrypt";

export async function POST(req, res) {
  const { name, password } = await req.json(); //gets the req.body

  try {
    ConnectToDB(); //connects to the DB
    let user = await User.findOne({ name: name }); //checks if user exists or not

    if (user) {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          //log the user in
        } else {
          //say invailed credentials
        }
      });
    } else {
      //say invailed credentials
    }

    // compare password and return res with cookie embeded or throws eerror
  } catch (err) {
    console.log(err);
    // returns something went wrong
  }

  return Response.json({ hello: "world" });
}
