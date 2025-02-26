
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import DarkModeToggle from "./components/DarkModeToggle";
import Graph from "./components/Graph";
import SectionLayout from "./components/SectionLayout";


function Home() {
    let name = sessionStorage.getItem("username");

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.background = "white"
    })

    return (
        <>
            <main className="bg-white dark:bg-common-black text-black dark:text-white h-[200vh] lg:pl-56 lg:duration-300">
                <Sidebar />


                {/* Dashboard having latest activities */}
                <Dashboard />

                {/* Horizontal Line */}
                <hr className="border-violet-600 border-2 mx-3 mb-5" />

                {/* Main Div */}
                <div className="flex gap-[35px] flex-col lg:flex-wrap lg:flex-row">



                    {/* News Section */}
                    <section className="items-center p-4 mx-3 bg-gray-50 dark:bg-common-black rounded-3xl shadow-sm dark:shadow-2xl
                    lg:w-1/3">
                        {/* Restock with Logo */}
                        <header className="flex gap-2 text-3xl font-bold pb-5">
                            <img className="w-9 px-1 bg-violet-500 rounded-xl" src="/images/news_logo_white.svg" alt="restock logo" />News
                        </header>

                        <h2 className="text-2xl font-bold">New Incoming Products</h2>
                        <ul className="list-disc pl-3">
                            <li>Sunglasses</li>
                            <li>Shorts</li>
                            <li>Tees</li>
                            <li>Jeans</li>
                        </ul>
                    </section>



                    {/* Sales Floor Section */}
                    <section className="items-center p-4 mx-3 bg-gray-50 dark:bg-common-black rounded-3xl shadow-sm dark:shadow-2xl
                    lg:w-1/2">
                        {/* Sales Floor with Logo */}
                        <header className="flex gap-2 text-3xl font-bold pb-5">
                            <img className="w-9 px-1 bg-violet-500 rounded-xl" src="/images/sales_floor_white.svg" alt="Sales Floor logo" />Sales Floor
                        </header>

                        {/* Graph */}
                        <Graph />
                    </section>



                    {/* Restock Section */}
                    <section className="items-center p-4 mx-3 bg-gray-50 dark:bg-common-black rounded-3xl shadow-sm dark:shadow-2xl
                    lg:w-1/2">

                        {/* Restock with Logo */}
                        <header className="flex gap-2 text-3xl font-bold pb-5">
                            <img className="w-9 bg-violet-500 rounded-xl" src="/images/stockroom_logo_white.svg" alt="Stockroom Logo" />Restock
                        </header>

                        <div className="flex gap-[30px] items-center">
                            {/* Units selected */}
                            <div className="w-1/3 rounded-3xl bg-white dark:bg-common-black p-5 shadow-sm dark:shadow-2xl text-center
                            lg:w-1/5">
                                <p className="text-violet-500 font-bold text-xl">0</p>
                                <p className="text-violet-500">Units</p>
                                <h3>Selected</h3>
                            </div>

                            {/* Stockroom Link */}
                            <div className="flex justify-center items-center text-fuchsia-500 font-bold bg-white dark:bg-common-black 
                        rounded-3xl p-5 cursor-pointer hover:bg-fuchsia-500 hover:text-white dark:hover:bg-fuchsia-500 shadow-sm dark:shadow-2xl
                        lg:justify-around">
                                <p>Enter Stockroom Inventory →</p>
                                <img className="w-1/4 lg:w-1/12" src="/images/stockroom_logo.svg" alt="" />
                            </div>
                        </div>
                    </section>



                </div>
            </main>


        </>
    );
}

export default Home;