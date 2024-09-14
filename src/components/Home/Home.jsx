import React from 'react'
import Header from '../Header/Header'
import Carousel from '../Carousel/Carousel'
import ExploreGigs from '../ExploreGigs /ExploreGigs'
import CommunityForum from '../CommunityForum/CommunityForum'
const Home = () => {

  return (
    <div>
         <Header/>
       {/* <Carousel /> */}
       <ExploreGigs />
         <CommunityForum />
    </div>
  )
}

export default Home
