import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

const MainLayout=()=>{
    return(
        <div className="bg-slate-100">
         <Navbar></Navbar> 
         <Outlet></Outlet> 
         <Footer></Footer> 
        </div>
    )
}
export default MainLayout;