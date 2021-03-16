import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import {Homepage} from "../homepage/homepage"
import {Allproducts} from "../allproducts/allproducts"
import {EachProduct} from "../eachproduct/eachproduct"
import createHistory from "history/createBrowserHistory";
// import Dashboard from "../Components/pages/dashboard/dashboard";
// import Login from "../Components/pages/login/login";
// import Header from "../header/header"
// import PublicRoute from "./PublicRoute";
// import PrivateRoute from "./PrivateRoute";
// import ViewActivity from "../Components/pages/view_activity/view_activity";
// import Profile from "../Components/pages/profile/profile";

export const history = createHistory();

const pagenotfound=()=>{
    return(
        <div>
            <h1 style={{marginLeft:"20px",marginTop:"20px",fontFamily:"poppins"}}>
                <text style={{color:"red"}}>404 !</text> Page Not Found 
            </h1>
        </div>
    )
}

export const AppRouter = () => (
  <Router history={history}>
    <div>         
      <Switch>
          <Route path="/" component={Homepage} exact={true}/>
          <Route path="/AllProducts" component={Allproducts}/>
          {/* <Route path="/EachProduct" component={EachProduct}/> */}
          <Route path="" component={pagenotfound}/>
      </Switch>
    </div>
  </Router>
);
