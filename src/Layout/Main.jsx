import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";


const Main = () => {
    return (
      <div>
        <Navbar />
        <div className="lg:mx-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
};

export default Main;