import { Link } from "react-router-dom";
import resources from "../resources/ressurser"
import React from 'react';

// Henter ut alle kategorier fra ressurs listen
let categories = resources.map(ressurs => ressurs.category)
// Fjerner dobble kategorier
let menyItems = categories.filter((item,
    index) => categories.indexOf(item) === index)

export default function Nav() {

    // Mapper om alle de unike kategoriene til Link componenter med link til de ulike kategoriene som stemmer overens med Router
    return (
        <nav id="faneMeny">
            <ul>
            {menyItems.map((category, index) => {
                return (
                <li key={index}>
                    <Link to={category}>{category}</Link>
                </li>
            )})
            }
        </ul>
        </nav> 
    )
    
}








