import "./Home.css";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import HomeCarousel from "../components/Carousel";
import HomeTable from "../components/HomeTable";

const Home = () => {
  const [homeData, setHomeData] = useState([]);
  const URL = "https://dbl-project-3-backend.herokuapp.com/nft";
  const getHomeData = async () => {
    try {
      const response = await fetch(URL);
      let data = await response.json();
      setHomeData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHomeData();
  }, []);

  const loaded = () => {
    return (
      <Container fluid className="home-page">
        <Container fluid className="home-bg">
          <h1 className="top-heading">Explore, collect, and sell NFTs</h1>
          <HomeCarousel carouselData={homeData} />
        </Container>
        <HomeTable tableData={homeData} />
      </Container>
    );
  };

  const loading = () => {
    return <p>Loading...</p>;
  };

  return homeData ? loaded() : loading();
};

export default Home;
