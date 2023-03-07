import resources from "../resources/ressurser"
import { useParams } from 'react-router-dom';
import Article from "./Article";

export default function ArticleList() {

    // Henter kategori fra URL/kategori spesifisert i router
    let { category } = useParams()

    // Hvis ingen kategori er i urlen/valgt så skal html vises default
    if(category == null) category = "html"

    /* 
    */
   
      return (
        resources.filter(ressurs => ressurs.category === category).map((ressurs, index) => {
            return (<Article key={index} data={ressurs}></Article>)
        })
      );
    }

