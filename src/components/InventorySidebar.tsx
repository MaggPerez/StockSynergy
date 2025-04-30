import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { PlusCircle } from 'lucide-react';

const InventorySidebar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    const name: string | null = sessionStorage.getItem("username");
    

    /**
     * Function to convert string to boolean
     * @param value string
     * @returns converts a string into a boolean
     */
    function stringToBoolean(value: string): boolean{
        return value.toLocaleLowerCase() === "true";
    }
    

    const role = stringToBoolean(sessionStorage.getItem("isManager") || "");

    const toggleMenu = (): void => {
        setIsSidebarOpen((prevState) => !prevState);
    }

    return (
        <>
            <div>
                <nav className={`${isSidebarOpen ? "w-0 lg:w-56" : "w-1/2 md:w-72"} bg-violet-600 w-0 h-screen fixed
                    top-0 left-0 overflow-x-hidden pt-0 duration-500 rounded-tr-[4em] text-lg z-10`}>

                    <div className="flex flex-col h-full text-white font-normal">
                        {/* Close Button */}
                        <a className="flex justify-end text-3xl pr-10 pt-3 lg:p-1 lg:hidden" 
                           href="#" 
                           onClick={toggleMenu}>&times;</a>

                        {/* Logo */}
                        <div className="flex items-center justify-center lg:pt-1">
                            <Link to="/home">
                                <img className="lg:w-10/12 sm:w-8/12 w-10/12 mx-auto" 
                                     src="/images/stock_synergy_all_white.svg" 
                                     alt="Logo" />
                            </Link>
                        </div>

                        {/* Navigation Sections */}
                        <div className="flex flex-col h-full">
                            {/* Overview Section */}
                            <div className="flex flex-col gap-4 p-6">
                                <h3 className="text-sm text-violet-300 uppercase">Overview</h3>
                                <Link to='/home' className="flex gap-2">
                                    <img className="w-7" src="/images/home_icon.svg" alt="Home" />
                                    Dashboard
                                </Link>
                                <Link to='/analytics' className="flex gap-2">
                                    <img className="w-7" src="/images/latest_activity_white.svg" alt="Analytics" />
                                    Analytics
                                </Link>
                            </div>

                            {/* Inventory Section */}
                            <div className="flex flex-col gap-4 p-6">
                                <h3 className="text-sm text-violet-300 uppercase">Inventory</h3>
                                <Link to='/salesfloor' className="flex gap-2">
                                    <img className="w-7" src="/images/sales_floor_white.svg" alt="Sales Floor" />
                                    Sales Floor
                                </Link>
                                
                                <Link to='/stockroom' className="flex gap-2">
                                    <img className="w-7" src="/images/stockroom_logo_white.svg" alt="Stockroom" />
                                    Stockroom
                                </Link>
                                
                                <Link to='/restock' className="flex gap-2">
                                    <img className="w-7" src="/images/stockroom_logo_white.svg" alt="Categories" />
                                    Restock
                                </Link>
                            </div>

                            {/* Operations Section */}
                            <div className="flex flex-col gap-4 p-6">
                                <h3 className="text-sm text-violet-300 uppercase">Operations</h3>
                                <Link to='/orders' className="flex gap-2">
                                    <img className="w-7" src="/images/latest_activity_white.svg" alt="Orders" />
                                    Orders
                                </Link>
                                <Link to='/suppliers' className="flex gap-2">
                                    <img className="w-7" src="/images/stockroom_logo_white.svg" alt="Suppliers" />
                                    Suppliers
                                </Link>
                                {role ? (
                                    <Link to="/addproduct" className='flex gap-2'><PlusCircle size={29} strokeWidth={1.5} color='white' />Add Product</Link>
                                ) : ""}
                            </div>

                            {/* User Section */}
                            <div className="flex flex-col gap-3 mt-auto p-6 bg-violet-700">
                                <p className="text-sm">Hi {name}</p>
                                <Link to='/settings' className="flex gap-2">
                                    <img className="w-7" src="/images/home_icon.svg" alt="Settings" />
                                    Settings
                                </Link>
                                <Link to='/logout' className="flex gap-2">
                                    <img className="w-7" src="/images/logout_icon.svg" alt="Logout" />
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hamburger Menu */}
                <div className="flex justify-between lg:justify-end items-center px-4 py-2">
                    <span className={`${isSidebarOpen ? "lg:hidden" : "lg:hidden"} text-5xl cursor-pointer text-violet-600`} 
                          onClick={toggleMenu}>
                        &#9776;
                    </span>
                    <DarkModeToggle />
                </div>
            </div>
        </>
    );
}

export default InventorySidebar;