import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";

const HomeCarousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  async function getCarouselData() {
    let response = await fetch(
      "https://dbl-project-3-backend.herokuapp.com/nft"
    );
    let data = await response.json();
    // console.log(data);
    setCarouselData(data);
  }
  useEffect(() => {
    getCarouselData();
  }, []);
  console.log("Data State", carouselData);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel
        responsive={responsive}
        arrows={true}
        // centerMode={true}
        itemClass="carousel-item-padding-40-px"
        focusOnSelect={true}
      >
        {carouselData !== [] ? (
          carouselData.map((item, idx) => {
            return (
              <Card style={{ width: "20rem" }} key={idx}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{
                    height: "18rem",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title>{item.assetName}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
