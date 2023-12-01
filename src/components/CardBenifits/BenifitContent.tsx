import BenefitContentItem from "./BenifitItem";
import { benefitData } from "./BenifitConstant";

const BenifitContent = () => {
  return (
    <div>
      {benefitData.map((data, index) => (
        <BenefitContentItem
          key={index}
          icon={data.icon}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default BenifitContent;
