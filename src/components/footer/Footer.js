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
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

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
            placeholder="Your email address"
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
      <Row className="footer-bottom">
        <Col>
          <Container>
            <Row className="footer-bottom-text">
              <Col className="nift-text">
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className="footer-logo-icon"
                />
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
          <Container>
            <Row>
              <Col>
                <h5>David</h5>
                <a
                  href="https://github.com/davidhlee94"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/iamdavidhanlee/"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <br />
                <a
                  href="https://www.facebook.com/"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  FaceBook
                </a>
                <br />
                <a
                  href="https://twitter.com/"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </Col>
              <Col>
                <h5>Barezi</h5>
                <a
                  href="https://github.com/easybarezi20"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/barezi-morales/"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <br />
                <a
                  href="https://www.facebook.com/"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  FaceBook
                </a>
                <br />
                <a
                  href="https://twitter.com/"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </Col>
              <Col>
                <h5>Luigi</h5>
                <a
                  href="https://github.com/luigibustos"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/luigibustos/"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <br />
                <a
                  href="https://www.facebook.com/"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  FaceBook
                </a>
                <br />
                <a
                  href="https://twitter.com/"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
