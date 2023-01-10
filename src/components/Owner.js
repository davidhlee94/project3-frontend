import React, { useState, useEffect } from 'react'
import './Owner.css'

function Owner({ nftID , reviewData}) {
    const [ finalOwnerData , setFinalOwnerData ] = useState(reviewData.nftOwner);
    const [ newOwner, setNewOwner ] = useState({
        nftOwner: "",
    });
    const setOwnerURL = `https://dbl-project-3-backend.herokuapp.com/nft/${nftID}/add-owner`;
    const testURL = `http://www.localhost:4000/nft/${nftID}/add-owner`
    
    const handleChange = (e) => {
        setNewOwner({ ...newOwner, [e.target.name]: e.target.value })
        console.log(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentState = { ...newOwner };
        createOwnerData(currentState);
        setFinalOwnerData(currentState.nftOwner)
        setNewOwner({
            nftOwner: ""
        })
        console.log("submitted");
        console.log(newOwner);
    }
    async function createOwnerData(test) {
        try {
             await fetch(testURL, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(test),
            });
        } catch (error) {
            console.log(error)
        }
    }
    
    
    console.log("Current Owner", finalOwnerData)
  return (
    <>
        <div className='current-price'>
            <p>Current Owner</p>
            {finalOwnerData === "" ? <h1 className='owner-details'>{reviewData.userName}</h1> : <h1 className='owner-details'>{finalOwnerData}</h1>}
        </div>
        <div className="owner-panel">
            <form onSubmit={handleSubmit}>
                <input
                    value={newOwner.nftOwner}
                    type="text"
                    name="nftOwner"
                    placeholder="username"
                    onChange={handleChange}
                />
                <button 
                    className="details-button"
                    type='submit'
                >
                BUY NOW</button>
            </form>
        </div>
    </>
  )
}

export default Owner