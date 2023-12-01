import React from "react";
import { Card } from 'antd';
interface CardFeatureProps {
  title: string;
  description: string;
}

const CardFeature: React.FC<CardFeatureProps> = ({ title, description }) => {
  return (
    <div className="get-started-item">
      <Card title={title} bordered={false} className="get-started-inner">
        {/* <h3>{title}</h3> */}
        <p>{description}</p>
      </Card>
    </div>
  );
};

export default CardFeature;
