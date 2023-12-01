import { Image } from "antd";
import cardUsability from "../../assets/images/card-usability-image.png";
import "./CardUsability.scss";
const CardUsability = () => {
  return (
    <section className="image-content-section card-usability-section">
    <div className="container">
      <div className="image-content-grid" >
        <div className="left-block">
          <Image src={cardUsability} preview={false}
          alt="card usability Image"
          ></Image>
        </div>
        <div className="right-block">
          <h2>Make it dead easy for your customers to buy from you.</h2>
          <h3>Online payments are easier to process, give you more information online, and make processing faster.</h3>
          <p>
          Payment with us is easy and straight forward, you can pay in dollars, euros and bitcoin or ether tokens.We accept all major currencies and cryptocurrencies
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default CardUsability;
