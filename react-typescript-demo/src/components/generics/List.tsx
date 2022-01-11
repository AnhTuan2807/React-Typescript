type ListProps<T>= {
    // items : string[] | number[] 
    // onClick : (value : string |number) => void 
    items : T[], 
    onClick : (value : T) => void 
}


// export const List = <T extends {}>({items , onClick } : ListProps<T>) =>{ /// T kế thừa từ json
export const List = <T extends { id: number}>({
    items , onClick, } : ListProps<T>) =>{
    return (
        <>
            <div>
                <h2>List of items</h2>
                {items.map((item,index) =>{
                    return (
                        <div key={item.id} onClick={() => onClick(item)}>
                            {item}
                        </div>
                    )
                })}
            </div>

            
        </>
    )
}




// import React from 'react'

// interface Item {
//     name: string,
//     age: number
// }

// interface listProp {
//     listItem: Item[],
//     action: () => void
// }

// export default function List(props: listProp) {

//     return (
//         <div>
//             {props.listItem.map( (item ,index )=>{
//                 return <div>
//                    <p>{item.name}</p>
//                    <p>{item.age}</p>
//                 </div>
//             })}
//             <button onClick={props.action}>
//                 Test
//             </button>
//         </div>
//     )
// }