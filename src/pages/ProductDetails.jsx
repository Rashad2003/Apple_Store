import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shop_context";
import { assets } from "../../public/frontend_assets/assets";
import { PageNavigation } from "../components/UI/PageNavigation";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { RelatedProducts } from "../components/UI/RelatedProducts";

export const ProductDetails = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="pd_1">
      <PageNavigation title={productData.name} />
      <div className="pd_3">
        <div className="pd_4">
          <div className="pd_5">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="pd_6"
                alt=""
              />
            ))}
          </div>
          <div className="pd_7">
            <img className="pd_8" src={image} alt="" />
          </div>
        </div>

        <div className="pd_9">
          <h1 className="pd_10">{productData.name}</h1>
          <div className="pd_11">
            <img src={assets.star_icon} alt="" className="pd_12" />
            <img src={assets.star_icon} alt="" className="pd_12" />
            <img src={assets.star_icon} alt="" className="pd_12" />
            <img src={assets.star_icon} alt="" className="pd_12" />
            <img src={assets.star_dull_icon} alt="" className="pd_12" />
            <p className="pd_13">(122)</p>
          </div>
          <p className="pd_14">
            <del>
              {currency}
              {productData.price + 250}
            </del>
          </p>
          <p className="pd_14">
            Deal of the Day: {currency}
            {productData.price}
          </p>
          <p className="pd_15">{productData.description}</p>
          <div className="product-data">
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Apple Delivery</p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>
          </div>
          <button onClick={() => addToCart(productData._id)} className="pd_16">
            ADD TO CART
          </button>
        </div>
      </div>

      <RelatedProducts category={productData.category} />
    </div>
  ) : (
    <div className="pd_2"></div>
  );
};
