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



export let listItems = [
   {
     "info": {
       "id": "582150",
       "Weight":"150",
       "name": "Chinese Wok",
       "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
       "locality": "Avinashi Road",
       "areaName": "Peelamedu",
       "price":"350",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "Chinese",
         "Asian",
         "Tibetan",
         "Desserts"
       ],
       "avgRating": 4.2,
       "parentId": "61955",
       "avgRatingString": "4.2",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 28,
         "lastMileTravel": 3.9,
         "serviceability": "SERVICEABLE",
         "slaString": "25-30 mins",
         "lastMileTravelString": "3.9 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-08 02:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹149"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/chinese-wok-avinashi-road-peelamedu-coimbatore-582150",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "492041",
       "Weight":"120",
       "name": "Pizza Hut",
       "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
       "locality": "Avinash Road",
       "areaName": "Peelamedu",
       "price":"250",
       "costForTwo": "₹350 for two",
       "cuisines": [
         "Pizzas"
       ],
       "avgRating": 4.4,
       "parentId": "721",
       "avgRatingString": "4.4",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 25,
         "lastMileTravel": 1.8,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "1.8 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-08 01:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Pizza.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Pizza.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹249",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/pizza-hut-avinash-road-peelamedu-coimbatore-492041",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "236585",
       "Weight":"180",
       "name": "UBQ by Barbeque Nation",
       "cloudinaryImageId": "emokngtugausm3e8wcam",
       "locality": "Fun Republic Mall",
       "areaName": "Peelamedu",
       "price":"180",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "North Indian",
         "Barbecue",
         "Biryani",
         "Kebabs",
         "Mughlai",
         "Desserts"
       ],
       "avgRating": 4.1,
       "parentId": "10804",
       "avgRatingString": "4.1",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 39,
         "lastMileTravel": 2.8,
         "serviceability": "SERVICEABLE",
         "slaString": "35-40 mins",
         "lastMileTravelString": "2.8 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-07 23:30:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "50% OFF",
         "subHeader": "UPTO ₹100"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-fun-republic-mall-peelamedu-coimbatore-236585",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "307773",
       "Weight":"220",
       "name": "Barbeque Nation",
       "cloudinaryImageId": "bpn8bctxakzphazs1tj1",
       "locality": "Avinashi Road",
       "areaName": "Avinashi Road",
       "price":"450",
       "costForTwo": "₹600 for two",
       "cuisines": [
         "North Indian",
         "Barbecue",
         "Biryani",
         "Kebabs",
         "Mughlai",
         "Desserts"
       ],
       "avgRating": 4,
       "parentId": "2438",
       "avgRatingString": "4.0",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 39,
         "lastMileTravel": 2.8,
         "serviceability": "SERVICEABLE",
         "slaString": "35-40 mins",
         "lastMileTravelString": "2.8 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-07 23:30:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "50% OFF",
         "subHeader": "UPTO ₹100"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/barbeque-nation-avinashi-road-coimbatore-307773",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "82488",
       "Weight":"209",
       "name": "The Belgian Waffle Co.",
       "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
       "locality": "Avinashi Road",
       "areaName": "Peelamedu",
       "price":"190",
       "costForTwo": "₹200 for two",
       "cuisines": [
         "Waffle",
         "Desserts",
         "Ice Cream",
         "Beverages"
       ],
       "avgRating": 4.6,
       "parentId": "2233",
       "avgRatingString": "4.6",
       "totalRatingsString": "5K+",
       "sla": {
         "deliveryTime": 31,
         "lastMileTravel": 2.4,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "2.4 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-07 23:59:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "v1695133679/badges/Pure_Veg111.png",
             "description": "pureveg"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "pureveg",
                   "imageId": "v1695133679/badges/Pure_Veg111.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "20% OFF",
         "subHeader": "UPTO ₹50"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-avinashi-road-peelamedu-coimbatore-82488",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "575570",
       "Weight":"220",
       "name": "Nagerkovil Arya Bhavan",
       "cloudinaryImageId": "yj6g7wugbi5qbvjtoqmr",
       "locality": "Peelamedu",
       "areaName": "Peelamedu",
       "price":"90",
       "costForTwo": "₹200 for two",
       "cuisines": [
         "South Indian",
         "Chinese"
       ],
       "avgRating": 4.6,
       "parentId": "353249",
       "avgRatingString": "4.6",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 17,
         "lastMileTravel": 1.5,
         "serviceability": "SERVICEABLE",
         "slaString": "15-20 mins",
         "lastMileTravelString": "1.5 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-07 22:45:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "options available"
                 }
               }
             ]
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/nagerkovil-arya-bhavan-peelamedu-coimbatore-575570",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "385409",
       "Weight":"50",
       "name": "Dindigul Venu Biriyani",
       "cloudinaryImageId": "zjlp8z2tdg6dgify5fhd",
       "locality": "Avinash Road",
       "areaName": "Lakshmi Mills",
       "price":"250",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "Biryani",
         "Chinese"
       ],
       "avgRating": 4.2,
       "parentId": "244844",
       "avgRatingString": "4.2",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 19,
         "lastMileTravel": 1.6,
         "serviceability": "SERVICEABLE",
         "slaString": "15-20 mins",
         "lastMileTravelString": "1.6 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-07 17:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "10% OFF",
         "subHeader": "UPTO ₹40"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/dindigul-venu-biriyani-avinash-road-lakshmi-mills-coimbatore-385409",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "67645",
       "Weight":"350",
       "name": "Night Lion by Madhampatty Pakashala",
       "cloudinaryImageId": "qgck9fzi17ljdvwboljb",
       "locality": "Gauthama Puri Nagar",
       "areaName": "Peelamedu",
       "price":"130",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "South Indian",
         "Chinese",
         "Haleem"
       ],
       "avgRating": 4.3,
       "parentId": "377170",
       "avgRatingString": "4.3",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 29,
         "lastMileTravel": 4.1,
         "serviceability": "SERVICEABLE",
         "slaString": "25-30 mins",
         "lastMileTravelString": "4.1 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-08 05:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "40% OFF",
         "subHeader": "UPTO ₹80"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/night-lion-by-madhampatty-pakashala-gauthama-puri-nagar-peelamedu-coimbatore-67645",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "579276",
       "Weight":"190",
       "name": "Big Bowl",
       "cloudinaryImageId": "c99751d54e4e1847186c62b3309c1327",
       "locality": "Avinashi Road",
       "areaName": "Namburar",
       "costForTwo": "₹250 for two",
       "price":"350",
       "cuisines": [
         "North Indian",
         "Chinese",
         "Tibetan",
         "Desserts"
       ],
       "avgRating": 4.2,
       "parentId": "434792",
       "avgRatingString": "4.2",
       "totalRatingsString": "500+",
       "sla": {
         "deliveryTime": 25,
         "lastMileTravel": 3.9,
         "serviceability": "SERVICEABLE",
         "slaString": "25-30 mins",
         "lastMileTravelString": "3.9 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-08 02:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹179"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/big-bowl-avinashi-road-namburar-coimbatore-579276",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "440139",
       "Weight":"70",
       "name": "Great Indian Khichdi by EatFit",
       "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
       "locality": "Thanneerpandal main Road",
       "areaName": "Peelamedu",
       "price":"250",
       "costForTwo": "₹200 for two",
       "cuisines": [
         "Home Food",
         "Indian",
         "North Indian",
         "Healthy Food",
         "Snacks",
         "Desserts",
         "Rajasthani",
         "South Indian",
         "Maharashtrian",
         "Sweets"
       ],
       "avgRating": 4.3,
       "parentId": "319582",
       "avgRatingString": "4.3",
       "totalRatingsString": "500+",
       "sla": {
         "deliveryTime": 26,
         "lastMileTravel": 4.5,
         "serviceability": "SERVICEABLE",
         "slaString": "25-30 mins",
         "lastMileTravelString": "4.5 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-08 00:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "v1695133679/badges/Pure_Veg111.png",
             "description": "pureveg"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "pureveg",
                   "imageId": "v1695133679/badges/Pure_Veg111.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-thanneerpandal-main-road-peelamedu-coimbatore-440139",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "53332",
       "Weight":"220",
       "name": "Shree Aksshayam",
       "cloudinaryImageId": "bc2eb057b8474efce6932bb4335d950e",
       "locality": "Peelamedu",
       "areaName": "Peelamedu",
       "costForTwo": "₹200 for two",
       "cuisines": [
         "South Indian",
         "Chinese"
       ],
       "avgRating": 4.5,
       "parentId": "7115",
       "avgRatingString": "4.5",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 18,
         "lastMileTravel": 0.9,
         "serviceability": "SERVICEABLE",
         "slaString": "15-20 mins",
         "lastMileTravelString": "0.9 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-07 22:30:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "v1695133679/badges/Pure_Veg111.png",
             "description": "pureveg"
           }
         ]
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "pureveg",
                   "imageId": "v1695133679/badges/Pure_Veg111.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/shree-aksshayam-peelamedu-coimbatore-53332",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "50793",
       "name": "KFC",
       "Weight":"80",
       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1b92e544-fce7-45ac-941a-50092e3037a5_50793.JPG",
       "locality": "Peelamedu",
       "areaName": "Peelamedu",
       "costForTwo": "₹500 for two",
       "cuisines": [
         "Burgers",
         "Fast Food",
         "Rolls & Wraps"
       ],
       "avgRating": 4.2,
       "parentId": "547",
       "avgRatingString": "4.2",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 21,
         "lastMileTravel": 1.9,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "1.9 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-08 01:30:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Burger.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Burger.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "20% OFF",
         "subHeader": "UPTO ₹50"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/kfc-peelamedu-coimbatore-50793",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "50958",
       "Weight":"290",
       "name": "Domino's Pizza",
       "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
       "locality": "Peelamedu",
       "areaName": "Peelamedu",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Pizzas",
         "Italian",
         "Pastas",
         "Desserts"
       ],
       "avgRating": 4.3,
       "parentId": "2456",
       "avgRatingString": "4.3",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 25,
         "lastMileTravel": 2.2,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "2.2 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-08 02:59:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Pizza.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Pizza.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹150 OFF",
         "subHeader": "ABOVE ₹299",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/dominos-pizza-peelamedu-coimbatore-50958",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "56506",
       "Weight":"550",
       "name": "McDonald's",
       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/c2d802cb-ca03-4372-9f83-e3f34b318a71_56506.jpg",
       "locality": "Fun Republic Mall",
       "areaName": "Avinashi Road",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Burgers",
         "Beverages",
         "Cafe",
         "Desserts"
       ],
       "avgRating": 4.4,
       "parentId": "630",
       "avgRatingString": "4.4",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 23,
         "lastMileTravel": 2.8,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "2.8 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-07 23:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Burger.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Burger.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹199"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/mcdonalds-fun-republic-mall-avinashi-road-coimbatore-56506",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "437497",
       "Weight":"450",
       "name": "Covai Anganan Biriyani House",
       "cloudinaryImageId": "c8xcmqq3ecugauftcasf",
       "locality": "Avinashi Road",
       "areaName": "Lakshmi Mills",
       "costForTwo": "₹650 for two",
       "cuisines": [
         "Biryani",
         "South Indian",
         "Chinese",
         "Barbecue",
         "Tandoor",
         "Desserts"
       ],
       "avgRating": 4.3,
       "parentId": "230662",
       "avgRatingString": "4.3",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 21,
         "lastMileTravel": 2.8,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "2.8 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-07 22:30:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "options available"
                 }
               }
             ]
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/covai-anganan-biriyani-house-avinashi-road-lakshmi-mills-coimbatore-437497",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "60005",
       "Weight":"350",
       "name": "Thirupathi Mess",
       "cloudinaryImageId": "bzwckbvw6k8ncyw3lkfi",
       "locality": "Ramanathapuram",
       "areaName": "Ramanathapuram",
       "costForTwo": "₹100 for two",
       "cuisines": [
         "South Indian",
         "Indian"
       ],
       "avgRating": 4.5,
       "parentId": "215840",
       "avgRatingString": "4.5",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 21,
         "lastMileTravel": 3.5,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "3.5 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-07 16:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "10% OFF",
         "subHeader": "UPTO ₹40"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/thirupathi-mess-ramanathapuram-coimbatore-60005",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "68851",
       "Weight":"850",
       "name": "Cock Ra Co",
       "cloudinaryImageId": "u6wpylgszisslzsmlqvo",
       "locality": "Ramanathapuram",
       "areaName": "Ramanathapuram",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "Biryani",
         "Arabian",
         "South Indian",
         "Chinese"
       ],
       "avgRating": 4.5,
       "parentId": "4851",
       "avgRatingString": "4.5",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 22,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-07 22:45:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "20% OFF",
         "subHeader": "UPTO ₹50"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/cock-ra-co-ramanathapuram-coimbatore-68851",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "639491",
       "Weight":"850",
       "name": "Dum Safar Biryani",
       "cloudinaryImageId": "47eee43e59a6d49b0f6d9a2b0e523f47",
       "locality": "Avinashi Road",
       "areaName": "Peelamedu",
       "costForTwo": "₹500 for two",
       "cuisines": [
         "Biryani",
         "Kebabs",
         "Tandoor",
         "Indian",
         "Desserts"
       ],
       "avgRating": 3.8,
       "parentId": "351013",
       "avgRatingString": "3.8",
       "totalRatingsString": "100+",
       "sla": {
         "deliveryTime": 31,
         "lastMileTravel": 2.8,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "2.8 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-07 23:30:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "50% OFF",
         "subHeader": "UPTO ₹100"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/dum-safar-biryani-avinashi-road-peelamedu-coimbatore-639491",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "58704",
       "Weight":"950",
       "name": "RHR Hotels",
       "cloudinaryImageId": "2f42cc29f6c76d9dbe4752cc5cfc855b",
       "locality": "Peelamedu",
       "areaName": "Peelamedu",
       "costForTwo": "₹200 for two",
       "cuisines": [
         "South Indian",
         "Chinese"
       ],
       "avgRating": 4.5,
       "parentId": "5813",
       "avgRatingString": "4.5",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 24,
         "lastMileTravel": 4.5,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "4.5 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-07 23:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "20% OFF",
         "subHeader": "UPTO ₹50"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/rhr-hotels-peelamedu-coimbatore-58704",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "61502",
       "name": "Hyderabad Biriyani Hotel",
       "cloudinaryImageId": "j5ppnjc32bvsal2biicg",
       "locality": "Gandhipuram",
       "areaName": "Gandhipuram",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "Biryani",
         "Hyderabadi",
         "Chinese",
         "Tandoor"
       ],
       "avgRating": 4.3,
       "parentId": "4969",
       "avgRatingString": "4.3",
       "totalRatingsString": "5K+",
       "sla": {
         "deliveryTime": 26,
         "lastMileTravel": 3.9,
         "serviceability": "SERVICEABLE",
         "slaString": "25-30 mins",
         "lastMileTravelString": "3.9 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-06-08 02:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "40% OFF",
         "subHeader": "UPTO ₹80"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/hyderabad-biriyani-hotel-gandhipuram-coimbatore-61502",
       "type": "WEBLINK"
     }
   }
 ]
 
