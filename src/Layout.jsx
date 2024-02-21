import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";
import { HashRouter } from "react-router-dom";

function Layout() {
    return(
        <>
        <HashRouter>
          <Header/>
           <Outlet/>
          <Footer/>
          </HashRouter>
        </>
    )
    
}
export default Layout