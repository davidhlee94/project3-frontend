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
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
        <Carousel responsive={responsive}>
            {nft.slice(nft.length - 10).map((last) => {
                return(
                    <div  id='bottom'>
                        <a href={`/nft/${last._id}`}>
                            <img src={last.image} key={last.assetName} id='carousel-image'/>
                        </a>
                            <p className='carousel-name'>{last.assetName}</p>
                            <p className='carousel-price'>{last.price}$</p>
                            <p className='carousel-artist'>Created by <span id='nft-c'>{last.userName}</span></p>

                    </div>
                )
            })}
            
        </Carousel>
    </>
  )
}

export default Detailscarousel