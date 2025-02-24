import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shop_context";
import { assets } from "../../public/frontend_assets/assets";
import ProductItem from "../components/UI/ProductItem";
import { Title } from "../components/layout/Title";

export const Products = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  // useEffect(() => {
  //   setFilterProducts(products);
  // }, []);

  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <>
      <div className="ps_01">
        <div className="ps_02">
          <p onClick={() => setShowFilter(!showFilter)} className="ps_03">
            <h3>FILTERS</h3>
            <img
              className={`ps_09 ${showFilter ? "" : "rotate"}`}
              src={assets.dropdown_icon}
              alt=""
            />
          </p>
          <div className={`ps_04 ${showFilter ? "" : "hidden"}`}>
            <p className="ps_05">
              <b>CATEGORIES</b>
            </p>
            <div className="ps_06">
              <p className="ps_07">
                <input
                  className="ps_08"
                  type="checkbox"
                  value={"iPhone"}
                  onChange={toggleCategory}
                />
                iPhone
              </p>
              <p className="ps_07">
                <input
                  className="ps_08"
                  type="checkbox"
                  value={"Mac"}
                  onChange={toggleCategory}
                />
                Mac
              </p>
              <p className="ps_07">
                <input
                  className="ps_08"
                  type="checkbox"
                  value={"iPad"}
                  onChange={toggleCategory}
                />
                iPad
              </p>
              <p className="ps_07">
                <input
                  className="ps_08"
                  type="checkbox"
                  value={"AirPods"}
                  onChange={toggleCategory}
                />
                AirPods
              </p>
              <p className="ps_07">
                <input
                  className="ps_08"
                  type="checkbox"
                  value={"Watch"}
                  onChange={toggleCategory}
                />
                Watch
              </p>
              <p className="ps_07">
                <input
                  className="ps_08"
                  type="checkbox"
                  value={"Accessories"}
                  onChange={toggleCategory}
                />
                Accessories
              </p>
            </div>
          </div>
        </div>
        <div className="ps_10">
          <div className="ps_11">
            <Title text1={"All"} text2={"Products"} />
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="ps_12"
            >
              <option value="relavant">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          <div className="ps_13">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
