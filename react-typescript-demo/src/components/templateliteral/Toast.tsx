type HorizonPosition = 'left'  | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom' 

type ToastProps = {
    position : `${HorizonPosition}-${VerticalPosition}` | Exclude <`${HorizonPosition}-${VerticalPosition}` , 'center-center'> | 'center'
}

export const Toast = ({position} : ToastProps)=>{

    return (
        <div>Toast Notification Position - {position}</div>
    )
}