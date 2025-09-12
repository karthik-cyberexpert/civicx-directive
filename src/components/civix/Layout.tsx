import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto bg-white rounded-lg shadow-md overflow-hidden flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;