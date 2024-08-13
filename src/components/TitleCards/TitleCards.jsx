import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';

function TitleCards({title,category}) {
 

  const cardsRef=useRef();
  const [apiData,setApiData]=useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2FjY2ExMzQ5MjkzNmU3Y2FhYThhMzM5MzBmNWFmZiIsIm5iZiI6MTcyMzM5Nzk0OC44ODU1NjcsInN1YiI6IjY2YjNiNTBmNWQ4M2FhNTA1ZTI3ZDRlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rVA_PQCM0QB_cY-4Bj70MuX20veU1VwZdVMdrAX_Iw8'
    }
  };

  const handleWheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft+=event.deltaY;
  }

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel)
  },[])
  return (
    <div>
      <div className="title-cards">
        <h2>{title? title:"Popular on Netfilx"}</h2>
        <div className="card-list" ref={cardsRef}>
          {apiData.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          })}
        </div>
      </div>
    </div>
  )
}

export default TitleCards
