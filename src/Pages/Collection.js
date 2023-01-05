import { useEffect, useState } from "react";
import React from "react";
import Select from "react-select";
import "./Collection.css";

const Collection = () => {
  const URL = "https://dbl-project-3-backend.herokuapp.com/nft";
  const [nft, setNft] = useState([]);
  const [newForm, setNewForm] = useState({
    collectionName: "",
    assets: [],
  });

  const options = [];

  nft.forEach((item) => {
    options.push({ value: item.assetName, label: item.assetName });
  });

  const getNFT = async () => {
    try {
      const response = await fetch(URL);
      const allNFT = await response.json();
      setNft(allNFT);
    } catch (error) {
      console.log(error);
    }
  };

  const createCollection = async (collectionData) => {
    try {
      await fetch("/collection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(collectionData),
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
    createCollection(currentState);
    setNewForm({ collectionName: "", assets: [] });
  };

  const loaded = () => {
    return nft.map((nft) => (
      <div key={nft._id} className="nft-id-cp">
        <h1 className="nft-name-cp">NFT Name: {nft.assetName}</h1>
        <div className="nft-image-container-cp">
          <img className="nft-image-cp" src={nft.image} alt={nft.assetName} />
        </div>
        <h3 className="nft-price-cp">Price: {nft.price}</h3>
        <h3 className="nft-username-cp">Username: {nft.userName}</h3>
      </div>
    ));
  };

  const loading = () => {
    <div>...loading</div>;
  };

  useEffect(() => {
    getNFT();
  }, []);

  return (
    <div>
      <h1>Start a collection!</h1>
      <div className="collection-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.collectionName}
            name="collectionName"
            placeholder="Collection Name"
            onChange={handleChange}
          />
          <Select
            options={options}
            name="assets"
            className="selection-options"
            placeholder="Select your assets"
            value={newForm.assets}
            onChange={handleChange}
          ></Select>
          <input type="submit" value="Create collection" />
        </form>
      </div>
      <div className="nft-selection">
        {nft && nft.length ? loaded() : loading()}
      </div>
    </div>
  );
};

export default Collection;
