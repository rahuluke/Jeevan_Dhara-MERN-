import ConnectToDB from "@/DB/ConnectToDB"

export async function GET() {

    try{
        ConnectToDB()
        return Response.json({ "hello": "world" })
    }catch(error){
        console.log(error)
        return Response.json({ "lelo": "world" })
    }
   
  }