import title from '../resources/ressurser';
import category from '../resources/ressurser';
import url from '../resources/ressurser';

export default function Article ({title, category, url}) {
    return (
        <h2>{title}</h2>
        <p>{category}</p>
        <ul>{url}</ul>
    )

}