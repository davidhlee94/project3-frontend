import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import './Review.css'

const Review = ({ reviewData, nftId }) => {
  const [newForm, setNewForm] = useState({
    rating: "",
    content: "",
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
          }, 300)
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
        <div key={data._id} id='review'>
          <img id="review-image" src="https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png" key='anonymouse'/>
          
          <div id="review-bubble-text">
            <p>{data.rating} &#x2605;</p>
            <p>{data.content}</p>
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
      <div >
        <form onSubmit={handleSubmit} id="review-container">
          <div id="review-text">
            <input
              type="text"
              value={newForm.rating}
              id="rating-text"
              name="rating"
              placeholder="Rating 1-5"
              onChange={handleChange}
            />
          </div>
          <div id="review-text">
            <input
              type="text"
              value={newForm.content}
              name="content"
              id="review-text"
              placeholder="Review"
              onChange={handleChange}
            />
          </div>
          <div id="review-button">
            <input
              type="submit"
              value="Create Review"
              id="button"
              onClick={() => {
                handleShow();
              }}
            />
          </div>
          <Modal className="modal" show={show} onHide={handleClose}>
            <h1 className="modal-text">Congratulations!</h1>
            <h1 className="modal-text">You've just added a Review!</h1>
          </Modal>
        </form>
      </div>
        <div id="review-table">
          {finalReviewData && finalReviewData.length ? loaded() : loading()}
        </div>
      </div>
  );
};

export default Review;
