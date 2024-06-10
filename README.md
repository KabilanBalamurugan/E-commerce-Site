# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




import React, { useState } from 'react'
import Product from './product'
import "./Browse.css"
import { listItems } from './product-data'


const Browse=()=>{

  let Data=listItems;
  const[listOfRes,setListOfRes]=useState(Data);
  console.log(listOfRes)


  return(
    <>
    <div className='filter-bbtn'> 
     <button className='filter-btn' onClick={() => {
      let filteredRes = listOfRes.filter((e) => e.info.avgRating > 4.5);
      setListOfRes(filteredRes)
     }}>   
     FILTER
     </button>
    </div>
    <body>
    
        
      {listOfRes.map((res) => (<Product r={res}/>))}
    </body>
    </>
  )
}

export default Browse





body {
    /* max-width: 800px;
  margin: 0 auto;
  padding: 0 20px; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #ad9e91;

}




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
                <p className='pweight'>{r.info.Weight}g</p>
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
 
 
 



 .product-full{
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100vh; Set the height to fill the viewport */
    margin: 15px;
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
background-color: rgb(255, 255, 255);

}
.product{
        /* height: 254.594px;
        width: 229.203px; */
    border-radius: 5px;
}
.product:hover{
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.product-img{
    width: 100%;
    height: 152.797px;
}
.product-description{
margin-left: 10px;
padding: 15px;
 
}
.product-description .pname{
margin-top: 4px;
font-weight: 700;
}
.product-description .staring{
    display: flex;
    justify-content: flex-start;
/* margin-top: 2px; */
/* font-weight: 400; */
}
.product-description .pweight{
margin-top: 2px;
font-weight: 400;
}
.product-description .price{
font-weight: bold;
}
.product-description .Add-button{
background-color: red;
border-radius: 5px;
color: white;
width: 100px;
}
.range{
    display: flex;
    justify-content: space-between;
    /* padding-left: 150px; */
}
.cartbutton{
    display: flex;
    justify-content: space-between;
}
.filter-btn{
    
    color: white;
    padding: 7px;
    margin: 10px;
    border-style: solid;
    border-color: black;
    border-radius: 20px;
    animation-name: filter;
    animation-duration: 5s;
    background-color:crimson;
    opacity: 0.5;
    transition: 0.4s;
    
}
.filter-bbtn{
    margin: 15px;
   
}
.filter-btn:hover{
    opacity: 1;
}

