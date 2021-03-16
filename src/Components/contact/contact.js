import React from "react";
import "./contact.css";

const company = ["About Us", "Contact US", "Careers", "Partner With Us"];
const help = ["Track my order", "Returns & Refund", "Payment Means", "FAQs"];
const misc = [
  "Our Blog",
  "Terms & Conditions",
  "Privacy Policy",
  "Infringement Policy",
];

export const Contact = () => {
  return (
    <div className="c-main-div" id="Contact">
      <div className="container">
        <div className="contact-container">
          <div className="c-div">
            <div className="c-wrapper">
              <h5>Company</h5>

              {company.map((com) => (
                <div className="each-cnt">{com}</div>
              ))}
            </div>
          </div>
          <div className="c-div">
            <div className="c-wrapper">
              <h5>Help</h5>
              {help.map((help) => (
                <div className="each-cnt">{help}</div>
              ))}
            </div>
          </div>
          <div className="c-div">
            <div className="c-wrapper">
              <h5>MISC.</h5>

              {misc.map((misc) => (
                <div className="each-cnt">{misc}</div>
              ))}
            </div>
          </div>
          <div className="c-div">
            <div className="c-wrapper">
              <h5>Contact Info</h5>
              <div className="each-c-in">
                <div className="email-tit">Email :</div>
                <div className="cntnt-2">
                  <div>contact@yourmail.com</div>
                  <div>support@yourmail.com</div>
                </div>
              </div>
              <div className="each-c-in">
                <div className="phone-tit">Phone :</div>
                <div className="cntnt-1">
                  <div>+88123 4567 890</div>
                  <div>+88123 4567 890</div>
                </div>
              </div>
              <div className="each-c-in">
                <div className="adds-tit">Address :</div>
                <div>
                  <div className="cntnt-3">
                    5078 Jensen Key, Port Kaya, WV 73505
                  </div>
                  {/* <div>support@yourmail.com</div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="follow-us">
            <div>
              <h5>
            follow us:
            </h5>
            </div>
            <div className="footer-icon">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div>
            <i class="fab fa-facebook-f"></i>
            </div>
            <div>
            <i class="fab fa-linkedin"></i>
            </div>
            <div>
            <i class="fab fa-instagram"></i>
            </div>
            <div>
            <i class="fab fa-twitter"></i>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
