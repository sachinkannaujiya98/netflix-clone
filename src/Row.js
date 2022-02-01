// import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import instance from './axios';
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

 const base_url="https://image.tmdb.org/t/p/original";


const Row = ({title ,fetchUrl ,isLarge}) => {
const [movies ,setMovies]=useState([]);
const[trailerUrl, setTrailerUrl]=('');

    // code Will run based on specific condition
    useEffect(()=>{
    //

    async function fetchData() {
        const request = await instance.get(fetchUrl);
        setMovies(request.data.results);
        // console.log(request.data.results);   
        return request;
    }
    fetchData();
    },[fetchUrl]);

    const opts= {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    };

    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl("")
         
        }else{
            movieTrailer(movie.name || "")
            .then((url) =>{
                // https://www.youtube.com/watch?v=5YV6dq-cFbs

                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));//v=5YV6dq-cFbs
            })
            .catch((error)=>console.log(error));
        }
    }
    // console.table(movies);

return (<>
            <div className='row'>
               <h1>{title}</h1>
               <div className='row_posters'>
                   {/* several row */}
                   {movies.map(movie=>(
                       <img key={movie.id}
                       onClick={()=>handleClick(movie)}
                        className={`row_poster ${isLarge && "row_posterLarge"}`}
                         src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                   ))}
               </div>
               {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            </div>
        </>);
};

export default Row;

