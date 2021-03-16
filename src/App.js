import logo from './logo.svg';
import './App.css';
import React,{useEffect} from "react"
import Home from "./Components/Home/Home"
import {Header} from "./Components/Header/Header"
import {OurStory} from "./Components/about/about"
import {Portfolio} from "./Components/portfolio/portfolio"
import {Team} from "./Components/team/team"
import {Blog} from "./Components/blog/blog"
import {Products} from "./Components/Products/products" 
import {Brands} from "./Components/brands/brands"
import {Manufactures} from "./Components/manufacturers/manufactures"
import {Contact} from "./Components/contact/contact"
import {AppRouter} from "./Components/router/router"
function App() {
//   useEffect(()=>{
//     const actualHeight = window.innerHeight;
// const elementHeight = document.getElementById('control-height').clientHeight;
// const barHeight = elementHeight - actualHeight;
// <style dangerouslySetInnerHTML={{__html: `
//       html { margin-top:${barHeight}}
//     `}} />
//   },[])
  useEffect(() => {
  document.querySelector(".App-container").addEventListener("scroll", handlescroll);
}, []);
const handlescroll = () => {
  var main = document.getElementById("hdr-main-div")?document.getElementById("hdr-main-div"):"null";
  var home = document.getElementById("Home");
  console.log(main)
  if(main!=="null"){
    console.log("ent")
    if (window.pageYOffset === 0) {
      main.style.transition = "none";
      main.style.boxShadow = "none";
      main.style.paddingTop = "40px";
      main.style.paddingBottom = "40px";
      console.log("ent1")
    // home.style.paddingTop="0px"
  } else {
      main.style.transition = "padding 0.5s";
      main.style.boxShadow = "0 0 20px rgb(219, 219, 219)";
      main.style.paddingTop = "30px";
      main.style.paddingBottom = "30px";
    // home.style.paddingTop="90px"
  }
  }
}
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App-container">
      {/* <div id="control-height"></div> */}
      <AppRouter/>
      </div>
   
  );
}

export default App;

