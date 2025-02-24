import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shop_context";
import { Title } from "../components/layout/Title";
import axios from "axios";

export const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      console.log(response);

      if (response.status === 200) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="or_1">
      <div className="or_2">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {orderData.map((item, index) => (
          <div key={index} className="or_3">
            <div className="or_4">
              <img className="or_5" src={item.image[0]} alt="" />
              <div>
                <p className="or_6">{item.name}</p>
                <div className="or_7">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p className="or_9">
                  Date:{" "}
                  <span className="or_10">
                    {new Date(item.date).toDateString()}
                  </span>
                </p>
                <p className="or_9">
                  Payment: <span className="or_10">{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="or_11">
              <div className="or_12">
                <p className="or_13"></p>
                <p className="or_14">{item.status}</p>
              </div>
              <button onClick={loadOrderData} className="or_15">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
