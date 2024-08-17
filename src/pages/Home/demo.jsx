import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'


function Home() {

  return (
    <div className='home'>
      <Navbar/>
      <div className="banner">
        <img src="banner1.webp" alt="" className='banner-img' />
        <div className="banner-caption">
          <img src="title.png" alt="" className='caption-img'/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Maxime excepturi libero eum assumenda repudiandae. Quisquam in,
              cupiditate voluptates consectetur obcaecati aliquam at repellendus beatae,
              totam laboriosam necessitatibus iure. Aliquid, eos.</p>
              <div className="banner-btn">
                <button className='btn'><img src="play.png" alt="" />Play</button>
                <button className='btn dark-btn'><img src="info.jpg" alt="" />More Info</button>
              </div>
              <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Top Rated"} category={'top_rated'}/>
      <TitleCards title={"Popular"} category={'popular'}/>
      <TitleCards title={"Upcoming"} category={'upcoming'}/>
      </div>
    </div>
  )
}

export default Home
