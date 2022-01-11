type GreetProps = {
    name : String , 
    msgCount? : number,
    isLogged : boolean,
}

export const Greet = (props: GreetProps)=>{
    const {msgCount = 0} = props
    return (
    <>
        <div>
            <h2>
                {props.isLogged 
                    ? `Welcome ${props.name}! You have ${msgCount} unread messages`
                    : 'Welcome Guest'}
            </h2> 
        </div>
    </>
    )
} 