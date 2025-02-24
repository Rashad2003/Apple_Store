import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SearchBar } from "../UI/SearchBar";

const AppLayout = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
