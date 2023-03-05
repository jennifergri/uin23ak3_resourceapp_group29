import resources from "../resources/ressurser";

export default function Nav({FunctionNav}) {

    const menyItems = resources

    console.log(resources)
    return (

       
         <ul>
            {FunctionNav.map((menyItems, index) =>(
            <li key={index}><button onClick={index}>{menyItems.category}</button>
               
            </li>

            ))}

        </ul> 


    )
    
}








