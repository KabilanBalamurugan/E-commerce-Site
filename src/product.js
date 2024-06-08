import React, { useState } from "react";
import "./product.css"
import { IoMdStar } from "react-icons/io";
 
 
let Product=({title,rating,img,cost,weight})=>{
    const [click,setClick]=useState(null)
    let count=()=>{
        setClick(click+1)
    }
 
 
    return(
        <div className='product-full'>
 
        <div className='product'>
                 <img src={img} alt="chick"/>
            <div className='product-description'>
                <p className='pname'>{title}</p>
                <div className="staring">
                    <IoMdStar style={{color:"gold"}}/>
                <span>{rating}</span>
                </div>
                <p className='pweight'>{weight}g</p>
                <div className="range">
                <p className='price'>₹{cost}</p>
                <button className='Add-button'onClick={count}>Add<span style={{marginLeft:"10px"}}>+{click}</span></button>  
            </div>                                                                     
            </div>
        </div>
    </div>
    )
}
export default Product
 
 
 
 