import React, { useEffect, useState } from 'react';
import  './Nav.css';
import { Link,NavLink } from "react-router-dom";
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
<div className={`Nav ${show &&`Nav__black`}`}>
    
    <div className='Nav_contents'>
    <img  className='Nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt=''/>
<img className='Nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'alt=''/>
    </div>
    <nav>
<div className='tabs'>
<NavLink exact to='/' className='ltabs' activeClassName='actltabs'>Home</NavLink>
<NavLink to='/TV' className='ltabs' activeClassName='actltabs' >TV Shows</NavLink>
<NavLink to='/Movies' className='ltabs' activeClassName='actltabs'>Movies</NavLink>
<NavLink to='/Kids' className='ltabs' activeClassName='actltabs'>Kids</NavLink>




</div>
</nav>

</div>
    )
}
export default Nav;