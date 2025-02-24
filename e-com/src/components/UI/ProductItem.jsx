import { useContext } from "react";
import { ShopContext } from "../../context/shop_context";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="pt_0" to={`/product/${id}`}>
      <div className="pt_1">
        <img className="pt_2" src={image[0]} alt="" />
      </div>
      <p className="pt_3">{name}</p>
      <p className="pt_4">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
