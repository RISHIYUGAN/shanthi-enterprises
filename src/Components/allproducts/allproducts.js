import React, { useState, useEffect } from "react";
import "./allproducts.css";
import Select from "react-select";
import logo from "../../Assets/images/logo.png";
import { motors } from "./motors";
import {history} from "../router/router"
import {Sidebar} from "./prdctssidebar"
import { EachProduct } from "../eachproduct/eachproduct";
import axios from "axios"
import {Response} from "../response/response"

// import { scrollIntoView } from "react-select/src/utils";
// import { scrollIntoView } from "react-select/src/utils";

const options = [
  { value: "single phase induction", label: "single phase induction" },
  { value: "three phase induction", label: "three phase induction" },
];
const category = [
  { value: "single phase induction", label: "single phase induction" },
  { value: "three phase induction", label: "three phase induction" },
];
const classes = [
  {
    value: "IE1",
    label: "IE1",
  },
  {
    value: "IE2",
    label: "IE2",
  },
  {
    value: "IE3",
    label: "IE3",
  },
];
const rpm = [
  { value: "1000 RPM", label: "1000 RPM" },
  {
    value: "1400 RPM",
    label: "1400 RPM",
  },
];
const kw = [
  { value: "1.50", label: "1.50 KW" },
  {
    value: "0.37",
    label: "0.37 KW",
  },
  { value: "11", label: "11 KW" },
  {
    value: "3.7",
    label: "3.7 KW",
  },
];
const hp = [
  { value: "2.00HP", label: "2.00 HP" },
  {
    value: "0.5HP",
    label: "0.5 HP",
  },
  { value: "5HP", label: "5 HP" },
  {
    value: "15HP",
    label: "15 HP",
  },
];
const pole = [
  { value: "4", label: "4 Pole" },
  {
    value: "6",
    label: "6 Pole",
  },
];
const mounting = [{ value: "FLANGE", label: "FLANGE" }];
const amp = [
  { value: "1", label: "1 A" },
  {
    value: "2",
    label: "2 A",
  },
];
export const Allproducts = () => {
  const [motorlistcopy, setMotorListCopy] = useState(motors);
  const [selectedOption1, setSelected1] = useState(null);
  const [selectedOption2, setSelected2] = useState(null);
  const [selectedOption3, setSelected3] = useState(null);
  const [selectedOption4, setSelected4] = useState(null);
  const [selectedOption5, setSelected5] = useState(null);
  const [selectedOption6, setSelected6] = useState(null);
  const [selectedOption7, setSelected7] = useState(null);
  const [selectedOption8, setSelected8] = useState(null);
  const [motorfilter, setMotorFilter] = useState({
    category: null,
    class: null,
    kw: null,
    hp: null,
    pole: null,
    rpm: null,
    mounting: null,
    amp: null,
  });
  const [email,setEmail]=useState(false)
  const [moballprdcts,setMoballprdcts]=useState(false)
  const [singleview,setSingleView] = useState(false)
  const [allnotify,setAllNotify]= useState(false)

   useEffect(()=>{
  //    history.scrollRestoration="manual"
  //  console.log(history.scrollRestoration)
  // eventAggregator.subscribe('router:navigation:complete', payload => window.scrollTo(0, 0));
  console.log("entered")
  window.scrollTo(0,0)
   },[])
   
   useEffect(()=>{
    console.log("notify",allnotify)
    if(allnotify){
     // document.querySelector(".response-div").style.display="flex"
     document.querySelector(".response-div").style.transition="transform 0.5s"
     document.querySelector(".response-div").style.transform="translateX(-50%) translateY(0%)"
     setTimeout(()=>{
      setAllNotify(false)
     },2500)
    }
    else{
     // document.querySelector(".response-div").style.display="none"
     document.querySelector(".response-div").style.transition="none"
     document.querySelector(".response-div").style.transform="translateX(-50%) translateY(-150%)"
    }
  },[allnotify])
  
   useEffect(()=>{
     console.log(document.querySelector("#singleview"))
    //  document.querySelector()
   if(singleview){
     document.querySelector("body").style.overflowY="hidden"
     document.querySelector("body").style.paddingRight="15px"
    document.querySelector(".single-view").style.display="flex"
    console.log("check","true")
   }
   else{
    document.querySelector("body").style.overflowY="auto"
    document.querySelector("body").style.paddingRight="0px"
    document.querySelector(".single-view").style.display="none"
    console.log("check","false")
   }
   },[singleview])
   useEffect(()=>{
     if(document.querySelector(".m-filter-container")){
      if(moballprdcts){
        document.querySelector(".m-filter-container").style.transform="translateX(0vw)"
        console.log(document.querySelector(".m-filter-container"))
      }
      else{
        document.querySelector(".m-filter-container").style.transform="translateX(-87vw)"
      }
     }
  if(document.querySelector(".t-filter-container")){
    if(moballprdcts){
      document.querySelector(".t-filter-container").style.transform="translateX(0vw)"
      console.log(document.querySelector(".t-filter-container"))
    }
    else{
      document.querySelector(".t-filter-container").style.transform="translateX(-42vw)"
    }
  }
   },[moballprdcts])
    useEffect(()=>{
       if(email===true){
        document.getElementById("email-container").style.display="flex"
        setTimeout(()=>{
            document.getElementById("email-box").style.transform="scale(1) perspective(1px) translateZ(0)"
        },100)
       }
       if(email===false){
        document.getElementById("email-box").style.transform="scale(0)"
           setTimeout(()=>{
            document.getElementById("email-container").style.display="none"
           },500)
       }
    },[email])

  useEffect(() => {
    setMotorFilter({
      category: selectedOption1,
      class: selectedOption2,
      kw: selectedOption3,
      hp: selectedOption4,
      pole: selectedOption5,
      rpm: selectedOption6,
      mounting: selectedOption7,
      amp: selectedOption8,
    });
  }, [
    selectedOption1,
    selectedOption2,
    selectedOption3,
    selectedOption4,
    selectedOption5,
    selectedOption6,
    selectedOption7,
    selectedOption8,
  ]);

  useEffect(() => {
    //  setMotorListCopy(motors)
    if (
      selectedOption6 ||
      selectedOption7 ||
      selectedOption8 ||
      selectedOption1 ||
      selectedOption2 ||
      selectedOption3 ||
      selectedOption4 ||
      selectedOption5
    ) {
      const list = [...motors];
      console.log(selectedOption2);
      console.log(selectedOption6);
      const listfil = list.filter((prdct) => {
        //  console.log("check-1",!!(selectedOption2?((selectedOption2&&prdct.class)?prdct.class.includes(selectedOption2):false):true))
        //  console.log("check-2",!!(selectedOption6?((selectedOption6&&prdct.rpm)?prdct.rpm.includes(selectedOption6):false):true))
        // console.log("check-3",!!((selectedOption2?((selectedOption2&&prdct.class)?prdct.class.includes(selectedOption2):false):true)&&
        // (selectedOption6?((selectedOption6&&prdct.rpm)?prdct.rpm.includes(selectedOption6):false):true)))
        return (
        
          (selectedOption1
            ? selectedOption1 && prdct.des.category
              ? prdct.des.category.includes(selectedOption1)
              : false
            : true) &&
          (selectedOption2
            ? selectedOption2 && prdct.des.class
              ? prdct.des.class.includes(selectedOption2)
              : false
            : true) &&
          (selectedOption3
            ? selectedOption3 && prdct.des.kw
              ? prdct.des.kw.includes(selectedOption3)
              : false
            : true) &&
          (selectedOption4
            ? selectedOption4 && prdct.des.hp
              ? prdct.des.hp.includes(selectedOption4)
              : false
            : true) &&
          (selectedOption5
            ? selectedOption5 && prdct.des.pole
              ? prdct.des.pole.includes(selectedOption5)
              : false
            : true) &&
          (selectedOption6
            ? selectedOption6 && prdct.des.rpm
              ? prdct.des.rpm.includes(selectedOption6)
              : false
            : true) &&
          (selectedOption7
            ? selectedOption7 && prdct.des.mounting
              ? prdct.des.mounting.includes(selectedOption7)
              : false
            : true) &&
          (selectedOption8
            ? selectedOption8 && prdct.des.amp
              ? prdct.des.amp.includes(selectedOption8)
              : false
            : true)
        );
      });
      setTimeout(() => {
        console.log("listfill", listfil);
        setMotorListCopy(listfil);
      }, 1000);
    } else {
      setMotorListCopy(motors);
    }
  }, [motorfilter]);
  const handleChange1 = (selectedOption) => {
    console.log("entering");
    if (selectedOption) {
      setSelected1(selectedOption.label);
      console.log(`Option selected:`, selectedOption1);
    } else {
      setSelected1(null);
    }
  };
  const handleChange2 = (selectedOption) => {
    if (selectedOption) {
      setSelected2(selectedOption.value);
    } else {
      setSelected2(null);
    }

    console.log(`Option selected:`, selectedOption);
  };
  const handleChange3 = (selectedOption) => {
    if (selectedOption) {
      setSelected3(selectedOption.value);
    } else {
      setSelected3(null);
    }

    console.log(`Option selected:`, selectedOption);
  };
  const handleChange4 = (selectedOption) => {
    if (selectedOption) {
      setSelected4(selectedOption.value);
    } else {
      setSelected4(null);
    }

    console.log(`Option selected:`, selectedOption);
  };
  const handleChange5 = (selectedOption) => {
    if (selectedOption) {
      setSelected5(selectedOption.value);
    } else {
      setSelected5(null);
    }

    console.log(`Option selected:`, selectedOption);
  };
  const handleChange6 = (selectedOption) => {
    if (selectedOption) {
      setSelected6(selectedOption.value);
    } else {
      setSelected6(null);
    }

    console.log(`Option selected:`, selectedOption);
  };
  const handleChange7 = (selectedOption) => {
    if (selectedOption) {
      setSelected7(selectedOption.value);
    } else {
      setSelected7(null);
    }

    console.log(`Option selected:`, selectedOption);
  };
  const handleChange8 = (selectedOption) => {
    if (selectedOption) {
      setSelected8(selectedOption.value);
    } else {
      setSelected8(null);
    }

    console.log(`Option selected:`, selectedOption);
  };
  const motorselector = [
    {
      value: selectedOption1,
      change: (e) => handleChange1(e),
      options: category,
      placeholder: "Select a Category",
    },
    {
      value: selectedOption2,
      change: (e) => handleChange2(e),
      options: classes,
      placeholder: "Any Efficiency Class",
    },
    {
      value: selectedOption3,
      change: (e) => handleChange3(e),
      options: kw,
      placeholder: "Any Kw",
    },
    {
      value: selectedOption4,
      change: (e) => handleChange4(e),
      options: hp,
      placeholder: "Any Hp",
    },
    {
      value: selectedOption5,
      change: (e) => handleChange5(e),
      options: pole,
      placeholder: "Any Pole",
    },
    {
      value: selectedOption6,
      change: (e) => handleChange6(e),
      options: rpm,
      placeholder: "Any Rpm",
    },
    {
      value: selectedOption7,
      change: (e) => handleChange7(e),
      options: mounting,
      placeholder: "Any Mounting",
    },
    {
      value: selectedOption8,
      change: (e) => handleChange8(e),
      options: amp,
      placeholder: "Any AMP",
    },
  ];
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      borderRadius: "5px",
      fontFamily:"poppins-500"
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "rgb(200,200,200)",
      fontSize: "14px",
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: "20px",
      fontFamily: "poppins-200",
      fontWeight: "bold",
      color: "gray",
    }),
  };
  const prdctDisplay=(prdct)=>{
    for(var i=0;i<1;i++){
      history.push({
        state:{
          img:prdct.img,
          des:prdct.des
        }
      })
    }
    for(var i=0;i<1;i++){
     setSingleView(true)
    }
  }
  const hideDisplay=()=>{
    for(var i=0;i<1;i++){
      setSingleView(false)
     }
    for(var i=0;i<1;i++){
      history.push({state:""})
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log({
      email:e.target.email.value,
      name:e.target.name.value,
      productName:e.target.productname.value
    })
   axios.post("https://cors-anywhere.herokuapp.com/http://13.126.18.96:5000/api/enquirenow",{
     email:e.target.email.value,
     name:e.target.name.value,
     productName:e.target.productname.value
   }).then((res)=>{
  console.log(res)
  e.target.email.value=""
  e.target.name.value=""
 e.target.productname.value=""
 setAllNotify(true)
   })
  }
  return (
    <div className="all-prdcts-main-div">
      <style dangerouslySetInnerHTML={{__html: `html { scroll-behavior: auto }`}} />
 
      <div className="p-hdr-main-div">
        <div className="header-wrapper">
          <div className="title-div">
            <img src={logo} className="logo" />
            <h4 className="title" onClick={()=>{history.push("/")}}>Shanthi Enterprises</h4>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="filter-container">
        <div className="filter-div">
          <div className="filter-title">
            <i class="fas fa-filter"></i>
            <h5>FILTER</h5>
          </div>
          <div className="select-wrapper">
            {motorselector.map((each) => (
              <div className="each-select" key={each.placeholder}>
                <Select
                  styles={customStyles}
                  onChange={(e) => each.change(e)}
                  options={each.options}
                  placeholder={each.placeholder}
                  className="select-box"
                  classNamePrefix="ss"
                  isClearable={true}
                />
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="t-filter-container">
        <div className="sidebar-div">
      <Sidebar handleClick={()=>{setMoballprdcts(!moballprdcts)}}/> 
      </div>
        <div className="t-filter-div">
          <div className="filter-title">
            <i class="fas fa-filter"></i>
            <h5>FILTER</h5>
          </div>
          <div className="select-wrapper">
            {motorselector.map((each) => (
              <div className="each-select" key={each.placeholder}>
                <Select
                  styles={customStyles}
                  onChange={(e) => each.change(e)}
                  options={each.options}
                  placeholder={each.placeholder}
                  className="select-box"
                  classNamePrefix="ss"
                  isClearable={true}
                />
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="m-filter-container">
        <div className="sidebar-div">
      <Sidebar handleClick={()=>{setMoballprdcts(!moballprdcts)}}/> 
      </div>
        <div className="m-filter-div">
          <div className="filter-title">
            <i class="fas fa-filter"></i>
            <h5>FILTER</h5>
          </div>
          <div className="select-wrapper">
            {motorselector.map((each) => (
              <div className="each-select" key={each.placeholder}>
                <Select
                  styles={customStyles}
                  onChange={(e) => each.change(e)}
                  options={each.options}
                  placeholder={each.placeholder}
                  className="select-box"
                  classNamePrefix="ss"
                  isClearable={true}
                />
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="prdct-div">
          {motorlistcopy.map((prdct) => (
            <div className="e-prdct-wrapper">
              <div className="each-prdct">
                <div className="e-prdct-image-div">
                  <img
                   onClick={()=> prdctDisplay(prdct)
                   
                  } 
                  src={prdct.img} className="each-prdct-img" />
                </div>
                <div className="e-prdct-des">
                  <h6>
                    {prdct.des.name}-{prdct.des.kw} {prdct.des.hp} {prdct.des.pole} {prdct.des.rpm}{" "}
                    {prdct.des.mounting} {prdct.des.class} {prdct.des.category} {prdct.des.amp}{" "}
                  </h6>
                </div>
              </div>
              <div className="e-prdct-enq-btn-div">
                <button className="e-prdct-enq-btn" onClick={()=>{setEmail(true)}}>ENQUIRE NOW</button>
              </div>
            </div>
          ))}
          <div className="pagination">
            <button className="pg-button">
              <i class="fas fa-arrow-left"></i> <text>Previous Page</text>{" "}
            </button>
            <button className="pg-button">
              <text>Next Page</text> <i class="fas fa-arrow-right"></i>{" "}
            </button>
          </div>
        </div>
      </div>
      <div id="email-container" className="email-container" >
        <div id="bck-ref" className="bck-ref" onClick={()=>{setEmail(false)}}></div>
       <div id="email-box" className="email-box">
           <div className="exitDiv" onClick={()=>{
        setEmail(false)
        
      }}>
        <div className="exit">
        <div className="ediv_1"></div>
        <div className="ediv_2"></div>
        </div>
        </div>
        <div className="form">
             <h6>Request For Quotation :</h6>
             <form onSubmit={(e)=>{handleSubmit(e)}}>
                 <div className="i-div-1">
                 <div className="input-div">  
             <input type="text" placeholder="Company"></input>
             </div>
             <div className="input-div">  
             <input type="text" name="name" placeholder="Name" required></input>
             </div>
             </div>
             <div className="i-div-2">
             <div className="input-div">  
             <input type="email" name="email" placeholder="Email" required></input>
             </div>
             <div className="input-div">  
             <input type="Number" placeholder="Mobile"></input>
             </div>
             </div>
             <div className="i-div-3">
             <div className="input-div">  
             <input type="number" placeholder="Zip/Pin Code"></input>
             </div>
             <div className="input-div">  
             <input type="text"  placeholder="Segment"></input>
             </div>
             <div className="input-div">  
             <input type="text" name="productname" placeholder="Product Name" required></input>
             </div>
             </div>
             <div className="t-a-input-div">
             <textarea placeholder="Describe your Buying Requirements & Qty." className="text-area"></textarea>
             </div>
             <button>Send  Inquiry</button>
             </form>
             </div>
       </div>
    </div>
    {console.log(singleview)}
    <div id="singleview" className="single-view">
      <div  className="ref-div" onClick={()=>{console.log("log");
      setSingleView(false)}}></div>
    <EachProduct handleClick={()=>{
      hideDisplay()
      history.push({state:""})
      }}
      notify={()=>{setAllNotify(true)}}
      />
    </div>
    <Response/>
    </div>
  );
};
