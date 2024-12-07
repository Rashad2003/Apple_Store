import { Product } from "./Product"

export const GridView = ({products}) => {
    
    return(
        <>
        <div className="view">
            <div className="container grid grid-three-column">
                {products.map((curElem) => {
                        return <Product key={curElem.id} {...curElem} />;
                    })}
            </div>
        </div>
        </>
    )
}