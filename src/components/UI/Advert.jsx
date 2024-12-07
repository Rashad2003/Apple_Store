import { NavLink } from "react-router-dom"

export const Advert = () => {
    return (
        <>
        <div className="div-extra grid grid-two--cols">
          <div className="extra-text">
            <p>Diwali Sale</p>
            <h3>Get Extra 20% off using Credit Card</h3>
            <NavLink to="/products">Show now</NavLink>
          </div>
          <div className="extra-img extra-laptop">
            <img src="/image/laptop.png" alt="" />
          </div>
        </div>

        <div className="div-extra grid grid-two--cols">
          <div className="extra-text">
            <p>Diwali Sale</p>
            <h3>Get Extra 10% off in Prepaid Order</h3>
            <NavLink to="/products">Show now</NavLink>
          </div>
          <div className="extra-img"> 
            <img src="/image/kindpng_4597164.png" alt="" />
          </div>
        </div>

        <div className="div-extra grid grid-two--cols">
          <div className="extra-text">
            <p>Diwali Sale</p>
            <h3>40% discount on iPhones</h3>
            <NavLink to="/products">Show now</NavLink>
          </div>
          <div className="extra-img">
            <img src="/image/mobiles.png" alt="" />
          </div>
        </div>
        </>
    )
}