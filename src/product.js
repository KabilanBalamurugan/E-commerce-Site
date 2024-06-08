import React, { useState } from "react";
import "./product.css"
import { IoMdStar } from "react-icons/io";
 
 
let Product=({r})=>{
    const [click,setClick]=useState(null)
    let count=()=>{
        setClick(click+1)
    }
 
 
    return(
        <div className='product-full'>
 
        <div className='product'>
                 <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+r.info.cloudinaryImageId} alt="chick"/>
            <div className='product-description'>
                <p className='pname'>{r.info.name}</p>
                <div className="staring">
                    <IoMdStar style={{color:"gold"}}/>
                <span>{r.info.avgRating}</span>
                </div>
                <p className='pweight'>{}g</p>
                <div className="range">
                <p className='price'>₹{r.info.price}</p>
                <button className='Add-button'onClick={count}>Add<span style={{marginLeft:"10px"}}>+{click}</span></button>  
            </div>                                                                     
            </div>
        </div>
    </div>
    )
}
export default Product
 
 
 
 
