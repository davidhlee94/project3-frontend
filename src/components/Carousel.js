import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const HomeCarousel = ({ carouselData }) => {
  const responsive = {
    superLargeDesktop: {
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
    <Container>
      <Carousel responsive={responsive} focusOnSelect={true}>
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
    </Container>
  );
};

export default HomeCarousel;
