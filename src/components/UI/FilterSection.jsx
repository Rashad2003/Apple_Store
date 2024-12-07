import { useFilterContext } from "../../context/filter_context"
export const FilterSection = () => {
    const {
        filters: { text, category },
        updateFilterValue,
        all_products,
    } = useFilterContext();

    const getUniqueData = (data, property) => {
        let newVal = data.map((curElem) => {
            return curElem[property];   
        })
        return newVal = ["All",...new Set(newVal)];
        };

    const categoryOnlyData = getUniqueData(all_products, "category")
    return (
        <>
        <section className="fs">
            <div className="filter-search">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" name="text" value={text} onChange={updateFilterValue} placeholder="SEARCH" autoComplete="off" />
                </form>
            </div>

            <div className="filter-category">
                <h3>Category</h3>
                <div>{categoryOnlyData.map((curElem, index) => {
                    return (
                    <button 
                    key={index} 
                    type="button" 
                    name="category" 
                    value={curElem} 
                    onClick={updateFilterValue} >
                    {curElem}
                    </button>
                    );
                })}
                </div>
            </div>
        </section>
        </>
    )
}