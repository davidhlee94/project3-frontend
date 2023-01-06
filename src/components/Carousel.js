import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Container from "react-bootstrap/Container";

const HomeCarousel = ({ carouselData }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
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
    <Container fluid className="carouselContainer">
      <Carousel responsive={responsive} focusOnSelect={true}>
        {carouselData !== [] ? (
          carouselData.map((item, idx) => {
            return (
              <div
                className="carouselCard"
                key={idx}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="carouselCardText">
                  <p>{item.assetName}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </Carousel>
    </Container>
  );
};

export default HomeCarousel;
