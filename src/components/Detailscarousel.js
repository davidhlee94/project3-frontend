import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import './Detailscarousel.css'



function Detailscarousel() {
    const [ nft, setNFT ] = useState(null)

     async function displayDetails() {
        const response = await fetch(`https://dbl-project-3-backend.herokuapp.com/nft`)
        const data = await response.json()
        setNFT(data)
        console.log(data)
    }
    useEffect(() => {
        displayDetails()
    },[])
    if(!nft){
        return (
            <>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            </>
        )
    }
    const responsive = {
        ultrawideDesktop: {
          breakpoint: { max: 4000, min: 3600 },
          centerMode: true,
          items: 9,
        },
        superLargeDesktop: {
          breakpoint: { max: 3600, min: 3200 },
          items: 8,
        },
        largeDesktop: {
          breakpoint: { max: 3200, min: 2800 },
          items: 7,
        },
        medDesktop: {
          breakpoint: { max: 2800, min: 2400 },
          items: 6,
        },
        smallDesktop: {
          breakpoint: { max: 2400, min: 2000 },
          items: 5,
        },
        xSmallDesktop: {
          breakpoint: { max: 2000, min: 1600 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1600, min: 1200 },
          items: 3,
        },
        smallTablet: {
          breakpoint: { max: 1200, min: 800 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 800, min: 0 },
          items: 1,
        },
      };
  return (
    <div id="nft-similar">
        <Carousel 
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={responsive}
        infinite={true}
        
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {nft.slice(nft.length - 10).map((last) => {
                return(
                    <a href={`/nft/${last._id}`} className='carousel-card' id='link'>
                    <div  
                        className='carousel-card'
                        style={{
                            backgroundImage: `url(${last.image})`,
                          }}
                    >
                        <div className='carousel-card-text'>
                            <p><span className='nft-c'>{last.assetName}</span></p>
                            <p>{last.price}$</p>
                        </div>
                    </div>
                    </a>
                )
            })} 
        </Carousel>

    </div>
    
  )
}

export default Detailscarousel