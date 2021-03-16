import React from "react";
import "./team.css";

export const Team = () => {
  return (
    <div id="Team" className="Tm-main-div">
      <div className="container">
        <div style={{ width: "100%" }}>
          <div className="t-row-wrapper">
            <div className="t-row-1">
              <h2>Our Expert Team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusm od tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="t-div-wrapper">
            <div className="t-div-1">
              <div className="subdiv-1">
                <div className="sd-img-1"></div>
                <h5>Celina Gomez</h5>
                <text>FOUNDER</text>
                <div className="social-div">
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-instagram"></i>
                </div>
              </div>

              <div className="subdiv-2">
                <div className="sd-img-1"></div>
                <h5>Patric Green</h5>
                <text>CONSULTANT</text>
                <div className="social-div">
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-instagram"></i>
                </div>
              </div>
            </div>
            <div className="t-div-2">
              <div className="subdiv-3">
                <div className="sd-img-1"></div>
                <h5>Mark Parker</h5>
                <text>BUSINESS MANAGER</text>
                <div className="social-div">
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-instagram"></i>
                </div>
              </div>
              <div className="subdiv-4">
                <div className="sd-img-1"></div>
                <h5>Daryl Dixon</h5>
                <text>MARKETTING MANAGER</text>
                <div className="social-div">
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bck-img-div-2">
              <div className="t-bck-img-2"></div>
              <div className="abs-div">
              <div className="team-container">
                 <div className="play-icon-div">
                 <i class="lni lni-play"></i>
                 </div>
              </div>
              </div>
          </div>
    </div>
  );
};
