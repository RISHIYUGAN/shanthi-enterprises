import React, { useEffect, useState } from "react";
import logo from "../../Assets/images/logo.png";
import "./Header.css";
import Scrollspy from "react-scrollspy";
import { Sidebar } from "./sidebar";

const navlist = [
  "Home",
  "About Us",
  "Products",
  "Manufactures",
  "Contact",
];
export const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    // console.log(document.getElementById("hdr-main-div").offsetHeight)
    window.addEventListener("scroll", handlescroll);
  }, []);
  useEffect(()=>{
   if(sidebar===true){
    document.querySelector("#sidebar").style.height="300px"
   }
   if(sidebar===false){
    document.querySelector("#sidebar").style.height="0px"
   }
  },[sidebar])
  const handlescroll = () => {
    var main = document.getElementById("hdr-main-div")?document.getElementById("hdr-main-div"):"null";
    var home = document.getElementById("Home");
    console.log(main)
    if(main!=="null"){
      if (window.pageYOffset === 0) {
        main.style.transition = "none";
        main.style.boxShadow = "none";
        main.style.paddingTop = "40px";
        main.style.paddingBottom = "40px";
      // home.style.paddingTop="0px"
    } else {
        main.style.transition = "padding 0.5s";
        main.style.boxShadow = "0 0 20px rgb(219, 219, 219)";
        main.style.paddingTop = "30px";
        main.style.paddingBottom = "30px";
      // home.style.paddingTop="90px"
    }
    }
    //    document.getElementById("ref").innerHTML=window.pageYOffset
    //    window.removeEventListener('scroll',handlescroll)
  };
  return (
    <div id="hdr-main-div" className="hdr-main-div">
        <div className="header-wrapper">
      <div className="title-div">
        <img src={logo} className="logo" />
        <h4 className="title">Shanthi Enterprises</h4>
      </div>
      <div className="scrollspy-wrapper">
        <Scrollspy
          items={navlist}
          className="nav-list"
          currentClassName="active-nav"
          offset={-250}
          
        >
          {navlist.map((nav) => (
            <h3 key={nav} className="each-nav">
              <a href={"#" + nav}>{nav}</a>
            </h3>
          ))}
        </Scrollspy>
        <div onClick={()=>{setSidebar(!sidebar)
            // setTimeout(()=>{
            //    document.querySelector("#sidebar").style.height="300px"
            // },500)  
}}>
        <Sidebar/>
        </div>
         <div className="sidebar-container" id="sidebar">
        <Scrollspy
          items={navlist}
          className="m-nav-list"
          currentClassName="active-nav"
          offset={-200}
        >
          {navlist.map((nav) => (
            <div key={nav} className="s-each-nav" onClick={()=>{setSidebar(false)}}>
              <a href={"#" + nav}>{nav}</a>
            </div>
          ))}
        </Scrollspy>
        </div>
        {/* {sidebar && (
          <div className="sidebar-container">
              <Scrollspy
          items={navlist}
          className="mnav-list"
          currentClassName="active-nav"
          offset={-100}
        >
             {navlist.map((nav) => (
              <div className="s-each-nav">{nav}</div>
            ))}
        </Scrollspy>
           
          </div>
        )} */}
      </div>
      </div>
    </div>
  );
};
