
  import React from "react";
  import classes from "./Footer.module.css";

  
  const Footer = () => {

  
   
    return (
        <div style={{background:"rgba(0,0,0, 0.1)",padding:"20px"}}>
        <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="text-muted d-flex justify-content-between">
        <i class="fa-brands fa-facebook-f px-2"></i>
        <i class="fa fa-instagram px-2" aria-hidden="true" ></i>
        <i class="fa fa-twitter px-2" aria-hidden="true"></i>

        </div>
  <div className="text-muted">
      <div>©2021 by CUI CRS Portal. Proudly created by Comsats</div>
  </div>
  </div>
  </div>

    );
  };
  
  export default Footer;
  