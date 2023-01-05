import "./Home.css";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import HomeCarousel from "../components/Carousel";
import HomeTable from "../components/HomeTable";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [homeData, setHomeData] = useState([]);
  const URL = "https://dbl-project-3-backend.herokuapp.com/nft";
  const getHomeData = async () => {
    try {
      const response = await fetch(URL);
      let data = await response.json();
      //   console.log(data);
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
      <Container fluid>
        <HomeCarousel carouselData={homeData} />
        <HomeTable tableData={homeData} />
        <Footer />
      </Container>
    );
  };

  const loading = () => {
    return <p>Loading...</p>;
  };

  return (
    <div className="homePage">
      <h1 className="topHeading">Explore, collect, and sell NFTs</h1>
      {homeData ? loaded() : loading()}
    </div>
  );
};

export default Home;
