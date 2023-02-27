export default function Meny ({resources}){

    let meny =""

    return (

    resources.map((menyItem, index) => {
    meny += `<a${index}" onclick="tab('${index}')">${menyItem.category}</a>`
    }) 


    )
}

