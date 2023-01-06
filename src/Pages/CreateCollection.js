import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CreateCollection.css";

const CreateCollection = () => {
  // const URL = "https://dbl-project-3-backend.herokuapp.com/collection";
  const testURL = "http://localhost:4000/collection";
  const [collection, setCollection] = useState([]);
  const [newForm, setNewForm] = useState({
    userName: "",
    assetName1: "",
    assetName2: "",
    assetName3: "",
    image1: "",
    image2: "",
    image3: "",
    price: "",
    collectionName: "",
  });

  const getCollection = async () => {
    try {
      const response = await fetch(testURL);
      const allCollection = await response.json();
      setCollection(allCollection);
    } catch (error) {
      console.error(error);
    }
  };

  const createCollection = async (collectionData) => {
    try {
      await fetch(testURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(collectionData),
      });
      getCollection();
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
    setNewForm({
      userName: "",
      assetName1: "",
      assetName2: "",
      assetName3: "",
      image1: "",
      image2: "",
      image3: "",
      price: "",
      collectionName: "",
    });
  };

  const loaded = () => {
    console.log("component mounted");
    return collection.map((collection) => {
      return (
        <div key={collection._id} className="collection-id">
          <Link to={`/${collection._id}`} className="collection-link">
            <h1 className="collection-asset-name">{collection.assetName1}</h1>
            <div className="collection-image-container">
              <img
                className="collection-image"
                src={collection.image1}
                alt={collection.assetName1}
              />
            </div>
            <h1 className="collection-asset-name">{collection.assetName2}</h1>
            <div className="collection-image-container">
              <img
                className="collection-image"
                src={collection.image2}
                alt={collection.assetName2}
              />
            </div>
            <h1 className="collection-asset-name">{collection.assetName3}</h1>
            <div className="collection-image-container">
              <img
                className="collection-image"
                src={collection.image3}
                alt={collection.assetName3}
              />
            </div>
            <h3 className="collection-price">{collection.price}</h3>
            <h3 className="collection-username">{collection.userName}</h3>
          </Link>
        </div>
      );
    });
  };

  const loading = () => {
    <div>NFT Loading...</div>;
  };

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <div>
      <h2>Create an NFT Collection.</h2>
      <div className="input-form-container">
        <div className="input-title-container"></div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="username-container">
              <p className="input-title">Username:</p>
              <input
                type="text"
                value={newForm.userName}
                name="userName"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="assetName-container">
              <p className="input-title">Collection Name:</p>
              <input
                type="text"
                value={newForm.collectionName}
                name="collectionName"
                placeholder="Collection Name"
                onChange={handleChange}
              />
            </div>
            <div className="assetName-container">
              <p className="input-title">NFT Name 1:</p>
              <input
                type="text"
                value={newForm.assetName1}
                name="assetName1"
                placeholder="NFT Name 1"
                onChange={handleChange}
              />
            </div>
            <div className="assetName-container">
              <p className="input-title">NFT Name 2:</p>
              <input
                type="text"
                value={newForm.assetName2}
                name="assetName2"
                placeholder="NFT Name 2"
                onChange={handleChange}
              />
            </div>
            <div className="assetName-container">
              <p className="input-title">NFT Name 3:</p>
              <input
                type="text"
                value={newForm.assetName3}
                name="assetName3"
                placeholder="optional"
                onChange={handleChange}
              />
            </div>
            <div className="image-container">
              <p className="input-title">Image URL 1:</p>
              <input
                type="text"
                value={newForm.image1}
                name="image1"
                placeholder="Image URL 1"
                onChange={handleChange}
              />
            </div>
            <div className="image-container">
              <p className="input-title">Image URL 2:</p>
              <input
                type="text"
                value={newForm.image2}
                name="image2"
                placeholder="Image URL 2"
                onChange={handleChange}
              />
            </div>
            <div className="image-container">
              <p className="input-title">Image URL 3:</p>
              <input
                type="text"
                value={newForm.image3}
                name="image3"
                placeholder="optional"
                onChange={handleChange}
              />
            </div>
            <div className="price-container">
              <p className="input-title">Price:</p>
              <input
                type="text"
                value={newForm.price}
                name="price"
                placeholder="Price"
                onChange={handleChange}
              />
            </div>
            <input type="submit" value="Create Collection" className="button" />
          </form>
        </div>
      </div>
      {collection && collection.length ? loaded() : loading()}
    </div>
  );
};

export default CreateCollection;
