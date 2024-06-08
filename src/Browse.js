import React from 'react'
import Product from './product'
import "./Browse.css"
import { listItems } from './product-data'


const Browse=()=>{

  let Data=listItems;
  // let Data=listItems.map((data)=>{
  //   return(
  //      <Product
  //     key={data.info.id}
  //     title={data.info.name}
  //     rating={data.info.avgRating}
  //     weight={data.info.costForTwo}
  //     description={data.info.areaName}
  //     cost={data.info.price}
  //     img={data.info.cloudinaryImageId}/>)
  // })

  return(
    <body>
      {Data.map((res) => (<Product r={res}/>))}
    </body>
  )
}

export default Browse
