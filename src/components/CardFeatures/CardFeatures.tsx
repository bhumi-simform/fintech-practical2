import React from "react";
import CardFeature from "./CardFeature";
import "./CardFeature.scss";


const cardFeaturesData = [
  {
    title: "989K",
    description: "Crowdholding accepts a variety of payments.",
  },
  {
    title: "89%",
    description: "Payment with us is easy and straightforward.",
  },
  {
    title: "4583+",
    description: "We accept all major currencies and cryptocurrencies.",
  },
];

const CardFeatures: React.FC = () => {
  return (
    <section className="get-started-section">
      <div className="container">
        <h2>Get started spending with your card in minutes</h2>
        <div className="get-started-wrapper">
          {/* <Flex gap="middle" align="start" vertical> */}
            {cardFeaturesData.map((data, index) => (
              <CardFeature
                key={index}
                title={data.title}
                description={data.description}
              />
            ))}
            </div>
      </div>
    </section>
  );
};

export default CardFeatures;
