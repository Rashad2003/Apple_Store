import { FilterSection } from "../components/UI/FilterSection";
import { ProductList } from "../components/UI/ProductList";
import { Sort } from "../components/UI/Sort";

export const Products = () => {
    
    return (
        <>
        <section>
            <div className="container grid grid-filter-column">
                <div>
                    <FilterSection />
                </div>
                <section className="product-view--sort">
                    <div className="sort-filter">
                        <Sort />
                    </div>
                <div className="main-product">
                    <ProductList />
                </div>
                </section>
            </div>
        </section>
        </>
    )
};