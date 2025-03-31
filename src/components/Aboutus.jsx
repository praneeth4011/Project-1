import "./Aboutus.css";
import { useState } from "react";





 

export function Onehouse(){
   return(
    <div className="container-fluid mt-2"  >
    <nav className="navbar navbar-expand-lg bg-gold navbar-warning" id="navbody">
     <div className="container-fluid " >
         <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
             <span className="navbar-toggler-icon"></span>

         </button>
         <h2 className="navbar-brand">
             <img src="https://assets-global.website-files.com/61f2440c9fcbc37831846652/621d4a6ec79c788f363c6b54_onehouse_logohorizontal_rgb_primarydark.svg" width="200px"/>
         </h2>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item">
                 <a className="nav-link"  href="#">UNIVERSAL DATA LAKEHOUSE</a>
                 </li>
                 <li className="nav-item">
                     <a  className="nav-link" href="#">PRODUCT</a>
                 </li>
                 <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" >
                         Solution
                     </a>
                     <ul className="dropdown-menu">
                         <li><a className="dropdown-item" href="#">Edit</a></li>
                         <li><a className="dropdown-item" href="#">edit</a></li>
                     </ul>
                 </li>
                 <li className="nav-item">
                     <a  className="nav-link"href="#">RESOURCES</a>
                 </li>
                 <li className="nav-item dropdown">
                     <a  className="nav-link dropdown-toggle"href="#"  data-bs-toggle="dropdown">ABOUT US</a>
                     <ul className="dropdown-menu">
                         <li><a  className="dropdown-item"href="">COMPANY</a></li>
                         <li><a  className="dropdown-item" href="#">IN THE NEWS</a></li>

                     </ul>
                 </li>
                 <li className="nav-item">
                     <a  className="nav-link"href="#">BLOG</a>
                 </li>
                 <li className="nav-item">
                     <a  className="nav-link"href="#">CAREERS</a>
                 </li>
             </ul>
         </div>

     </div>

    </nav>
 </div>
   )
}
    
        
    
    
    
