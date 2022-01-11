type RandomNumberType = {
    value : number, 
}


type NegativeNumber =  RandomNumberType  & {
    isPositive? : never,    
    isNegative? : boolean,    
    isZero? : never,    
}

type PositiveNumber = RandomNumberType & {
    isPositive? : boolean,    
    isNegative? : never,    
    isZero? : never,
}
type ZeroNumber  =  RandomNumberType  & {
    isPositive? : never,    
    isNegative? : never,    
    isZero? : boolean,    
}

type RandomNumberProps =  PositiveNumber | NegativeNumber | ZeroNumber

type RandomNumberProps1 = {
    value: number
    isPositive?: boolean
    isNegative?: boolean
    isZero?: boolean
}

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNumberProps) => {
    return (
        <>
            {value} {isPositive && 'Positive'} {isNegative && 'Negative'} {''}
            {isZero && 'Zero'}
        </>
    )
}