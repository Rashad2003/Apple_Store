import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../context/filter_context"

export const Sort = () => {
    const {filter_products, grid_view, setGridView, setListView, sorting} = useFilterContext();
    return(
        <>
        <section className="ss">
            <div className="sorting-list--grid">
                <button className={grid_view ? "active sort-btn" : "sort-btn"} onClick={setGridView}>
                    <BsFillGridFill className="icon" />
                </button>
                <button className={!grid_view ? "active sort-btn" : "sort-btn"} onClick={setListView}>
                    <BsList className="icon" />
                </button>
            </div>
            <div className="product-data"><p>{`${filter_products.length} Products Available`}</p></div>
            <div className="sort-selection">
                <form action="#">
                    <label htmlFor="sort"></label>
                    <select name="sort" id="sort" className="sort-selection--style" onClick={sorting}>
                        <option value="lowest">Price(Lowest)</option>
                        <option value="highest">Price(Highest)</option>
                    </select>
                </form>
            </div>
        </section>
        </>
    )
}