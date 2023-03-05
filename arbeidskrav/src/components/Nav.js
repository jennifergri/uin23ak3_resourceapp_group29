import { useState } from "react"
import resources from "../resources/ressurser"


let categories = resources.map(ressurs => ressurs.category)
let menyItems = categories.filter((item,
    index) => categories.indexOf(item) === index)

export default function Nav() {

    const [category, setCategory] = useState("html")

    return (
         <ul>
            {menyItems.map((category, index) => {
            return (
            <>
            <li key={index}>
                <button onClick={() => setCategory(category)}>{category}</button>
            </li>
            </>
            )})}

{
                resources.filter(ressurs => ressurs.category === category).map(ressurs => {
                    return (<p>
                        {ressurs.title} : {ressurs.url}
                    </p>)
                })
                }

        </ul> 
    )
    
}








