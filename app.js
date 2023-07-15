/*
*
*<div id="parent">
*    <div id="child">
*        <h1 id="heading">Hello World from React</h1> 
         <h2 id="heading">Hello World from React</h1>      
    </div>
    <div id="child2">
*        <h1 id="heading">Hello World from React</h1> 
         <h2 id="heading">Hello World from React</h1>      
    </div>
*</div>
*
*
*
*/
import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header Component
      Logo
      Nav Items
      Cart
  
  Body Component
      Search Bar
      Container of Restaurants
        Restaurant Cards
  
  Footer Component
      Social Media Links
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BPnrca1z_lTwom8TaRkY3mmRp5Z9VoJlXw&usqp=CAU"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
const resObj = 
  [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "34840",
        "name": "Madras Cafe",
        "uuid": "298734b8-9c31-4176-bbae-2767e192ac50",
        "city": "6",
        "area": "Aundh",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "wuwa4bz30xs7hghccmbw",
        "cuisines": [
          "South Indian",
          "Thalis",
          "Chinese",
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 8.699999809265137,
        "slugs": {
          "restaurant": "madras-cafe-aundh-aundh",
          "city": "pune"
        },
        "cityState": "6",
        "address": "Shop 6, Sai Heritage, Aundh-Baner Link Road, Aundh, Pune",
        "locality": "Sai Heritage",
        "parentId": 612,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 7800,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 7800,
          "message": "",
          "title": "Delivery Charge",
          "amount": "7800",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7331531~p=1~eid=00000189-47f2-bd92-0381-125100520124~srvts=1689129237906",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "8.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "UPTO ₹45",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "34840",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 8.699999809265137,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "64313",
        "name": "Bedekar Misal",
        "uuid": "76e91fa0-4762-4781-b7b0-6eba02470db8",
        "city": "6",
        "area": "Shaniwar Peth",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "s7iaru1tltotpdqnk8fa",
        "cuisines": [
          "Maharashtrian"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 13,
        "minDeliveryTime": 13,
        "maxDeliveryTime": 13,
        "slaString": "13 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
          "restaurant": "bedekar-misal-budhwar-peth-swargate",
          "city": "pune"
        },
        "cityState": "6",
        "address": "Munjabacha Bol, Near Patrya Maruti Temple, Narayan Peth, Pune",
        "locality": "Budhwar Peth",
        "parentId": 42915,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "64313",
          "deliveryTime": 13,
          "minDeliveryTime": 13,
          "maxDeliveryTime": 13,
          "lastMileTravel": 1.2000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.5",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "70614",
        "name": "Wadeshwar (Bajirao road)",
        "uuid": "bf7a0b7b-9a10-4d13-ac15-bdcb79fd8f35",
        "city": "6",
        "area": "Sadashiv Peth",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "pgpzbjwj4chlpcvafm2l",
        "cuisines": [
          "South Indian",
          "Snacks",
          "Street Food",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 15,
        "minDeliveryTime": 15,
        "maxDeliveryTime": 15,
        "slaString": "15 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
          "restaurant": "shree-wadeshwar-bhuvan-shukrawar-peth-swargate",
          "city": "pune"
        },
        "cityState": "6",
        "address": "Near Telephone Exchange, Bajirao Road, Natubaug Chouk, Shukrawar Peth, Pune",
        "locality": "Bajirao Road",
        "parentId": 1770,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "70614",
          "deliveryTime": 15,
          "minDeliveryTime": 15,
          "maxDeliveryTime": 15,
          "lastMileTravel": 1.2999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.6",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "292517",
        "name": "Chai Point",
        "uuid": "941f2a71-a60a-4a6f-84e2-5219b80284d6",
        "city": "6",
        "area": "Baner",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "ewhrfspfrhqebt5xjawq",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "South Indian",
          "Punjabi",
          "Chaat",
          "Indian",
          "American",
          "North Indian",
          "Fast Food",
          "Desserts",
          "Cafe",
          "Healthy Food",
          "Home Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 40,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 40,
        "slaString": "40 MINS",
        "lastMileTravel": 8.800000190734863,
        "slugs": {
          "restaurant": "chai-point-baner-baner",
          "city": "pune"
        },
        "cityState": "6",
        "address": "Chai Point ,Sai Empire ,Near ICICI Bank Baner ,Pune ,Maharashtra 411045",
        "locality": "Baner Road",
        "parentId": 1607,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 7800,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 7800,
          "message": "",
          "title": "Delivery Charge",
          "amount": "7800",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7353948~p=4~eid=00000189-47f2-bd92-0381-125200520449~srvts=1689129237906",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "8.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "292517",
          "deliveryTime": 40,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 40,
          "lastMileTravel": 8.800000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "491702",
        "name": "Naadbramha Idli",
        "uuid": "cb7035f8-ee39-4707-8e8a-1ac65c32af1d",
        "city": "6",
        "area": "Swargate",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "ydrbvdsobyfzyapbkdmj",
        "cuisines": [
          "South Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "slaString": "14 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
          "restaurant": "naadbramha-idli-swargate-swargate",
          "city": "pune"
        },
        "cityState": "6",
        "address": "Shop No.3 ,Ground floor H.No.184 A/MP 2, Shivaji road,Kasba peth,pune-411011",
        "locality": "Rasta Peth",
        "parentId": 251339,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "491702",
          "deliveryTime": 14,
          "minDeliveryTime": 14,
          "maxDeliveryTime": 14,
          "lastMileTravel": 0.30000001192092896,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.7",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "147865",
        "name": "Aamhi Pohekar",
        "uuid": "6823a98d-af0b-4a5d-af39-73b2abbe1dce",
        "city": "6",
        "area": "Shaniwar Peth",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ws0he1js9rxpfz4i55dh",
        "cuisines": [
          "North Indian",
          "Maharashtrian",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 13,
        "minDeliveryTime": 13,
        "maxDeliveryTime": 13,
        "slaString": "13 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
          "restaurant": "aamhi-pohekar-narayan-peth-swargate",
          "city": "pune"
        },
        "cityState": "6",
        "address": "Shop no.2,Near Patrya Maruti Mandir,Narayan Peth,Pune, Pune PMC,411030",
        "locality": "Narayan Peth",
        "parentId": 25785,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "147865",
          "deliveryTime": 13,
          "minDeliveryTime": 13,
          "maxDeliveryTime": 13,
          "lastMileTravel": 1.2000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.7",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "79047",
        "name": "Appa",
        "uuid": "9bb1041e-a3a8-47eb-81d7-ab2860271a47",
        "city": "6",
        "area": "Kothrud",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "l50ghyjg1oqyll2guovq",
        "cuisines": [
          "Street Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 4.800000190734863,
        "slugs": {
          "restaurant": "appa-karve-nagar-kothrud",
          "city": "pune"
        },
        "cityState": "6",
        "address": "SR. NO. 39/2/2, SHOP NO. 1, ARCHANA NAGAR, PAUD ROAD, KOTHRUD, PUNE, Karve Road, Pune PMC, Maharashtra-411038",
        "locality": "Karve Nagar",
        "parentId": 12028,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7215001~p=7~eid=00000189-47f2-bd92-0381-12530052077b~srvts=1689129237906",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "79047",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 4.800000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "97272",
        "name": "Ramsar Bakery",
        "uuid": "cfe42fd8-bd52-45b2-8109-a713b7be6bcb",
        "city": "6",
        "area": "Shivaji Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "rmf8gsxyxtgejfj73dxe",
        "cuisines": [
          "Bakery",
          "Snacks",
          "Desserts",
          "Fast Food",
          "Beverages",
          "Indian",
          "Street Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "ramsar-bakery-shivaji-nagar-shivaji-nagar",
          "city": "pune"
        },
        "cityState": "6",
        "address": "Opposite PMC Building, Shivaji Nagar, Pune",
        "locality": "Congress House Road",
        "parentId": 166716,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "97272",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "375901",
        "name": "Shripad Idli center",
        "uuid": "45dc69fa-4723-46c1-a7db-b5ea09f5083b",
        "city": "6",
        "area": "Swargate",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "z0swwqykaia4kpgqdmvw",
        "cuisines": [
          "South Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
          "restaurant": "shripad-idli-center-swargate-swargate",
          "city": "pune"
        },
        "cityState": "6",
        "address": "174 , Kasba Peth near navaghra Shani mandir  opposite Shaniwar Wada",
        "locality": "Kasba Peth",
        "parentId": 187231,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "375901",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 0.30000001192092896,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.4",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "205007",
        "name": "Yolkshire",
        "uuid": "425ecaef-7145-4eb3-b105-e27a271e2963",
        "city": "6",
        "area": "F.C. Road",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "usaii3ciei7qqltmxubf",
        "cuisines": [
          "Healthy Food",
          "European",
          "Salads",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 2,
        "slugs": {
          "restaurant": "yolkshire-shivaji-nagar-shivaji-nagar",
          "city": "pune"
        },
        "cityState": "6",
        "address": "Millenium Plaza, Fergusson College Road, Fergusson College Campus, Deccan Gymkhana, Pune, Maharashtra, India",
        "locality": "F.C. Road",
        "parentId": 1202,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7394402~p=10~eid=00000189-47f2-bd92-0381-125400520a14~srvts=1689129237906",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "205007",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 2,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "434066",
        "name": "Roopali Restaurant - FC Road",
        "uuid": "2d00e033-5f93-4602-ac4a-7752151f3bd2",
        "city": "6",
        "area": "Shivajinagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ngmsdg7jvwbbg1rmxze7",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 2.4000000953674316,
        "slugs": {
          "restaurant": "roopali-restaurant---fc-road-shivaji-nagar-shivaji-nagar",
          "city": "pune"
        },
        "cityState": "6",
        "address": "1227, Opposite British Library, FC Road, Pune",
        "locality": "FC Road",
        "parentId": 261543,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "434066",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 2.4000000953674316,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.5",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "43274",
        "name": "Panchali Restaurant",
        "uuid": "5e0d6248-9ecb-4138-af9f-43c02d6d23c7",
        "city": "6",
        "area": "Shivajinagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ul9xzko9eliviajj2wft",
        "cuisines": [
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 1.100000023841858,
        "slugs": {
          "restaurant": "panchali-restaurant-jm-road-shivaji-nagar",
          "city": "pune"
        },
        "cityState": "6",
        "address": "Om Chambers, Opposite Jangali Maharaj Temple, JM Road, Pune",
        "locality": "JM Road",
        "parentId": 154209,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "43274",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 1.100000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "594722",
        "name": "Chaayos Chai+Snacks=Relax",
        "uuid": "b7a5a8e6-3b6a-462d-9965-6f4d7d8fac20",
        "city": "6",
        "area": "Camp Area",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 2.799999952316284,
        "slugs": {
          "restaurant": "chaayos-chaisnacksrelax-mg-road-swargate",
          "city": "pune"
        },
        "cityState": "6",
        "address": "Shop No1, Sterling Center 11, Moledina Road, MG Road, Pune Cantonment, Pune 411001, Pune Cantonment Board, Pune, Maharashtra - 411001",
        "locality": "MG Road",
        "parentId": 281782,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7253552~p=13~eid=00000189-47f2-bd92-0381-125500520d11~srvts=1689129237906",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "594722",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 2.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "135112",
        "name": "Granny Ammaas Cake",
        "uuid": "816136ec-a238-43e5-af02-2082d3414472",
        "city": "6",
        "area": "Rasta Peth",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "ntzbdqkm1utjbh05vlmv",
        "cuisines": [
          "Desserts",
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.8999999761581421,
        "slugs": {
          "restaurant": "granny-ammaas-cake-rasta-peth-swargate",
          "city": "pune"
        },
        "cityState": "6",
        "address": "576 Rasta Peth, Next to Somwar Peth Police Chowki, Near Daruwala Pool, Rasta Peth, Pune",
        "locality": "Somwar Peth ",
        "parentId": 89902,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "135112",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 0.8999999761581421,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    }

]
const RestaurantCard = (props) => {

  const resData = props.resData;
  console.log(resData);
  url = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.data.cloudinaryImageId
  // console.log(url)

  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}= 
  resData?.data;

  return (
  <div className="res-card">
    
    <img
      className="res-image"
      src={url}
    ></img>
    <h3>{name}</h3>
    <h3>{cuisines.join(",")}</h3>
    <h3>{avgRating} Stars</h3>
    <h3>Rs {costForTwo/100} for two </h3>
    <h3>{deliveryTime} Minutes</h3>
  </div>
)};
const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {
        resObj.map(restaurant=>(
          <RestaurantCard resData = {restaurant}/>
        ))
      }
      
    </div>
  </div>
);
const AppLayout = () => (
  <div className="App">
    <Header />
    <Body />
  </div>
);

root.render(<AppLayout />);
