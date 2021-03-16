import React from "react"
import "./manufactures.css"
import finolex from "../../Assets/images/finolex.png"
import apollo from "../../Assets/images/apollo.png"
import pipesurgeons from "../../Assets/images/pipesurgeons.png"
import supreme from "../../Assets/images/supreme.png"
import taro from "../../Assets/images/taro.png"
import havels from "../../Assets/images/havels.png"
import bajaj from "../../Assets/images/bajaj.png"
import repsol from "../../Assets/images/repsol.png"
const Brands1=[
    {
        src:taro,
        name:"Taro"
    },
    {
        src:apollo,
        name:"Apollo"
    },
    
    {
        src:finolex,
        name:"Finolex"
    },
  
    {
        src:repsol,
        name:"Repsol"
    }
 
]
const Brands2=[
    
    {
        src:pipesurgeons,
        name:"Pipe Surgeons"
    },
    {
        src:supreme,
        name:"Supreme"
    },
    {
        src:havels,
        name:"Havels"
    },
    {
        src:bajaj,
        name:"Bajaj"
    },
   
]


export const Manufactures=()=>{
    return(
        <div id="Manufactures" className="mf-main-div">
         <div className="container">
             <div>
         <div className="mf-title-div">
         <div className="mf-emptyline"></div>
            <h3 className="mf-title">Manufactures</h3>
         </div>
         <div className="brands-display ">
                  <div>
                      <div className="pipe-brands ">
                      {Brands1.map((brand)=>
                          <div className="each-brand">
                          <div className="b-l-div">
                            <img src={brand.src} className="brand-logo"/>
                            </div>
                            <div className="brand-name">
                            <h5>{brand.name}</h5>
                            </div>
                        </div>
                      )}
                      </div>
                      <div className="pipe-brands">
                       {Brands2.map((brand)=>
                          <div className="each-brand">
                          <div className="b-l-div">
                            <img src={brand.src} className="brand-logo"/>
                            </div>
                            <div className="brand-name">
                            <h5>{brand.name}</h5>
                            </div>
                        </div>
                       
                      )}
                       </div>
                    {/* <div className="each-brand">
                      <div className="b-l-div">
                        <img src={taro} className="brand-logo"/>
                        </div>
                        <div className="brand-name">
                        <h5>Taro</h5>
                        </div>
                    </div>
                    <div className="each-brand">
                      <div className="b-l-div">
                        <img src={supreme} className="brand-logo"/>
                        </div>
                        <div className="brand-name">
                        <h5>Supreme</h5>
                        </div>
                    </div>
                    <div className="each-brand">
                      <div className="b-l-div">
                        <img src={finolex} className="brand-logo"/>
                        </div>
                        <div className="brand-name">
                        <h5>Finolex</h5>
                        </div>
                    </div>
                    <div className="each-brand">
                      <div className="b-l-div">
                        <img src={apollo} className="brand-logo"/>
                        </div>
                        <div className="brand-name">
                        <h5>Apollo</h5>
                        </div>
                    </div> */}
                  </div>
                </div>
                </div>
         </div>
        </div>
    )
}