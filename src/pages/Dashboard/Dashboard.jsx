import { Outlet } from "react-router-dom";
import Topbar from "../../components/Dashboard/Topbar";
import Sidebar from "../../components/Dashboard/Sidebar";

const Dashboard=()=>{
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <Topbar></Topbar>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <Sidebar></Sidebar>
            </div>
        </div>
    )
}
export default Dashboard;