import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

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
      <div key={data._id}>
        <p>{data.rating}</p>
        <p>{data.content}</p>
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
            <p className="">Rating</p>
            <input
              type="text"
              value={newForm.rating}
              name="rating"
              placeholder="Rating"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <p className="">Review</p>
            <input
              type="text"
              value={newForm.content}
              name="content"
              placeholder="Review"
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <input
              type="submit"
              value="Create Review"
              className="button"
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
      {finalReviewData && finalReviewData.length ? loaded() : loading()}
    </div>
  );
};

export default Review;
