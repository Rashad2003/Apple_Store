import { FaTruckFast, FaRotate } from "react-icons/fa6";
import { FaHandHoldingUsd, FaHeadset } from "react-icons/fa";


export const Policy = () => {
    return (
        <>
        <div className="div-policy">
          <div className="icons">
          <FaTruckFast />
          </div>
          <div className="div-policy-text">
            <p>Worldwide Shipping</p>
            <p>Order above $100</p>
          </div>
        </div>

        <div className="div-policy">
          <div className="icons">
            <FaRotate />
          </div>
          <div className="div-policy-text">
            <p>Easy 30 Days Returns</p>
            <p>Returns Back in 7 Days</p>
          </div>
        </div>

        <div className="div-policy">
          <div className="icons">
            <FaHandHoldingUsd />
          </div>
          <div className="div-policy-text">
            <p>Money Back Guarantee</p>
            <p>Guarantee within 10 Days</p>
          </div>
        </div>

        <div className="div-policy">
          <div className="icons">
            <FaHeadset />
          </div>
          <div className="div-policy-text">
            <p>Easy Online Support</p>
            <p>24/7 Any Time Support</p>
          </div>
        </div>
        </>
    );
};