import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop_context";
import { assets } from "../../../public/frontend_assets/assets";
import { useLocation } from "react-router";

export const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("products")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="sb_1">
      <div className="sb_2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="sb_3"
          type="text"
          placeholder="Search"
        />
        <img className="sb_4" src={assets.search_icon} alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="sb_5"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};
