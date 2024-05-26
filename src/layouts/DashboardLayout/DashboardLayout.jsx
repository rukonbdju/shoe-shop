import { Outlet } from "react-router-dom";
import Topbar from "../../components/Dashboard/Topbar";
import Footer from "../../components/Footer/Footer";
import Dashboard from "../../pages/Dashboard/Dashboard";

const DashboardLayout=()=>{
    return(
        <div>
            <Dashboard></Dashboard>
            <Footer></Footer>
        </div>
    )
}
export default DashboardLayout;