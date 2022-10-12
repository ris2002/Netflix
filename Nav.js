import React, { useEffect, useState } from 'react';
import  './Nav.css';
function Nav(){
    //The React useState Hook allows us to track state in a function component. 
    // now making a function trasition bar
    const[show,handleShow]=useState(false);
    const trasitionNavbar=()=>{
        if(window.scrollY>100){handleShow(true);}
        else{handleShow(false);}
    };
    useEffect(()=>{
        window.addEventListener("scroll",trasitionNavbar);
        return()=>window.removeEventListener('scroll',trasitionNavbar)
    },[]);

    return(
<div className='Nav Nav__black'>
    
    <div className='Nav_contents'>
    <img  className='Nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt=''/>
<img className='Nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'alt=''/>
    </div>


</div>
    )
}
export default Nav;
