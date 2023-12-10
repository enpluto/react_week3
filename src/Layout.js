import { Outlet, Link } from "react-router-dom";

import Nav from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="header">
        <Nav />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
