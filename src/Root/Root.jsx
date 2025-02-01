import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import ScrollToTop from "../components/shared/ScrollToTop";

const Root = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen from-pink-50 to-orange-50 hover:bg-gradient-to-bl focus:ring-4 
    focus:outline-none focus:ring-pink-200 dark:focus:ring-[#18194D]" >
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
      
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      
      <Footer />
    </div>
  );
};

export default Root;
