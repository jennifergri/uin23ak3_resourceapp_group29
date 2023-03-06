import resources from "../resources/ressurser"

export default function Article() {
  //Bruker data prop, for å få tak på innholdet i resources-arrayen. 
    return ( 
//Bruker map funksjonen, og kaller på data arrayen og til objektene (title, url og category) inni resources arrayen. Ber at artiklene skal inneholde listepunkter, og url. Sender props fra resources arrayen. 
      resources.map(({ title, url, category }, index) => (
      <article key={index} className="innhold">
            <h3>{category}</h3>
              <ul>
                <li key={index}>
                  {title}
                  <a key={url} href={url}>
                {url}
                </a>
                </li>
              </ul>
        </article> 
      ))
      )
    }  
        
      
