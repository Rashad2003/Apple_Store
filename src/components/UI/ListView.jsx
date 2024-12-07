import { NavLink } from "react-router-dom";
import { FormatPrice } from "./FormatPrice";

export const ListView = ({products}) =>{
    return (
        <>
        <div className="view">
            <div className="container grid">
                {
                    products.map((curElem) => {
                        const {id, name, image, price, description} = curElem;
                        return(
                            <div className="card grid grid-two-column">
                                <figure>
                                    <img src={image} alt={name} />
                                </figure>

                                <div className="card-data">
                                    <h3>{name}</h3>
                                    <p><FormatPrice price={price}/></p>
                                    <p>{description.slice(0, 90)}...</p>
                                    <NavLink to={`/ProductDetails/${id}`}>
                                    <button className="btn-atc">Read More</button>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}