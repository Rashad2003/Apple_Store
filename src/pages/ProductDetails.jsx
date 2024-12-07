import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useProductContext } from "../context/productContex";
import { PageNavigation } from "../components/UI/PageNavigation";
import { MyImage } from "../components/layout/MyImage"
import { FormatPrice } from "../components/UI/FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { Star } from "../components/layout/Star";
import { AddTOCart } from "../components/layout/AddTOCart";

const API = "https://api.pujakaitem.com/api/products";

export const ProductDetails = () => {
    const {getSingleProduct, isSingleLoading, singleProduct} = useProductContext();
    const { id } = useParams();

    const { id:alias, name, company, price, description, category, stock, stars, image, reviews } = singleProduct;

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
    }, []);

    if(isSingleLoading) {
        return (<div className="page_loading"></div> )
    };

    return (
        <>
        <section>
            <PageNavigation title={name}/>
            <div className="container-pd">
                <div className="grid grid-two-column">
                    <div className="product_images">
                    <MyImage imgs={image}/>
                    </div>
                    <div className="product-data">
                        <h2>{name}</h2>
                        <Star stars={stars} reviews={reviews}/>
                        <p className="product-data-price">
                            MRP:
                            <del>
                                <FormatPrice price={price + 250000}/>
                            </del>
                        </p>
                        <p className="product-data-price product-data-real-price">
                            Deal of the Day: <FormatPrice price={price} />
                        </p>
                        <p>{description}</p>
                        <div className="product-data-warranty">
                            <div className="product-warranty-data">
                                <TbTruckDelivery className="warranty-icon"/>
                                <p>Free Delivery</p>
                            </div>
                           
                            <div className="product-warranty-data">
                                <TbReplace className="warranty-icon"/>
                                <p>30 Days Replacement</p>
                            </div>
                            
                            <div className="product-warranty-data">
                                <TbTruckDelivery className="warranty-icon"/>
                                <p>Apple Delivery</p>
                            </div>
                            
                            <div className="product-warranty-data">
                                <MdSecurity className="warranty-icon"/>
                                <p>2 Year Warranty</p>
                            </div>
                        </div>

                        <div className="product-data-info">
                            <p>Available: 
                                <span>{stock > 0 ? "In Stock" : "Not Available"} </span>
                            </p>
                            <p>
                                Brand: <span> {company} </span>
                            </p>
                        </div>
                        {/* <hr /> */}
                        {stock > 0 && <AddTOCart product={singleProduct} />}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};