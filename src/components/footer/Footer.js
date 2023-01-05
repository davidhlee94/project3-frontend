import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const tsContainer = {
    backgroundColor: "rgb(24,104,183)",
    width: "100vw",
    height: "500px",
    paddingTop: "40px",
    paddingLeft: "30px",
    paddingRight: "30px",
    color: "rgb(251,253,255)",
    textDecoration: "none",
  };
  return (
    <Container fluid style={tsContainer}>
      <Row className="footerTop">
        <Col className="footerTopText">
          <h2>Stay in the loop</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <input placeholder="Your emaild address"></input>
          <button>Sign Up</button>
        </Col>
        <Col>
          <h2>Join the Community</h2>
          <Row>
            <Col>
              <a href="/">
                <FontAwesomeIcon icon={faFacebook} className="footerIcon" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faInstagram} className="footerIcon" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter} className="footerIcon" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faTwitch} className="footerIcon" />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="footerBottom">
        <Col>
          <Container>
            <Row className="footerBottomText">
              <Col>
                {/* <h1>Image Place Holder</h1> */}
                <h4>NiFT</h4>
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
          <a href="/" className="footerLink">
            GitHub
          </a>
          <br />
          <a href="/" className="footerLink">
            LinkedIn
          </a>
          <br />
          <a href="/" className="footerLink">
            FaceBook
          </a>
          <br />
          <a href="/" className="footerLink">
            Twitter
          </a>
        </Col>
        <Col>
          <h5>Barezi</h5>
          <a href="/" className="footerLink">
            GitHub
          </a>
          <br />
          <a href="/" className="footerLink">
            LinkedIn
          </a>
          <br />
          <a href="/" className="footerLink">
            FaceBook
          </a>
          <br />
          <a href="/" className="footerLink">
            Twitter
          </a>
        </Col>
        <Col>
          <h5>Luigi</h5>
          <a href="/" className="footerLink">
            GitHub
          </a>
          <br />
          <a href="/" className="footerLink">
            LinkedIn
          </a>
          <br />
          <a href="/" className="footerLink">
            FaceBook
          </a>
          <br />
          <a href="/" className="footerLink">
            Twitter
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
