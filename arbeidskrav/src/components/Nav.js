export default function Nav({FunctionNav, menyItems, index}) {


    return (

       
         <ul>
            {FunctionNav.map((menyItems, index) =>(
            <li key={index}><button onClick={index}>{menyItems.category}</button>
               
            </li>

            ))}

        </ul> 

    )
}




