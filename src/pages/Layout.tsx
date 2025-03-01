import Header from "../components/Organisms/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Organisms/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
