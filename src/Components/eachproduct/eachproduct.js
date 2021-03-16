import React, { useState,useEffect } from "react";
import {UnderLine} from "../underline/underline"
// import motor_1 from "../../Assets/images/motor-1.jpg";
// import motor_2 from "../../Assets/images/motor-2.jpg";
// import motor_3 from "../../Assets/images/motor-3.jpg";
// import motor_4 from "../../Assets/images/motor-4.jpg";
import "./eachproduct.css";
import logo from "../../Assets/images/logo.png";
import { history } from "../router/router";
import axios from "axios"

export const EachProduct = (props) => {
  const [prdct, setPrdct] = useState({
    des:history.location.state?history.location.state.des:null,
  });
  const [eachemail,setEachemail]=useState(false)
   
  useEffect(()=>{
    console.log("entering/....")
    // window.scrollTo({top: 0,left: 0,behavior:"auto"})
    if(history.location.state){
      setPrdct({des:history.location.state.des})
      console.log("updating.......")
    }
    else{
      setPrdct(
        {des:null}
      )
    }
  },[history.location.state])


  useEffect(()=>{
    if(prdct.des){
      if(eachemail===true){
        document.getElementById("each-email-container").style.display="flex"
        setTimeout(()=>{
            document.getElementById("each-email-box").style.transform="scale(1) perspective(1px) translateZ(0)"
        },100)
       }
       if(eachemail===false){
        document.getElementById("each-email-box").style.transform="scale(0)"
        console.log("enter2")
           setTimeout(()=>{
            document.getElementById("each-email-container").style.display="none"
           },500)
       }
    }
 },[eachemail])


  const markedstar = () => {
    var arr = [];
    for (var i = 1; i <= prdct.des.rating; i++) {
      // console.log("entering", i);
      arr = [...arr, <i class="fas fa-star"></i>];
      // loop()
    }
    for (var i = 0; i < 1; i++) {
      // console.log("entering1", i);
      // loop()
      return arr.map((star) => star);
    }
  };

  const unmarkedstar = () => {
    var arr = [];
    for (var i = 1; i <= 5 - prdct.des.rating; i++) {
      console.log("entering", i);
      arr = [...arr, <i class="fas fa-star"></i>];
      // loop()
    }
    for (var i = 0; i < 1; i++) {
      console.log("entering1", i);
      // loop()
      return arr.map((star) => star);
    }
  };
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
    props.notify()
   })
  }
if(prdct.des!==null){
  return (
    <div className="each-prdct-main-div">
        <div >
        {/* <style dangerouslySetInnerHTML={{__html: `
      html { scroll-behavior: auto }
    `}} /> */}
      <div className="go-back-div">
        <i class="fas fa-arrow-left"></i>
        <h6 onClick={()=>{props.handleClick()}}>View All Products</h6>
      </div> 
      {/* <div className="p-hdr-main-div">
        <div className="header-wrapper">
          <div className="title-div">
            <img src={logo} className="logo" />
            <h4 className="title">Shanthi Enterprises</h4>
          </div>
        </div>
      </div> */}
      <div className="e-prdct-dis-wrapper">
      <div className="e-prdct-display">
        <div className="e-prodct-img">
          {history.location.state &&
          <img src={history.location.state.img} />
}
        </div>
        {console.log(history)}
        <div className="prdct-description">
          <h5>
            {prdct.des.name}
             {/* - {prdct.des.kw} {prdct.des.hp} {prdct.des.pole}{" "}
            {prdct.des.rpm} {prdct.des.mounting} {prdct.des.class}{" "}
            {prdct.des.category} {prdct.des.amp} */}
          </h5>
          <div className="rating-div">
            <div className="marked">{markedstar()}</div>
            <div className="unmarked">{unmarkedstar()}</div>
            {/* {console.log(star())} */}
          </div>
          <div style={{marginTop:"25px"}}> <button className="e-prdct-enq-btn" onClick={()=>{setEachemail(true)}}>ENQUIRE NOW</button></div>
        </div>
      </div>
      <div className="prdct-information">
        <div className="info-title">
        <h5>PRODUCT INFORMATION
          <UnderLine backgroundColor="rgb(255, 30, 30)"/>
        </h5>
        </div>
        <table width="100%">
          <colgroup>
            <col span="1" className="column"></col>
          </colgroup>
          <tr>
            <th>
              <h6>Weight</h6>
            </th>
            <td>15.1</td>
          </tr>
          {prdct.des.kw && (
            <tr>
              <th>
                <h6>Kw</h6>
              </th>
              <td>{prdct.des.kw}</td>
            </tr>
          )}
          {prdct.des.hp && (
            <tr>
              <th>
                <h6>Hp</h6>
              </th>
              <td>{prdct.des.hp}</td>
            </tr>
          )}

          {prdct.des.pole && (
            <tr>
              <th>
                <h6>Pole</h6>
              </th>
              <td>{prdct.des.pole}</td>
            </tr>
          )}

          {prdct.des.rpm && (
            <tr>
              <th>
                <h6>Rpm</h6>
              </th>
              <td>{prdct.des.rpm}</td>
            </tr>
          )}

          {prdct.des.amp && (
            <tr>
              <th>
                <h6>Amp</h6>
              </th>
              <td>{prdct.des.amp}</td>
            </tr>
          )}

          {prdct.des.class && (
            <tr>
              <th>
                <h6>Class</h6>
              </th>
              <td>{prdct.des.class}</td>
            </tr>
          )}

          {prdct.des.category && (
            <tr>
              <th>
                <h6>Category</h6>
              </th>
              <td>{prdct.des.category}</td>
            </tr>
          )}
          {prdct.des.mounting && (
            <tr>
              <th>
                <h6>Mounting</h6>
              </th>
              <td>{prdct.des.mounting}</td>
            </tr>
          )}
        </table>
      </div>
      </div>
      <div id="each-email-container" className="each-email-container" >
        <div id="bck-ref" className="bck-ref" onClick={()=>{setEachemail(false)}}></div>
       <div id="each-email-box" className="each-email-box">
           <div className="exitDiv" onClick={()=>{
        setEachemail(false)
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
             <input type="text" name="name" placeholder="Name" required></input>
             </div>
             </div>
             <div className="i-div-2">
             <div className="input-div">  
             <input type="email" name="email" placeholder="Email" required></input>
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
             <input type="text" name="productname" placeholder="Product Name" required></input>
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
    </div>
    </div>
  );
}
else{
  {console.log("returning 0")}
  {console.log(prdct)}
  // {console.log(history.location.state.des)}
  console.log(history.location.state?true:false)
  return "";
}
};
