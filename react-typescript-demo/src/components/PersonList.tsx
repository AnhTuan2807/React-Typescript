import { Name } from "./Person.types"


type personListProps ={
    names : Name[] ///type arr
}


export const PersonList = (props:personListProps)=>{
    return(
        <>
            {props.names.map((u,index)=>{
                return <h2 key={index}>{u.first} - {u.last}</h2>
            })}
        </>
    )
}