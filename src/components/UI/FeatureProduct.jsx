import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop_context";
import { Title } from "../layout/Title";
import ProductItem from "./ProductItem";

export const FeatureProduct = () => {
  const { products } = useContext(ShopContext);
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    const featuredProduct = products.filter((item) => item.featured);
    setFeature(featuredProduct.slice(0, 5));
  }, [products]);
  return (
    <>
      <div className="fp_1">
        <div className="fp_2">
          <Title text1={"BEST"} text2={"SELLERS"} />
          <p className="nb_3">
            Check out our best seller section for the most popular and
            highly-rated products loved by our customers!
          </p>
        </div>
        <div className="fp_3">
          {feature.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};
