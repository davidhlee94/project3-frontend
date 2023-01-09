import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const HomeCarousel = ({ carouselData }) => {
  const responsive = {
    ultrawideDesktop: {
      breakpoint: { max: 4000, min: 3600 },
      centerMode: true,
      items: 9,
    },
    superLargeDesktop: {
      breakpoint: { max: 3600, min: 3200 },
      items: 8,
    },
    largeDesktop: {
      breakpoint: { max: 3200, min: 2800 },
      items: 7,
    },
    medDesktop: {
      breakpoint: { max: 2800, min: 2400 },
      items: 6,
    },
    smallDesktop: {
      breakpoint: { max: 2400, min: 2000 },
      items: 5,
    },
    xSmallDesktop: {
      breakpoint: { max: 2000, min: 1600 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1600, min: 1200 },
      items: 3,
    },
    smallTablet: {
      breakpoint: { max: 1200, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      autoPlay={true}
      autoPlaySpeed={5000}
      responsive={responsive}
      infinite={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-40-px"
    >
      {carouselData !== [] ? (
        carouselData.map((item, idx) => {
          return (
            <Link to={`/nft/${item._id}`} className="carousel-card-link">
              <div
                className="carousel-card"
                key={idx}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="carousel-card-text">
                  <h5>{item.assetName}</h5>
                  <p>Floor: {item.price} USD</p>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </Carousel>
  );
};

export default HomeCarousel;
