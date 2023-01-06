import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Review = ({ reviewData, nftId }) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [review, setReview] = useState(null);
  const [newForm, setNewForm] = useState({
    rating: "",
    content: "",
  });

  const createReviewURL = `https://dbl-project-3-backend.herokuapp.com/nft/${nftId}/add-review`;

  const createReview = async (reviewData) => {
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
  };

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
  const [finalReviewData, setFinalReviewData] = useState(null);
  // const reviewDataArray = [];

  // async function getReviewData() {
  //   for (let i = 1; i < reviewData.length; i++) {
  //     const reviewURL = `https://dbl-project-3-backend.herokuapp.com/review/${reviewData[i]}`;
  //     reviewData.push(fetch(reviewURL).then((response) => response.json()));
  //   }

  //   Promise.all(reviewDataArray).then((data) => {
  //     const ratingReview = data.map((reviewDataArray) => ({
  //       rating: reviewData.rating,
  //       content: reviewData.content
  //     }))
  //     setFinalReviewData(ratingReview);
  //   });
  // }

  async function getReviewData() {
    console.log("review array", reviewData);
    let tempArray = [];
    reviewData.forEach(async (id) => {
      try {
        const response = await fetch(
          `https://dbl-project-3-backend.herokuapp.com/review/${id}`
        );
        const data = await response.json();
        console.log("review object", data);
        tempArray.push(data);
      } catch (error) {
        console.log(error);
      }
    });
    setFinalReviewData(tempArray);
  }

  useEffect(() => {
    getReviewData();
  }, []);
  console.log("loop complete", finalReviewData);

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
              // onClick={() => {
              //   handleShow();
              // }}
            />
          </div>
          {/* <Modal className="modal" show={show} onHide={handleClose}>
        <h1 className="modal-text">Congratulations!</h1>
        <h1 className="modal-text">You've just added a Review!</h1>
      </Modal> */}
        </form>
      </div>
      <p>reviews component should be here{finalReviewData && finalReviewData.length ? loaded() : loading()}</p>
    </div>
  );
};

export default Review;
