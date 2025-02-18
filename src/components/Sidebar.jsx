import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();


    // add useEffect or useState for siebar
    const toggleMenu = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const logOut = () => {
        navigate('/logout')
    }


    return (
        <div>
            <nav id="sidebar" className={`${isSidebarOpen ? "md:w-1/3 w-1/2 lg:w-56" : "w-0 lg:w-56"} bg-violet-600 w-0 h-screen fixed z-0 top-0 left-0 overflow-x-hidden pt-0 duration-500 rounded-tr-[4em]`}>
                {/* X Button */}
                <a className="flex justify-end text-white text-3xl pr-10 pt-3 lg:p-1 lg:hidden" href="#" onClick={toggleMenu}>&times;</a>

                {/* Logo */}
                <div className="flex items-center justify-center pt-3">
                    <Link to="/home"><img className="w-10/12 mx-auto" src="/images/stock_synergy_all_white.svg" alt="" /></Link>
                </div>

                {/* Links */}
                <div className="flex flex-col pl-10 text-2xl text-white gap-3">
                    <Link>Home</Link>
                    <Link>Restock</Link>
                    <Link>Sales Floor</Link>
                    <Link onClick={logOut}>Logout</Link>
                </div>

            </nav>
            <span className={`${isSidebarOpen ? "w-1/2 lg:hidden" : "w-0 lg:hidden"} text-3xl cursor-pointer text-right text-violet-600`} onClick={toggleMenu}>&#9776;</span>



        </div>
    );
}

export default Sidebar;