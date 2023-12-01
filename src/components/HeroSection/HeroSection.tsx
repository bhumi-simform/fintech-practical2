import { Button, Image, Col, Row  } from "antd";
import BannerGirl from "../../assets/images/banner-girl-image.png";
import "./HeroSection.scss";
const HeroSection = () => {
  return (
    <section className="image-content-section banner-section">
      <div className="container">
        <div className="image-content-grid">
          <div className="left-block">
            <Image src={BannerGirl} preview={false}
            alt="Featured Image"
            ></Image>
          </div>
          <div className="right-block">
            <h1>Pay everything got simple & fast</h1>
            <p>
            All in one for you payment transaction online without having to leave
            the house to make transactions
          </p>
          <Button className="primary-blue-btn btn">Register & Earn $50</Button>
          <Row gutter={96} justify="start">
          <Col className="gutter-row" span={9} >
              <h3>18k+</h3>
              <span>Cards Created</span>
            </Col>
            <Col className="gutter-row"  span={9}>
              <h3>20+</h3>
              <span>Awards Winning</span>
            </Col>
          </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
