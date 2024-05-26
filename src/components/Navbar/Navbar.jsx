import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Navbar = () => {
    const {user}=useAuth()
    console.log(user?.displayName)
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/products'>Products</Link></li>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Shoes</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?<Avater></Avater>:<Link to={'/login'} className="btn">Login</Link>
                    }
                </div>
            </div>
        </nav>
    )
}

const Avater=()=>{
    const {user,logout}=useAuth()
    return(
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="avater" src={user?.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link to={'/dashboard/profile'} className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li onClick={()=>logout()}><a>Logout</a></li>
      </ul>
    </div>
    )
}

export default Navbar