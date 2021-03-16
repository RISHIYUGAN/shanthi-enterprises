import React from "react";
import "./blog.css";
import services from "../../Assets/images/services.jpg";

export const Blog = () => {
  return (
    <div className="b-main-div" id="Blog">
      <div className="container">
        <div style={{ width: "100%" }}>
          <div className="b-row-wrapper">
            <div className="b-row-1">
              <h2>From The Blog</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="b-img-div-wrapper">
            <div className="b-img-div-1">
              <div className="b-img-wrapper">
                <img src={services} className="b-img-1"/>
              </div>
              <h5>Rowan an orangutan known & loved</h5>
              <i>25 JULY, 2022</i>
            </div>
            <div className="b-img-div-2">
              <div className="b-img-wrapper">
                <img src={services} className="b-img-1"/>
              </div>
              <h5>Rowan an orangutan known & loved</h5>
              <i>25 JULY, 2022</i>
            </div>
            <div className="b-img-div-3">
              <div className="b-img-wrapper">
                <img src={services} className="b-img-1"/>
              </div>
              <h5>Rowan an orangutan known & loved</h5>
              <i>25 JULY, 2022</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
