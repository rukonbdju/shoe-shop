import { Link } from "react-router-dom";

const Topbar = () => {
    return (
        <div className="w-full navbar bg-slate-100">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex-1 px-2 mx-2 font-bold">Shoe Shop</div>
            <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                    {/* Navbar menu content here */}
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/dashboard/profile'}>Profile</Link></li>
                    <li><Link to={'/dashboard/products'}>Products</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Topbar;