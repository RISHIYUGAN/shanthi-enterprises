import React from "react"
import "./brands.css"


const brandslist3=["Motors",
"Lighting",
"V-belts",
"Solar",
"Terminal Blocks",
"Sensor",
"Bearings",
"Drives",
"Wires & Cables",
"Industrial Lubricants"

]
const brandslist1=[
"PVC Resin",
"Gearboxes",
"Gear Head",
"Unistar",
"Switchgears",
"SKF Products",
"Pneumatics",
"PPE Products",
"Pneumatics",
"Hindustan",
]
const brandslist2=["ABB",
"Bajaj",
"Bonfiglioli",
"Buzil Rossari",
"Castrol",
"Connectwell",
"Contitech",
"Elmeasure",
"Finolex",
"LV Capacitors",
]
const brandslist4=[
  "Legrand",
  "Panasonic",
  "Philips",
  "Polycab",
  "Siemens",
  "SMC",
  "RenewSys",
  "SMA",
  "Jinko",
  "Digital Panel Meters",]

const brandslist=[
]

export const Brands=()=>{
    return(
        <div className="br-main-div" id="Categories">
          <div className="container">
              <div style={{width:"100%"}}>
                <div className="brand-title">
                {/* <div className="empty-line"></div> */}
                <h3>Brands and Categories</h3>
                </div>
                <p className="brand-para">Good branding is arguably the most important thing when it comes to ensuring the success of your business. That’s why we’ve collected good  brands from the most successful branding companies.</p>
                <div className="br-display">
                  <div className="br-wrapper">
                    <div className="br-sub-wrap">
                  <div className="br-div">
                    <div className="each-div-wrapper">
                   {brandslist1.map((brand)=><h6 key={brand} className="each-br">{brand}</h6>)}
                   </div>
                  </div>
                  <div className="br-div">
                  <div className="each-div-wrapper">
                  {brandslist2.map((brand)=><h6 key={brand} className="each-br">{brand}</h6>)}
                  </div>
                  </div>
                  </div>
                  <div className="br-sub-wrap">
                  <div className="br-div">
                  <div className="each-div-wrapper">
                  {brandslist3.map((brand)=><h6 key={brand} className="each-br">{brand}</h6>)}
                  </div>
                  </div>
                  <div className="br-div">
                    <div className="each-div-wrapper">
                  {brandslist4.map((brand)=><h6 key={brand} className="each-br">{brand}</h6>)}
                  </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    )
}

