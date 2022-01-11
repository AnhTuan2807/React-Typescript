type statusProps = {
    // status : string, // random 
    status : 'loading' | 'success' | 'error' // chọn 1 trong 3
}
export const Status = (props: statusProps)=>{

    let mSG
    if (props.status === 'loading') mSG = 'Loading...'
    else if(props.status === 'success') mSG = 'Data fetched successfully!<' 
    else if(props.status === 'error') mSG = 'Error fetching data' 


    return(
        <>
            <h2>Status - {mSG}</h2>
        </>
    )
}