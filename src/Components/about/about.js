import React from "react";
import "./about.css";
import services from "../../Assets/images/services.jpg";

export const OurStory = () => {
  return (
    <div id="About Us" className="about-main-div">
      <div className="container">
        <div>
          <div className="about-title-div" >
            <div className="about-title">
              <div className="empty-line"></div>
              <h3>About Us</h3>
            </div>
            {/* <div> */}
              {/* <h2 style={{ color: "#333" }}>Build Your Sweet Home</h2> */}
            {/* </div> */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusm od tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div className="services">
            <div className="img-div">
              <div>
                <img src={services} className="services-img" />
              </div>
              <button className="rd-mr-btn">Read more&nbsp; {">"}</button>
            </div>
            <div className="col-wrapper">
            <div className="col1">
              <div className="div-1">
                <div className="icon-div">
                  <i class="lni lni-grid-alt"></i>
                </div>
                <h5>Furnitures</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusm od tempor.
                </p>
              </div>
              <div className="div-2">
                <div className="icon-div">
                  <i class="lni lni-ruler-pencil"></i>
                </div>
                <h5>Decoration</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusm od tempor.
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="div-3">
                <div className="icon-div">
                  <i class="lni lni-customer"></i>
                </div>
                <h5>Consultancy</h5>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od tempor.
                </p>
              </div>
              <div className="div-4">
                <div className="icon-div">
                  <i class="lni lni-support"></i>
                </div>
                <h5>Custom Orders</h5>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od tempor.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
