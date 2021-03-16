import React from "react"
import "./allproducts.css"

export const Sidebar=(props)=>{
    return(
        <div className="p-toggle-div-wrapper" onClick={()=>props.handleClick()}>
        <div className="toggledivs" >
        </div>
        <div className="toggledivs">
        </div>
        <div className="toggledivs">
        </div>
    </div>
    )
}