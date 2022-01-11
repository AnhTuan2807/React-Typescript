import { useContext } from "react"
import { UserContext } from "./UserContext"




export const User = ()=>{
    const userContext  = useContext(UserContext)

    const handleLogin = ()=>{
        userContext.setUser({
            name : 'Tuan' , 
            email : 'tuanitdz@gmail.com'
        })
        // if (userContext){
        //     userContext.setUser({
        //         name : 'Tuan' , 
        //         email : 'tuanitdz@gmail.com' //cách 1
        //     })
        // }
    }
    const handleLogout = ()=>{
        userContext.setUser(null)
        // if (userContext) {
        //     userContext.setUser(null) /cách 1
        // }
    }

    return (
<>
        <div>
            <button onClick={handleLogin}> Login </button> &nbsp;
            <button onClick={handleLogout}> Logout </button>
            {/* <div>Username is {userContext?.user?.name}</div>
            <div>Email is {userContext?.user?.email}</div> */} 
    
            <div>Username is {userContext.user?.name}</div>
            <div>Email is {userContext.user?.email}</div>
        </div>
</>
    )
}