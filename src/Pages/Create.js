import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const [nft, setNft] = useState([]);
  const [newForm, setNewForm] = useState({
    username: "",
    assetName: "",
    image: "",
    price: "",
  });

  const getNFT = async () => {
    try {
      const response = await fetch("/create");
      const allNFT = await response.json();
      setNft(allNFT);
    } catch (error) {
      console.log(error);
    }
  };

  const createNFT = async (nftData) => {
    try {
      await fetch("nft", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nftData),
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
    createNFT(currentState);
    setNewForm({ username: "", assetName: "", image: "", price: "" });
  };

  const loaded = () => {
    return nft.map((nft) => (
      <div key={nft._id}>
        <Link to={`/${nft._id}`}>
          <h1>{nft.assetName}</h1>
          <img src={nft.image} alt={nft.assetName} />
          <h3>{nft.price}</h3>
          <h3>{nft.username}</h3>
        </Link>
      </div>
    ));
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
          <p className="input-title">Username:</p>
          <p className="input-title">NFT Name:</p>
          <p className="input-title">Image URL:</p>
          <p className="input-title">Price:</p>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit} />
          <div className="username-container">
            <input
              type="text"
              value={newForm.username}
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="assetName-container">
            <input
              type="text"
              value={newForm.assetName}
              name="assetName"
              placeholder="NFT Name"
              onChange={handleChange}
            />
          </div>
          <div className="image-container">
            <input
              type="text"
              value={newForm.image}
              name="image"
              placeholder="Image URL"
              onChange={handleChange}
            />
          </div>
          <div className="price-container">
            <input
              type="text"
              value={newForm.price}
              name="price"
              placeholder="Price"
              onChange={handleChange}
            />
            <input type="submit" value="Create NFT" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
