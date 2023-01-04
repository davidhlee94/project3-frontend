import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import "./Create.css";

const Create = () => {
  const URL = "https://dbl-project-3-backend.herokuapp.com/nft";
  const [nft, setNft] = useState([]);
  const [newForm, setNewForm] = useState({
    userName: "",
    assetName: "",
    image: "",
    price: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const getNFT = async () => {
    try {
      const response = await fetch(URL);
      const allNFT = await response.json();
      const lastNFT = await allNFT[allNFT.length-1]
      setNft(lastNFT);
    } catch (error) {
        console.log(error);
    }
};
console.log(nft)

  const createNFT = async (nftData) => {
    try {
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nftData),
      });
      getNFT();
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
    createNFT(currentState);
    setNewForm({ userName: "", assetName: "", image: "", price: "" });
    console.log("submitted");
  };

  const loaded = () => {
    console.log(nft.assetName)
    return (
      <div key={nft._id}>
        <Link to={`/${nft._id}`}>
          <h1>{nft.assetName}</h1>
          <img src={nft.image} alt={nft.assetName} />
          <h3>{nft.price}</h3>
          <h3>{nft.userName}</h3>
        </Link>
      </div>
    );
  };

  const loading = () => {
    <div>NFT Loading...</div>;
  };

  useEffect(() => {
    getNFT();
  }, []);

  return (
    <div>
      <h2>Create an NFT below.</h2>
      <div className="input-form-container">
        <div className="input-title-container">
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="username-container">
            <p className="input-title">Username:</p><input
                type="text"
                value={newForm.userName}
                name="userName"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="assetName-container">
            <p className="input-title">NFT Name:</p><input
                type="text"
                value={newForm.assetName}
                name="assetName"
                placeholder="NFT Name"
                onChange={handleChange}
              />
            </div>
            <div className="image-container">
            <p className="input-title">Image URL:</p><input
                type="text"
                value={newForm.image}
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
              />
            </div>
            <div className="price-container">
            <p className="input-title">Price:</p><input
                type="text"
                value={newForm.price}
                name="price"
                placeholder="Price"
                onChange={handleChange}
              />
            </div>
            <input type="submit" value="Create NFT" className="button" onClick={handleShow}/>

            <Modal show={show} onHide={handleClose}>
                <h3>You have created {newForm.assetName}!</h3>
                <img src={newForm.image} width="300" height="auto"/>
            </Modal>
          </form>
        </div>
      </div>
      {nft ? loaded() : loading()}
    </div>
  );
};

export default Create;
