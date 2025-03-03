import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    let name = sessionStorage.getItem("username");


    // add useEffect or useState for siebar
    const toggleMenu = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const logOut = () => {
        navigate('/logout')
    }


    return (
        <div className="bg-white dark:bg-common-black">
            <nav id="sidebar" className={`${isSidebarOpen ? "md:w-1/3 w-1/2 lg:w-56" : "w-0 lg:w-56"} bg-violet-600 w-0 h-screen fixed z-0 top-0 left-0 overflow-x-hidden pt-0 duration-500 rounded-tr-[4em]`}>

                {/* Sidebar Interior */}
                <div className="flex flex-col h-full text-white font-normal">

                    {/* X Button */}
                    <a className="flex justify-end text-3xl pr-10 pt-3 lg:p-1 lg:hidden" href="#" onClick={toggleMenu}>&times;</a>

                    {/* Logo */}
                    <div className="flex items-center justify-center pt-3">
                        <Link to="/home"><img className="w-10/12 mx-auto" src="/images/stock_synergy_all_white.svg" alt="" /></Link>
                    </div>


                    {/* Links */}
                    <div className="flex flex-col h-full text-2xl">

                        {/* Main Links */}
                        <div className="flex flex-col pl-5 gap-6">
                            <Link to='/home' className="flex gap-2"><img className="w-7" src="/images/home_icon.svg" alt="Home Icon" />Home</Link>
                            <Link to='/stockroom' className="flex gap-2"><img className="w-7" src="/images/stockroom_logo_white.svg" alt="Restock Icon" />Stockroom</Link>
                            <Link to='/salesfloor' className="flex gap-2"><img className="w-7" src="/images/sales_floor_white.svg" alt="Sales Floor Icon" />Sales Floor</Link>
                        </div>


                        {/* Profile/Logout Links */}
                        <div className="flex flex-col gap-3 mt-auto pl-10 pb-5">
                            <p className="bg-violet-700">Hi {name}</p>
                            <Link onClick={logOut} className="flex gap-2 "><img className="w-7" src="/images/logout_icon.svg" alt="Latest Activity" />Logout</Link>
                        </div>
                    </div>

                </div>
            </nav>

            <span className={`${isSidebarOpen ? "w-1/2 lg:hidden" : "w-0 lg:hidden"} text-5xl cursor-pointer text-right text-violet-600`} onClick={toggleMenu}>&#9776;</span>

        </div>
    );
}

export default Sidebar;