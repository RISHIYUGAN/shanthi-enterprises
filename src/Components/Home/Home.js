import React,{Fragment, useEffect } from "react";
import SE_banner from "../../Assets/images/SE-banner.PNG"
import { Header } from "../Header/Header";
import "./Home.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import slider from "../../Assets/images/sampleimg.jpg"
import Slider from "react-slick";

const Home = () => {
  // var settings = {
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   arrows:true
  // };
  // const next=()=>{
  //   this.slider.slickNext();
  // }
  return (
    <div id="Home" className="home-main-div" >
       {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol id="c-ind" class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div>
      <img id="img-1"  class="d-block" src={slider} alt="First slide"/>
      </div>
    </div>
    <div class="carousel-item">
      <img id="img-1"  class="d-block" src={slider} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img id="img-1"  class="d-block" src={slider} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}

      <div className="container">
        <div style={{width:"100%"}}>
      <div style={{width:"100%",overflowX:"hidden",marginLeft:"50%",transform:"translate(-50%)"}}>
<img src={SE_banner} style={{width:"100%",marginLeft:"50%",transform:"translate(-50%)"}}/>
</div>
        {/* <div className="ad-block-2">
        
      <div className="bck-4">
          <h3>High-quality furnitures</h3>
          <h3>For your home</h3>
          <h4 className="view-clns"><h4>View Collections </h4><h4 style={{marginBottom:"-1px",paddingLeft:"10px"}}>></h4></h4>
      </div>
      <div className="bck-5">
      <h3>Hot Offer</h3>
          <h3>Discount upto 80%</h3>
          <h4 className="view-clns"><h4>View Collections </h4><h4 style={{marginBottom:"1px",paddingLeft:"10px"}}>></h4></h4>
      </div>
      </div> */}
      </div>
      </div>
    </div>
   
  );
};
export default Home;

