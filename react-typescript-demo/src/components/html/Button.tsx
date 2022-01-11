import React from "react"


type ButtonProps = {
    variant : 'primary' | 'secondary'
    children : string

// } & Omit< React.ComponentProps<'button'> ,'children'> 
}  & React.ComponentProps<'button'> 

// ...rest là truyền những props của button có sẵn
export const CustomButton = ({variant , children , ...rest } : ButtonProps)=>{
    return <button className={`class-width-${variant}`} {...rest}>{children}</button>
}