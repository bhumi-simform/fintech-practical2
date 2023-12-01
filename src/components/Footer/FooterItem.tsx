import React from "react";
import { Image } from "antd";
import { Col } from "antd";
import {Typography } from 'antd';
const {Link } = Typography;
interface FooterItemProps {
  icon?: string;
  description: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ icon, description }) => {
  return (
    <Col span={12} className="footer-list-item">
      <div className="footer-inner">
        <div className="img-wrapper"><Image src={icon} preview={false}></Image></div>
        <Link href="#" target="_blank">{description}</Link>
      </div>
    </Col>
  );
};

export default FooterItem;
