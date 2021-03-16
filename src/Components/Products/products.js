import React,{useEffect, useState} from "react"
import "./products.css"
import PreviousNextMethods from "../slicker/customslicker"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {history} from "../router/router"
import axios from "axios"
import {Response} from "../response/response"

const products=["Pump","Pump Set","Motor","Electricals","Cable"]

export const Products=()=>{
    const [productHighlight,setProductHighlight]=useState("Pump")
    const [email,setEmail]=useState(false)
    const [notify,setNotify]= useState(false)
    // const [autoplay,setAutoplay]=useState(false)

    useEffect(()=>{
    products.forEach((product)=>{document.getElementById(product).style.backgroundColor="white";document.getElementById(product).style.color="gray"})
    document.getElementById(productHighlight).style.backgroundColor="rgb(255, 103, 103)"
    document.getElementById(productHighlight).style.color="white"
    },[productHighlight])
    useEffect(()=>{
       if(email===true){
        document.getElementById("email-container").style.display="flex"
        setTimeout(()=>{
            document.getElementById("email-box").style.transform="scale(1) perspective(1px) translateZ(0)"
        },100)
       }
       if(email===false){
        document.getElementById("email-box").style.transform="scale(0)"
           setTimeout(()=>{
            document.getElementById("email-container").style.display="none"
           },500)
       }
    },[email])
    useEffect(()=>{
        console.log("notify",notify)
        if(notify){
         // document.querySelector(".response-div").style.display="flex"
         document.querySelector(".response-div").style.transition="transform 0.5s"
         document.querySelector(".response-div").style.transform="translateX(-50%) translateY(0%)"
         setTimeout(()=>{
          setNotify(false)
         },2500)
        }
        else{
         // document.querySelector(".response-div").style.display="none"
         document.querySelector(".response-div").style.transition="none"
         document.querySelector(".response-div").style.transform="translateX(-50%) translateY(-150%)"
        }
      },[notify])
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({
          email:e.target.email.value,
          name:e.target.name.value,
          productName:e.target.productname.value
        })
       axios.post("http://13.126.18.96:5000/api/enquirenow",{
         email:e.target.email.value,
         name:e.target.name.value,
         productName:e.target.productname.value
       }).then((res)=>{
      console.log(res)
      e.target.email.value=""
      e.target.name.value=""
     e.target.productname.value=""
     setNotify(true)
       })
      }
return(
    <div id="Products" className="p-main-div">
        <div className="container">
            <div className="category-wrapper">
  <div className="product-wrapper">
      <div className="collections-display">
          <div className="collections-title">
         <h4>OUR COLLECTIONS</h4>
         </div>
         <div className="product-display">
{products.map((product)=><div className="each-product" id={product} onClick={()=>{setProductHighlight(product);
document.querySelector(".slicker-container").scrollIntoView({block:"end"})}}>{product}</div>)}
         </div>
      </div>
</div>
  <PreviousNextMethods slickertype={productHighlight} email={()=>{setEmail(true)}}/>
    </div>
    </div>
    <div id="email-container" className="email-container" >
        <div id="bck-ref" className="bck-ref" onClick={()=>{setEmail(false)}}></div>
       <div id="email-box" className="email-box">
           <div className="exitDiv" onClick={()=>{
        setEmail(false)
        
      }}>
        <div className="exit">
        <div className="ediv_1"></div>
        <div className="ediv_2"></div>
        </div>
        </div>
        <div className="form">
             <h6>Request For Quotation :</h6>
             <form onSubmit={(e)=>{handleSubmit(e)}}>
                 {/* <div>
                 <i class="fas fa-envelope"></i>
                 </div> */}
                 <div className="i-div-1">
                 <div className="input-div">  
             <input type="text" placeholder="Company"></input>
             </div>
             <div className="input-div">  
             <input name="name" type="text" placeholder="Name" required></input>
             </div>
             </div>
             <div className="i-div-2">
             <div className="input-div">  
             <input name="email" type="email" placeholder="Email" required></input>
             </div>
             <div className="input-div">  
             <input type="Number" placeholder="Mobile"></input>
             </div>
             </div>
             <div className="i-div-3">
             <div className="input-div">  
             <input type="number" placeholder="Zip/Pin Code"></input>
             </div>
             <div className="input-div">  
             <input type="text" placeholder="Segment"></input>
             </div>
             <div className="input-div">  
             <input name="productname" type="text" placeholder="Product Name" required></input>
             </div>
             </div>
             <div className="t-a-input-div">
             <textarea placeholder="Describe your Buying Requirements & Qty." className="text-area"></textarea>
             </div>
             <button>Send  Inquiry</button>
             </form>
             </div>
       </div>
    </div>
    <Response/>
    </div>
)
}