import { assets } from "../../public/frontend_assets/assets";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Title } from "../components/layout/Title";
import { CartTotal } from "../components/UI/CartTotal";
import { ShopContext } from "../context/shop_context";
import axios from "axios";
import { toast } from "react-toastify";

export const Place_Order = () => {
  const [method, setMethod] = useState("cod");
  const {
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + "/api/order/verifyRazorpay",
            response,
            { headers: { token } }
          );

          if (data.success) {
            navigate("/orders");
            setCartItems({});
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        if (cartItems[items] > 0) {
          const itemInfo = structuredClone(
            products.find((product) => product._id === items)
          );
          if (itemInfo) {
            itemInfo.quantity = cartItems[items];
            orderItems.push(itemInfo);
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod": {
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          if (response.status === 200) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;
        }

        case "stripe": {
          const responseStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            { headers: { token } }
          );
          if (responseStripe.status === 200) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }
          break;
        }

        case "razorpay": {
          const responseRazorpay = await axios.post(
            backendUrl + "/api/order/razorpay",
            orderData,
            { headers: { token } }
          );
          if (responseRazorpay.status === 200) {
            initPay(responseRazorpay.data.order);
          }
          break;
        }

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="po_s">
      <div className="po_s1">
        <div className="po_s2">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="po_s3">
          <input
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="in_1"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="in_1"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="in_1"
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="in_1"
          type="text"
          placeholder="Street"
          required
        />
        <div className="po_s3">
          <input
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="in_1"
            type="text"
            placeholder="City"
            required
          />
          <input
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="in_1"
            type="text"
            placeholder="State"
            required
          />
        </div>
        <div className="po_s3">
          <input
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="in_1"
            type="number"
            placeholder="Zip-Code"
            required
          />
          <input
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="in_1"
            type="text"
            placeholder="Country"
            required
          />
        </div>
        <input
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="in_1"
          type="number"
          placeholder="Phone"
          required
        />
      </div>
      <div className="po_s4">
        <div className="po_s5">
          <div className="ct_10_1">
            <div className="ct_11">
              <CartTotal />
            </div>
          </div>
        </div>
        <div className="po_s6">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="po_s7">
            <div onClick={() => setMethod("stripe")} className="po_s8">
              <p className={`${method === "stripe" ? "green-bg" : ""} p_1`}></p>
              <img className="img_01" src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={() => setMethod("razorpay")} className="po_s8">
              <p
                className={`${method === "razorpay" ? "green-bg" : ""} p_1`}
              ></p>
              <img className="img_01" src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod("cod")} className="po_s8">
              <p className={`${method === "cod" ? "green-bg" : ""} p_1`}></p>
              <p className="p_2">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="po_s9">
            <button type="submit" className="po_btn">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
