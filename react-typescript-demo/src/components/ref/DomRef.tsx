import { useEffect, useRef } from "react"




export const DomRef = ()=>{
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(()=>{
        inputRef.current.focus()
        // inputRef.current?.focus()
    } , [])
   
    return (
        <div>
            <input type="text" ref = {inputRef} />
            {/* <button onClick={onButtonClick}>Focus the input</button> */}
        </div>
    )
}
