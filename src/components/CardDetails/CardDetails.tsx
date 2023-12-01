import {  Image } from "antd";
import "./CardDetails.scss";
import CarDetailImg from "../../assets/images/card-detail-img.png";
import AvatarImg from "../../assets/images/avatar-image.jpg";
import { Avatar, Card} from 'antd';
const { Meta } = Card;
const CardDetails = () => {
  return (
    <section className="image-content-section card-detail-section">
      <div className="container">
        <div className="image-content-grid">
          <div className="left-block">
            <Image src={CarDetailImg} preview={false}
              alt="Featured Image"
              ></Image>
          </div>
          <div className="right-block">
            <div className="top-wrapper">
              <h2>Simple & fast international payment</h2>
              <p>Use receiving accounts in a growing number of currencies and get
                  paid like a local. Pay freelancer and customers anywhere in the
                  world straight.
              </p>
            </div>
            <div className="botttom-wrapper">
              <blockquote>
              “Transferring is very easy and super fast. I find the different way from Coca Pay. Perfect payment app for all”
              </blockquote>
              <Card style={{marginTop: 24 }}>
                <Meta
                  avatar={<Avatar style={{width: 56, height: 56 }}  src={AvatarImg} />}
                  title="Jesica Azalea"
                  description="Director of Technology, Sans Bothers"
                />
              </Card>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
