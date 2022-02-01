import React, { useEffect, useState } from 'react';
import "./nav.css";
const Nav = () => {
    const[show,handleShow]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
            
        });
        return()=>{window.removeEventListener("scroll")};
    },[]);
  return (
  <div className={`nav ${show && "nav_black"}`}>
          <img className='nav_logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="nav_logo"/>
          <img className='nav_avatar'  src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt='nav_avatar'/>
  </div>
  );
};

export default Nav;
