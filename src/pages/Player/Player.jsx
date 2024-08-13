import React, { useEffect, useState } from 'react'
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom';

function Player() {
  const{id}=useParams();
  const navigate = useNavigate()

  const[apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2FjY2ExMzQ5MjkzNmU3Y2FhYThhMzM5MzBmNWFmZiIsIm5iZiI6MTcyMzM5Nzk0OC44ODU1NjcsInN1YiI6IjY2YjNiNTBmNWQ4M2FhNTA1ZTI3ZDRlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rVA_PQCM0QB_cY-4Bj70MuX20veU1VwZdVMdrAX_Iw8'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response =>setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  


  return (
    <div className='player'>
      <img src="/back.png" alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} frameBorder="0" title='trailer' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
