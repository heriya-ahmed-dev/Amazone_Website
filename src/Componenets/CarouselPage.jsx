import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { data } from './data';
import Category from './Category';
const CarouselPage = () => {
  return (
    <div className='relative z-0'>
     <Carousel
       infiniteLoop = {true}
       showIndicator = {true}
        showThumbs={false}
        autoPlay
        interval={2000}
        transitionTime={800}
     >
        {data.map((items)=>{
            return(
                <div key={items.id}>
                     <img src={items.url}/>
                </div>
            )
        })}

     </Carousel>


     <Category/>

    </div>
  )
}

export default CarouselPage