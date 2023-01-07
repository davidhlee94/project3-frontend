import "./Details.css";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "react-tooltip/dist/react-tooltip.css";
import Barchart from "../components/Barchart";
import Detailscarousel from "../components/Detailscarousel";
import Review from "../components/Review";

const Details = () => {
  const [nft, setNFT] = useState(null);

  const { id } = useParams();

  async function displayDetails() {
    const response = await fetch(
      `https://dbl-project-3-backend.herokuapp.com/nft/${id}`
    );
    const data = await response.json();
    setNFT(data);
    console.log("this is displayDetails() data", data);
  }
  useEffect(() => {
    displayDetails();
  }, []);

  console.log(nft);
  if (!nft) {
    return (
      <>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </>
    );
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="main-container">
      <div className="left-side">
      <div className="asset-name">
          <p>{nft.assetName}</p>
        </div>
        <div className="image">
          <p id="favorite">&#9825;</p>
          <Tooltip anchorId="favorite" content="Favorite" place="bottom" />
          <img src={nft.image} key={nft.userName} className="nft" />
        </div>
        <div className="artist-collection">
          <p>
            <span>Created by</span> {nft.userName}
          </p>
          <div className="icon">
            <a href={`${nft.image}`} id="icon-piece">
              &#x274F;
            </a>
            <Tooltip anchorId="icon-piece" content="Full Image"/>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="artist-accordion-right">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>&#x24; Price History</Accordion.Header>
              <Accordion.Body>
                <Barchart
                  created={nft.createdAt.slice(0, 10)}
                  price={nft.price}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="price-panel">
          <div className="date-created">
            <span>&#x263C; Created </span> {nft.createdAt.slice(0, 10)}
          </div>
          <p className="current-price">Current Price</p>
          <h1 id="nft-price">{nft.price}$</h1>
          <button className="details-button">BUY NOW</button>
        </div>
        <div className="artist-accordion">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" id="accordion-button-left">
              <Accordion.Header>
                {" "}
                &#8801; About {nft.assetName}
              </Accordion.Header>
              <Accordion.Body>{nft.description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div id="reviews" className="artist-accordion-right">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>&#x270E; Reviews</Accordion.Header>
              <Accordion.Body className="listing-price-labels">
                <Review 
                reviewData={nft.reviews}
                nftId={nft._id}
                /><></>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
      </div>
      <div className="display-similar">
        <Detailscarousel />
      </div>
    </div>
  );
};

export default Details;
