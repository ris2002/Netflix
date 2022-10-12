import React, { useEffect, useState } from 'react';
import './Bertv.css';
import axios from './axios';
import requests from './Request';
function Bertv()




{
    const[movie,Setmovie]=useState([]);

useEffect(()=>{
async function fetchData(){
    const request = await axios.get(requests.fetchTrending);
    Setmovie(
        request.data.results[ Math.floor(Math.random() * request.data.results.length - 1) ]
    );
    return request;
}
fetchData();
},[]);
console.log(movie);




   function tt(string,n){
        return string?.lenght >  n ?string.substr(0,n-1)+'....':string;
    
    }
    
    return(


<header className='ban' style={{
                backgroundSize:"cover",
                backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")',
                backgroundPosition:"center center"



            }}>
                <div className='Banner_contents'>
                    <h1 className='Banner_titles'>Movie Name</h1>
                    <div className='buttons'>
                        <button className='banner_button'>Play</button>
                        <button className='banner_button'>My List</button>

                    </div>
                    <h1 className='banner_description'>'wdbdbskbdjkbdjkqwbjkdbjqkwdbqwdqwduvweydvydvdxyevwdvsdhvuqwvdbqvwlhjdbqwhjkdb'</h1>
                </div>
                <div className='banner--fadebottom'/>

            </header>
        );




    
}
export default Bertv;
