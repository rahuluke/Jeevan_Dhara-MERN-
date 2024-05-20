import mongoose from "mongoose"

export default function ConnectToDB() {
    try {
        mongoose.connect(process.env.MONGODB_URL, {
            dbName: process.env.MONGODB_DB_NAME
        })

        console.log("connected to DB")


    } catch (e) {
        console.log("error occured", e)
    }
}
