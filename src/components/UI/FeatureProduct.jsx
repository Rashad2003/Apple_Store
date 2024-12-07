import { useProductContext } from "../../context/productContex";
import { Product } from "./Product";

export const FeatureProduct = () => {
    const { isLoading, featureProducts } = useProductContext();
    console.log(featureProducts);
 return (
    <>
        <div className="container">
            <div className="intro-data">
                check Now!
            </div>
            <div className="common-heading">
                Our Feature Service
            </div>
            <div className="grid grid-three-column">
                {
                    featureProducts.map((curElem) => {
                        return <Product key={curElem.id} {...curElem} />;
                    })
                }
            </div>
        </div>
    </>
  )
};