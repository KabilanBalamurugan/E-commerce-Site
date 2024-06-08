import React from 'react'
import Product from './product'
import "./Browse.css"
import { listItems } from './product-data'


const Browse=()=>{
  let Data=listItems.map((data)=>{
    return(
       <Product
      key={data.id}
      title={data.foodName}
      rating={data.rating}
      weight={data.weight}
      description={data.description}
      cost={data.cost}
      img={data.image}/>)
  })

  return(
    <body>
      {Data}
    </body>
  )
}

export default Browse

















// let Data=listItems
// const Browse = () => {
//  console.log(Data)
  
//   return (
//     <body>
//       {Data.map((res)=>{<Product Data1={(console.log(Data))}
//       />})}
//     </body>
//   )
// }

// export default Browse