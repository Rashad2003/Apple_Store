import { useState } from "react"
import { CartAmountToggle } from "./CartAmountToggle";
import { useCartContext } from "../../context/cart_context";
import { toast } from "react-toastify";

export const AddTOCart = ({ product }) => {
    const {addTOCart} = useCartContext();
    const { id, stock } = product;
    const [amount, setAmount] = useState(1);

    const notify = () => toast.success(`${product.name} added to Cart`);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }
    return(
        <>
        <section>
        {/* add to cart */}
        <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/>
        
        <button className="btn-atc"onClick={() => {
            addTOCart(id, amount, product);
            notify();
            }}
            >
            Add to Cart
            </button>
        </section>
        </>
    )
}