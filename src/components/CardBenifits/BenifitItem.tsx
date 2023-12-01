import React from "react";
import { List } from 'antd';
import { Image } from "antd";

interface BenefitContentItemProps {
  icon?: string;
  title: string;
  description: string;
}

const BenefitContentItem: React.FC<BenefitContentItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <List.Item>
      <div className="img-wrapper">
        <Image src={icon} preview={false}></Image>
      </div>
      <div className="content-wrapper">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </List.Item>
  );
};

export default BenefitContentItem;
