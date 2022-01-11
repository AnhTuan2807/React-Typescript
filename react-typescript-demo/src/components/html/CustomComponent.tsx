import React from 'react'
import { Greet } from '../Greet'


//extracting a component props type
export const CustomComponent = (props : React.ComponentProps<typeof Greet>) => {

    
    return (
        <div>
            {props.name}
        </div>
    )
}
