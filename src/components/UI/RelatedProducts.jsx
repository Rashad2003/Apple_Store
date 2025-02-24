import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop_context";
import ProductItem from "./ProductItem";
import { Title } from "../layout/Title";

export const RelatedProducts = ({ category }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <div className="rp_1">
      <div className="rp_2">
        <Title text1={"Related"} text2={"Products"} />
      </div>
      <div className="rp_3">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};
