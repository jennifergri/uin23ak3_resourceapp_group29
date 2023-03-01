export default function Nav({FunctionNav}) {


    return (
        
        <ul>
            {FunctionNav.map((menyItems, index) =>(
            <li key={index}><button onClick={index}>{menyItems.category}</button>
               
            </li>

            ))}

        </ul>

    )
}




