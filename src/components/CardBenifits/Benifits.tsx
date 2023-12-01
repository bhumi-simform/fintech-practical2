import { Image, List  } from "antd";
import BenefitContentItem from "../CardBenifits/BenifitItem";
import BenifitImg from "../../assets/images/benifit-img.png";
import { benefitData } from "./BenifitConstant";
import "./CardBenifits.scss"
const Benifits = () => {
  return (
    <section className="image-content-section card-benifits-section">
    <div className="container">
      <div className="image-content-grid best-ways-send-money-wrapper">
        <div className="left-block">
          <div className="content-wrapper">
              <h2>Coca Pay provides the best value for you</h2>
              <p>We always ready to help by providing the best service in the filed of finance for you good finance provides a better life</p>
          </div>
          <Image src={BenifitImg} preview={false}
          alt="Featured Image"
          ></Image>
        </div>
        <div className="right-block best-ways-content">
          <List>
              {benefitData.map((data, index) => (
                <BenefitContentItem
                  key={index}
                  icon={data.icon}
                  title={data.title}
                  description={data.description}
              />
                ))}
            </List>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Benifits;
