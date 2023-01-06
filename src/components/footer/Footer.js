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
  return (
    <Container className="footer-container" fluid>
      <Row className="footer-top">
        <Col className="footer-top-text">
          <h2>Stay in the loop</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <input
            className="footer-top-input"
            placeholder="Your emaild address"
          ></input>
          <button className="footer-top-button">Sign Up</button>
        </Col>
        <Col className="community-text">
          <h2>Join the Community</h2>
          <Row>
            <Col>
              <a href="/">
                <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faTwitch} className="footer-icon" />
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
          <a href="/" className="footer-link">
            GitHub
          </a>
          <br />
          <a href="/" className="footer-link">
            LinkedIn
          </a>
          <br />
          <a href="/" className="footer-link">
            FaceBook
          </a>
          <br />
          <a href="/" className="footer-link">
            Twitter
          </a>
        </Col>
        <Col>
          <h5>Barezi</h5>
          <a href="/" className="footer-link">
            GitHub
          </a>
          <br />
          <a href="/" className="footer-link">
            LinkedIn
          </a>
          <br />
          <a href="/" className="footer-link">
            FaceBook
          </a>
          <br />
          <a href="/" className="footer-link">
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
