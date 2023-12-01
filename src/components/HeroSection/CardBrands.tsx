import { Image } from "antd";
import CarBrandImage from "../../assets/images/car-brand-image.png";

const CardBrands = () => {
  return (
    <section className="car-brand-section">
      <div className="container">
        <Image src={CarBrandImage} preview={false}
         alt="CarBrand Image"
         ></Image>
      </div>
    </section>
  );
};

export default CardBrands;
