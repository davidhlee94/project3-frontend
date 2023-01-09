import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./Create.css";

const Create = () => {
  const URL = "https://dbl-project-3-backend.herokuapp.com/nft";
  const [nft, setNft] = useState([]);
  const [newForm, setNewForm] = useState({
    userName: "",
    assetName: "",
    image: "",
    price: "",
    description: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [trigger, setTrigger] = useState(false);

  const getNFT = async () => {
    try {
      const response = await fetch(URL);
      const allNFT = await response.json();
      const lastNFT = await allNFT[allNFT.length - 1];
      setNft(lastNFT);
    } catch (error) {
      console.log(error);
    }
  };

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
    setNewForm({
      userName: "",
      assetName: "",
      image: "",
      price: "",
      description: "",
    });
    console.log("submitted");
  };

  const loaded = () => {
    return (
      <div key={nft._id} className="nft-id">
        <Link to={`/nft/${nft._id}`} className="nft-link">
          <h1 className="nft-name">NFT Name: {nft.assetName}</h1>
          <div className="nft-image-container">
            <img className="nft-image" src={nft.image} alt={nft.assetName} />
          </div>
          <div className="nft-creation-info">
            <h3 className="nft-creation-title">
              Price: <p className="just-text">${nft.price}</p>
            </h3>
            <h3 className="nft-creation-title">
              Username: <p className="just-text">{nft.userName}</p>
            </h3>
            <h3 className="nft-creation-title">
              Description: <p className="just-text">{nft.description}</p>
            </h3>
          </div>
        </Link>
      </div>
    );
  };

  const loading = () => {
    <div>NFT Loading...</div>;
  };

  useEffect(() => {
    if (setTrigger(true)) {
      getNFT();
    }
  }, []);

  return (
    <div>
      <div className="create-title-container">
        <h2 className="create-title">Create an NFT</h2>
      </div>
      <div className="input-form-container">
        <div className="input-title-container"></div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="username-container">
              <p className="input-title">Username:</p>
              <input
                className="input-field"
                type="text"
                value={newForm.userName}
                name="userName"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="assetName-container">
              <p className="input-title">NFT Name:</p>
              <input
                className="input-field"
                type="text"
                value={newForm.assetName}
                name="assetName"
                placeholder="NFT Name"
                onChange={handleChange}
              />
            </div>
            <div className="image-container">
              <p className="input-title">Image URL:</p>
              <input
                className="input-field"
                type="text"
                value={newForm.image}
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
              />
            </div>
            <div className="price-container">
              <p className="input-title">Price:</p>
              <input
                className="input-field"
                type="text"
                value={newForm.price}
                name="price"
                placeholder="Price"
                onChange={handleChange}
              />
            </div>
            <div className="description-container">
              <p className="input-title">Description:</p>
              <textarea
                className="input-field"
                type="text"
                value={newForm.description}
                name="description"
                placeholder="Description"
                rows={10}
                onChange={handleChange}
              />
            </div>
            <div className="button-container">
              <input
                type="submit"
                value="Create NFT"
                className="button"
                onClick={() => {
                  handleShow(trigger);
                }}
              />
              <Modal className="modal" show={show} onHide={handleClose}>
                <h1 className="modal-text">Congratulations!</h1>
                <h1 className="modal-text">You've just created an NFT!</h1>
                {nft ? loaded() : loading()}
              </Modal>
            </div>
            <div className="images-displayed">
              <img
                className="create-displayed-image"
                src="https://i.seadn.io/gae/so5wpgp3r45HujDF1M-IIPBqy28bTEiWBIjuKWj_JCUgdaUGo4k9u759EbmyyChxSzqV-HYE2OZyP4mtzw44mUicl1k4gvAYJrCM4Q?auto=format&w=1000"
              />
              <img
                className="create-displayed-image"
                src="https://i.seadn.io/gcs/files/38f03ff8bef94db70cca9ed311fb408c.png?auto=format&w=1920"
              />
              <img
                className="create-displayed-image"
                src="https://i.seadn.io/gcs/files/f661d58b7c429653abe325d065d3d428.jpg?auto=format&w=1000"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
