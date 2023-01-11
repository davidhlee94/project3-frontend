import "./Details.css";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Barchart from "../components/Barchart";
import Detailscarousel from "../components/Detailscarousel";
import Review from "../components/Review";
import Owner from "../components/Owner";

const Details = () => {
  const [nft, setNFT] = useState(null);
  const [favorite, setFavorite] = useState(false);

  const { id } = useParams();

  async function displayDetails() {
    const response = await fetch(
      `https://dbl-project-3-backend.herokuapp.com/nft/${id}`
    );
    const data = await response.json();
    setNFT(data);
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
  return (
    <div className="main-container">
      <div className="left-side">
        <div className="asset-name">
          <p>{nft.assetName}</p>
        </div>
        <div className="image">
          <p
            id={favorite ? "favorite-active" : "favorite"}
            onClick={() => {
              setFavorite(!favorite);
            }}
          >
            &#9829;
          </p>
          <Tooltip anchorId="favorite" content="Favorite" place="bottom" />
          <div className="image-box">
            <img src={nft.image} key={nft.userName} className="nft" />
          </div>
        </div>
        <div className="artist-collection">
          <p>
            <span>Created by</span> {nft.userName}
          </p>
          <div className="icon">
            <a href={`${nft.image}`} id="icon-piece">
              View Full NFT
            </a>
            <Tooltip anchorId="icon-piece" content="Full Image" />
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
          <Owner nftID={nft._id} reviewData={nft} />
        </div>
      </div>
      <div className="artist-accordion">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" id="accordion-button-left">
            <Accordion.Header> &#8801; About {nft.assetName}</Accordion.Header>
            <Accordion.Body>{nft.description}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div id="reviews" className="artist-accordion-right">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>&#x270E; Reviews</Accordion.Header>
            <Accordion.Body className="listing-price-labels">
              <Review reviewData={nft.reviews} nftId={nft._id} />
              <></>
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
