
export default function Article(data) {

  console.log(data)
  return ( 
    <article className="innhold">
          <h3>{data.category}</h3>
            <ul>
              <li>
                {data.title}
                <a href={data.url}>
                </a>
              </li>
            </ul>
      </article> 
    )
  }




/*export default function Article({data}) {
    return (    
//Bruker map funksjonen, og kaller på data arrayen og til objektene (title, url og category) inni resources arrayen. Ber at artiklene skal inneholde listepunkter, og url. Sender props fra resources arrayen. 
     resources.map(({title, url, category}, index) => (
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
    }*/  
        
      
