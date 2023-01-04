import { useState, useEffect } from "react";
import HomeCarousel from "../components/Carousel";
import HomeTable from "../components/HomeTable";

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
      <div>
        <HomeCarousel carouselData={homeData} />
        <HomeTable tableData={homeData} />
      </div>
    );
  };

  const loading = () => {
    return <p>Loading...</p>;
  };

  return (
    <div>
      <h1>Explore, collect, and sell NFTs</h1>
      {homeData ? loaded() : loading()}
    </div>
  );
};

export default Home;
