import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer"

const CartContex = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("appleCart");
    // if(localCartData === []) {
    //     return [];
    // } else {
    //     return JSON.parse(localCartData);
    // }
    const parsedData = JSON.parse(localCartData);
    if (!Array.isArray(parsedData)) return [];

    return parsedData;
};

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
};

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addTOCart = (id, amount, product) => {
        dispatch({type: "ADD_TO_CART", payload: {id, amount, product} });
    };

        const setDecrease = (id) => {
            dispatch({type: "SET_DECREMENT", payload:id});
        }
    
        const setIncrease = (id) => {
            dispatch({type: "SET_INCREMENT", payload:id});
        }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id})
    };

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }

    useEffect(() => {
        // dispatch({type:"CART_TOTAL_ITEM"});
        // dispatch({ type: "CART_TOTAL_PRICE" });
        dispatch({type: "CART_ITEM_PRICE_TOTAL"})
        localStorage.setItem("appleCart", JSON.stringify(state.cart));
    }, [state.cart]);


    return ( <CartContex.Provider value={{...state, addTOCart, removeItem, clearCart, setDecrease, setIncrease}}>
        {children}
    </CartContex.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContex);
}
