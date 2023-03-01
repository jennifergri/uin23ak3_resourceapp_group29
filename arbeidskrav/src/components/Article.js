export default function Article ({title, url}) {
    return (
        <article className="innhold">
          <ul>
            <li key={title}><a key={url}></a></li>
          </ul>
        </article>
    )

  /* resources.map((resources) => {
    return (
    )
   }) */


}