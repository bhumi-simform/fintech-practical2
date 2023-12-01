// import { SmileOutlined, HeartOutlined } from "@ant-design/icons";
import BenefitContentItem from "../CardBenifits/BenifitItem";
import UserIcon from "../../assets/images/users-icon.svg";
import BankIcon from "../../assets/images/bank-iocn.svg";
import { List } from 'antd';
import "./InternationalMoneyTransferBenifits.scss";
import { Button } from 'antd'

const benefitData = [
  {
    icon: UserIcon,
    title: "Over 15 million customers",
    description:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    icon: BankIcon,
    title: "Licensed by Bank Wakanda",
    description:
      "Amet minim mollit non Exercitation veniam consequat sunt nostrud dummy content.",
  },
];

const InternationalMoneyTransferBenefits = () => {
  return (
    <section className="best-ways-send-money-section">
      <div className="container">
        <div className="best-ways-send-money-wrapper">
          <div className="best-ways-content left">
              <div className="content-wrapper">
                <h2>Best ways to send money internationally</h2>
                <p>Join over 12 million people who choose us for fast and secure online payment method . We are simply & cheaper than banks and non-banks.</p>
                <div className="btn-wrapper">
                    <Button className="primary-blue-btn btn" title="Join now">Join now</Button>
                    <Button className="btn blue-border-btn" title="Learn More">Learn More</Button>
                </div>
              </div>
          </div>
          <div className="best-ways-content right">
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

export default InternationalMoneyTransferBenefits;
