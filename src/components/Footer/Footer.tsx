import FooterItem from "./FooterItem";
import EnvelopIcon from "../../assets/images/envelope-icon.svg";
import MapPinIcon from "../../assets/images/map-pin-icon.svg";
import {List, Row } from "antd";
import {Typography } from 'antd';
const {Link } = Typography;
import "./Footer.scss"

const benefitData = [
  {
    icon: EnvelopIcon,
    description: "1929, Bancangan, Sambit, Suroboyo, Wakanda",
  },
  {
    icon: MapPinIcon,
    description: "hello@cocapay.co",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <p className="footer-title">Let’s join Coca Pay,<span> We protect your money</span></p>
          <Row className="footer-list">
                {benefitData.map((data, index) => (
                <FooterItem
                  key={index}
                  icon={data.icon}
                  description={data.description}
                />
              ))}
          </Row>
        </div>
        <div className="footer-bottom">
            <p>© Coca Pay by Sans Brothers</p>
            <List className="bottom-list-wrapper">
              <List.Item>
                <Link href="#" target="_blank" title="Terms & Conditions">Terms & Conditions</Link>
              </List.Item>
              <List.Item>
                <Link href="#" target="_blank" title="Privacy Policy">Privacy Policy</Link>
              </List.Item>
            </List>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
