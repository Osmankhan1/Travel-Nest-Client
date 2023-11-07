import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/img/logo/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => console.log('sign out is succesfully'))
            .catch(error => console.error(error))
    }

    const links = <>
        <li><NavLink className='mr-3 text-xl font-semibold' to='home'>Home</NavLink></li>
        <li><NavLink className='mr-3 text-xl font-semibold' to='rooms'>Rooms</NavLink></li>
        <li><NavLink className='mr-3 text-xl font-semibold' to='bookings'>My Bookings</NavLink></li>
        {/* <li><NavLink className='mr-3 text-xl font-semibold' to='login'>Login</NavLink></li> */}
    </>
    return (
        <div className="navbar bg-slate-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                        {/* <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li> */}

                    </ul>
                </div>
                <img className="w-3/5" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                    {/* <li tabIndex={0}>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li> */}

                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user ? <>
                        <span>{user.email}</span>
                        <a onClick={handleSignOut} className="btn btn-sm mr-3 text-white bg-green-700 hover:bg-green-800">Log Out</a>
                    </> :
                    <Link className="btn btn-sm mr-3 text-white bg-green-700 hover:bg-green-800" to='/login'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;