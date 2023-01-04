import './Details.css'
import Spinner from 'react-bootstrap/Spinner';
import Accordion from 'react-bootstrap/Accordion'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Details = () => {
    const [ nft, setNFT ] = useState(null)
    const { id } = useParams()

     async function displayDetails() {
        const response = await fetch(`https://dbl-project-3-backend.herokuapp.com/nft/${id}`)
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
    return(
        <div className='main-container'>
            <div className='left-side'>
                <div className='image'>
                    <img src={nft.image} key={nft.userName} className='nft'/>
                </div>
                <div className='details-description'>
                    <p> &#8801; Description</p>
                </div>
                <div className='details-artist'>
                    <p>By {nft.userName}</p>
                </div> 
                <div className='detail'>
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> &#8801; About {nft.assetName}</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </div>
            </div>
            <div className='right-side'>
                <div className='asset-name'>
                    <p>{nft.assetName}</p>
                </div>
                <div className='artist-collection'>
                    <p><span>Created by</span> {nft.userName}</p>
                    <p>icon here</p>
                </div>
                <div className='price-panel'>
                    <div className='date-created'>
                    <span>&#x263C; Created at</span> {nft.createdAt.slice(0,10)}
                    </div>
                    <p className='current-price'>Current Price</p>
                    <h1 className='nft-price'>{nft.price}$</h1>
                    <button className='details-button'>BUY NOW</button>
                </div>
                <div className='artist-accordion'>
                    <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>&#x24; Price History</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>    
                </div>
                <div className='artist-accordion'>
                    <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>&#x270E; Listings</Accordion.Header>
                        <Accordion.Body className='listing-price-labels'>
                        
                            <div className='grid-label'>
                                Price
                            </div>
                            <div className='grid-label'>
                                Expiration
                            </div>
                            <div className='grid-label'>
                                From
                            </div>
                            <div className='grid-label'>
                                
                            </div>
                            <div className='grid-info'>
                                {nft.price}
                            </div>
                            <div className='grid-info'>
                            &#x221E;
                            </div>
                            <div className='grid-info'>
                            {nft.userName}
                            </div>
                            <button className='grid-button'>BUY NOW</button>
                        
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>    
                </div>
                <div className='artist-accordion'>
                    <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> &#x279A; Item Activity</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>    
                </div>
            </div>
        </div>
    )
    }
    
    export default Details
;