import {FormatPrice} from "../UI/FormatPrice"
import { CartAmountToggle } from "../layout/CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/cart_context";

export const CartItem = ({id, name, image, price, amount}) => {
    const {removeItem, setDecrease, setIncrease} = useCartContext();
    // const setDecrease = () => {
    //     amount > 1 ? setAmount(amount - 1) : setAmount(1)
    // }

    // const setIncrease = () => {
    //     amount < stock ? setAmount(amount + 1) : setAmount(stock);
    // }

  return (
    <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt={id} />
                </figure>
            </div>
            <div>
                <p>{name}</p>
            </div>
        </div>
        <div className="cart-hide">
            <p>
                <FormatPrice price={price}/>
            </p>
        </div>

        <CartAmountToggle 
        amount={amount} 
        setDecrease={() => setDecrease(id)} 
        setIncrease={() => setIncrease(id)}
        />

        <div className="cart-hide">
            <p><FormatPrice price={price * amount}/></p>
        </div>

        <div>
            <FaTrash className="remove_icon" onClick={() => removeItem(id)}/>
        </div>
    </div>
  )
};