import { cookies } from 'next/headers'
import jsonwebtoken, { verify } from 'jsonwebtoken'

// This function can be marked `async` if using `await` inside
export function middleware(request) {


    // console.log(request.cookies.get('token'))

    const verifyToken = async (token) => {
        let req = await fetch('http://localhost:3000/api/verify', {
            body: JSON.stringify({token}),
            method: "POST"
        })
        let data = await req.json()
        console.log(data)
    }

    if (request.nextUrl.pathname.startsWith('/login')) {
        const token = request.cookies.get('token')

        if (token) {
            verifyToken(token.value)
        }

    }
}