import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  const tsContainer = {
    backgroundColor: "rgb(24,104,183)",
    width: "100vw",
    height: "400px",
    paddingTop: "40px",
    paddingLeft: "30px",
    paddingRight: "30px",
    color: "rgb(251,253,255)",
    textDecoration: "none",
  };
  return (
    <Container fluid style={tsContainer}>
      <Row>
        <Col>
          <Container>
            <Row>
              <Col>
                <h1>Image Place Holder</h1>
                <h1>App Name Place Holder</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col>
          <h5>David</h5>
          <a href="/">GitHub</a>
          <br />
          <a href="/">LinkedIn</a>
          <br />
          <a href="/">FaceBook</a>
          <br />
          <a href="/">Twitter</a>
        </Col>
        <Col>
          <h5>Barezi</h5>
          <a href="/">GitHub</a>
          <br />
          <a href="/">LinkedIn</a>
          <br />
          <a href="/">FaceBook</a>
          <br />
          <a href="/">Twitter</a>
        </Col>
        <Col>
          <h5>Luigi</h5>
          <a href="/">GitHub</a>
          <br />
          <a href="/">LinkedIn</a>
          <br />
          <a href="/">FaceBook</a>
          <br />
          <a href="/">Twitter</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
