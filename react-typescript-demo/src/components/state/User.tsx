import { useState } from "react"

export type AuthUser ={
    name : string 
    email : string
}


export const User = ()=>{

    const [user , setUser] =  useState<AuthUser | null>(null)
    const [user2 , setUser2] =  useState<AuthUser>({} as AuthUser)

    
    const handleLogin = () =>{
        setUser({
            name : 'Tuan',
            email : 'tuanitdz@gmail.com'
        })
    }
    // const handleLogout = () =>{
    //     setUser(null)
    // }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>Username is {user2.name}</div>
            <div>User email is {user2.email}</div>
        </div>
    )
}