import { useState } from "react"


export const LoggedIn = ()=>{
    const [isLogged , setIslogged] = useState(false)


    const handleLogin = () =>{
        setIslogged(true)
    }
    const handleLogout = () =>{
        setIslogged(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLogged? 'logged in' : 'logged out'}</div>
        </div>
    )
}