import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./customslicker.css";
import slider from "../../Assets/images/sampleimg.jpg";
import p1 from "../../Assets/images/p1.jpg";
import p2 from "../../Assets/images/p2.jpg";
import p3 from "../../Assets/images/p3.jpg";
import p4 from "../../Assets/images/p4.jpg";
import { Route, Redirect,NavLink } from "react-router-dom";
import {history} from "../router/router"

const slickerList=[1,2,3,4,5,6]


export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      //   dots: true,
      autoplay:true,
      autoplaySpeed: 10000,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint:992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 10000,
          }
        },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 10000,
          }
        },
        {
          breakpoint:600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 10000,
          }
        }]
    };
    return (
      <div className="slicker-container">
        <div className="slicker-wrapper" style={{width:"95%"}}>
        <Slider ref={(c) => (this.slider = c)} {...settings} style={{maxWidth:"100%",boxSizing: "border-box"}}>
          {this.props.slickertype==="Pump" &&
          slickerList.map((list)=>
          <div key={list} className="div">
          <div className="s-img-div">
            <img src={p1} className="sli-img" style={{ width: "100%" }} />
          </div>
          <div className="p-des-div">
            <h5>Pump</h5>
            <div className="star-icon-div">
              <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            </div>
            {/* <h6>$59.00 <del>$69.00</del></h6> */}
            <button onClick={this.props.email}>Enquire Now</button>
          </div>
        </div>)}
        {this.props.slickertype==="Pump Set" &&
          slickerList.map((list)=>
          <div key={list} className="div">
          <div className="s-img-div">
            <img src={p2} className="sli-img" style={{ width: "100%" }} />
          </div>
          <div className="p-des-div">
            <h5>Pump Set</h5>
            <div className="star-icon-div">
              <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            </div>
            {/* <h6>$59.00 <del>$69.00</del></h6> */}
            <button onClick={this.props.email}>Enquire Now</button>
          </div>
        </div>)}
        {this.props.slickertype==="Motor" &&
          slickerList.map((list)=>
          <div key={list} className="div">
          <div className="s-img-div">
            <img src={p4} className="sli-img" style={{ width: "100%" }} />
          </div>
          <div className="p-des-div">
            <h5>Motor</h5>
            <div className="star-icon-div">
              <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            </div>
            {/* <h6>$59.00 <del>$69.00</del></h6> */}
            <button onClick={this.props.email}>Enquire Now</button>
          </div>
        </div>)}
        {this.props.slickertype==="Electricals" &&
          slickerList.map((list)=>
          <div key={list} className="div">
          <div className="s-img-div">
            <img src={p1} className="sli-img" style={{ width: "100%" }} />
            
          </div>
          <div className="p-des-div">
            <h5>Electricals</h5>
            <div className="star-icon-div">
              <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            </div>
            {/* <h6>$59.00 <del>$69.00</del></h6> */}
            <button onClick={this.props.email}>Enquire Now</button>
          </div>
        </div>)}
        {this.props.slickertype==="Cable" &&
          slickerList.map((list)=>
          <div key={list} className="div">
          <div className="s-img-div">
            <img src={p2} className="sli-img" style={{ width: "100%" }} />
          </div>
          <div className="p-des-div">
            <h5>Cable</h5>
            <div className="star-icon-div">
              <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            </div>
            {/* <h6>$59.00 <del>$69.00</del></h6> */}
            <button onClick={this.props.email}>Enquire Now</button>
          </div>
        </div>)}
          {/* <div key={2} className="div">
            <div className="s-img-div">
              <img src={p2} className="sli-img" style={{ width: "100%" }} />
            </div>
            <div className="p-des-div">
              <h5>Touchwood Chair</h5>
              <div className="star-icon-div">
                <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              </div>
              <h6>$59.00 <del>$69.00</del></h6>
            </div>
          </div>
          <div key={3} className="div">
            <div className="s-img-div">
              <img src={p4} className="sli-img" style={{ width: "100%" }} />
            </div>
            <div className="p-des-div">
              <h5>Touchwood Chair</h5>
              <div className="star-icon-div">
                <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              </div>
              <h6>$59.00 <del>$69.00</del></h6>
            </div>
          </div>
          <div key={4} className="div">
            <div className="s-img-div">
              <img src={p1} className="sli-img" style={{ width: "100%" }} />
            </div>
            <div className="p-des-div">
              <h5>Touchwood Chair</h5>
              <div className="star-icon-div">
                <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              </div>
              <h6>$59.00 <del>$69.00</del></h6>
            </div>
          </div>
          <div key={5} className="div">
            <div className="s-img-div">
              <img src={p2} className="sli-img" style={{ width: "100%" }} />
            </div>
            <div className="p-des-div">
              <h5>Touchwood Chair</h5>
              <div className="star-icon-div">
                <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              </div>
              <h6>$59.00 <del>$69.00</del></h6>
            </div>
          </div>
          <div key={6} className="div">
            <div className="s-img-div">
              <img src={p4} className="sli-img" style={{ width: "100%" }} />
            </div>
            <div className="p-des-div">
              <h5>Touchwood Chair</h5>
              <div className="star-icon-div">
                <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              </div>
              <h6>$59.00 <del>$69.00</del></h6>
            </div>
          </div> */}
           
        </Slider>
        <button onClick={()=>history.push("/AllProducts")}>View More<i class="fas fa-angle-right"></i></button>
        </div>
        <div className="cslicker-btn-wrapper"
          style={{ }}
        >
          <button className="cslicker-button" onClick={this.previous}>
            {"<"}
          </button>
          <button className="cslicker-button" onClick={this.next}>
            {">"}
          </button>
        </div>
      </div>
    );
  }
}
