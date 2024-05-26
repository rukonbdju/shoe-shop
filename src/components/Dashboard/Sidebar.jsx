import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
                {/* Sidebar content here */}
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/dashboard/profile'}>Profile</Link></li>
                <li><Link to={'/dashboard/products'}>Products</Link></li>
            </ul>
        </div>
    )
}
export default Sidebar;