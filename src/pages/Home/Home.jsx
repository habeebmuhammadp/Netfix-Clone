import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import TitleCards from '../../components/TitleCards/TitleCards';
import axios from 'axios';
import { imageUrl } from '../../components/const';
import Player from '../Player/Player';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Home() {
  const [movie, setMovie] = useState(null);
  const Navigate=useNavigate()

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=2cacca13492936e7caaa8a33930f5aff&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[0]);
      });
  }, []);
  const handlePlayClick=()=>{
    if(movie){
      Navigate(`/Player/${movie.id}`)
    }
  }
const info=()=>{
    toast.info(`${movie.overview}`)
  }

  return (
    <div className="home">
      <Navbar />
      <div
        style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
        className="banner"
      >
        <div className="content">
          <h1 className="title">{movie ? movie.title || movie.name : ""}</h1>
          <div className="Banner_Buttons">
            <button className="button" onClick={handlePlayClick}><img src='play.png'/>Play</button>
            <button className="button" onClick={info}><img src='info.jpg'/>Info</button>
          </div>
          <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <TitleCards />
      </div>
      <div className="more-cards">
        <TitleCards title={"Top Rated"} category={'top_rated'} />
        <TitleCards title={"Popular"} category={'popular'} />
        <TitleCards title={"Upcoming"} category={'upcoming'} />
      </div>
    </div>
  );
}

export default Home;
