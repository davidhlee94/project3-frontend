
import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "./Review.css";

const Review = ({ reviewData, nftId }) => {
  const [newForm, setNewForm] = useState({
    rating: "",
    content: "",
    nft: nftId,
  });
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);

  const [finalReviewData, setFinalReviewData] = useState(null);
  const createReviewURL = `https://dbl-project-3-backend.herokuapp.com/nft/${nftId}/add-review`;

  async function getReviewData() {
    console.log("review array", reviewData);
    let arrayData = [];
    reviewData.forEach(async (id) => {
      try {
        const response = await fetch(
          `https://dbl-project-3-backend.herokuapp.com/review/${id}`
        );
        const data = await response.json();
        console.log("review object", data);
        arrayData.push(data);
        Promise.all(arrayData).then(
          setTimeout(() => {
            setFinalReviewData(arrayData);
          }, 400)
        );
      } catch (error) {
        console.log(error);
      }
    });
  }

  async function createReview(reviewData) {
    try {
      await fetch(createReviewURL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setNewForm({ ...newForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentState = { ...newForm };
    createReview(currentState);
    setNewForm({
      rating: "",
      content: "",
    });
    console.log("submitted");
  };

  const loaded = () => {
    return finalReviewData.map((data) => (
          <div key={data._id} className="each-review">
            <div className="user-rating">
              <p className="user-rating-text">User Rating:</p>
              <p className="user-rating-text-2">{data.rating}/5 Stars</p>
            </div>
            <div className="review-description">
              <p className="review-description-text">Review Description: </p>
              <p className="review-description-text-2">{data.content}</p>
            </div>
          </div>
    ));
  };

  const loading = () => {
    <div>Reviews Loading...</div>;
  };

  useEffect(() => {
    getReviewData();
  }, []);

  console.log("loop complete", finalReviewData);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label className="rating-label">
              Rating:
              <input
                value={newForm.rating}
                name="rating"
                onChange={handleChange}
                max="5"
                step="1"
                type="range"
                className="rating rating--nojs"
                onInput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
              />
            </label>
          </div>
          <div className="">
            <p className="">Review:</p>
            <textarea
              type="text"
              value={newForm.content}
              name="content"
              placeholder="Review"
              onChange={handleChange}
              className="review-input-field"
            />
          </div>
          <div className="review-button-container">
            <input
              type="submit"
              value="Create Review"
              className="button"
              onClick={() => {
                handleShow();
              }}
            />
          </div>
          <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={handleClose}
            className="rounded-lg"
          >
            <div className="modal-text-image-container modal-content rounded">
              <h1 className="modal-text">Thank you for submitting a review!</h1>
              <img
                className="thank-you-image"
                src="https://media.tenor.com/rMn0aXhrK5sAAAAC/homer-simpson-whoo-hoo.gif"
                height="auto"
                width="500"
              />
              <p className="click-anywhere">
                (Click off anywhere to exit pop up!)
              </p>
            </div>
          </Modal>
        </form>
        <h4>Anonymous Reviews</h4>
      </div>
      <div id="review-container">
        {finalReviewData && finalReviewData.length ? loaded() : loading()}  
      </div>
    </div>
  );
};

export default Review;

