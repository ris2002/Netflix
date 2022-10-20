/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "./axios"
import "./Rx.css";
function Rx({title,fetchURL,isLargeRow=false}){
// eslint-disable-next-line no-unused-vars
const[movies,setMovies]=useState([]);
const baurl="https://image.tmdb.org/t/p/original/";
useEffect(() =>{
// eslint-disable-next-line no-unused-vars
async function FD(){
    const request =await axios.get(fetchURL);
    setMovies(request.data.results);
    return request;

//``
}
FD();
},[fetchURL]);
//console.log(movies);

    return(
        <div className="row">

<h2>{title}</h2>
<div className="posters">

{movies.map(movie =>(
    
    <img className={`poster ${isLargeRow && "posterLarge"}`}  
    key={movie.id}
     src={`${baurl}${

        isLargeRow ? movie.poster_path: movie.backdrop_path
    }`}  alt={movie.name}/>
)
)}

</div>

        </div>
    );
}
export default Rx;
