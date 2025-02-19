
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import DarkModeToggle from "./components/DarkModeToggle";
import Graph from "./components/Graph";


function Home() {
    let name = localStorage.getItem("username");

    useEffect(() => {
        document.body.style.background = "#1a1a1a"
    })

    return (
        <>
            <main className="bg-white dark:bg-common-black text-black dark:text-white h-[200vh] lg:pl-56 lg:duration-300">
                <Sidebar />


                {/* Dashboard having latest activities */}
                <Dashboard />

                <hr className="border-violet-600 border-2 mx-3 mb-5" />

                {/* Main Div */}
                <div className="flex gap-[35px] flex-col">

                    {/* Restock Section */}
                    <section className="items-center p-4 mx-3 bg-gray-50 dark:bg-common-black rounded-3xl shadow-lg dark:shadow-2xl
                lg:w-1/2">

                        {/* Restock with Logo */}
                        <header className="flex gap-2 text-3xl font-bold pb-5">
                            <img className="w-9 pb-1 px-1 bg-violet-500 rounded-xl" src="/images/restock-icon.svg" alt="restock logo" />Restock
                        </header>

                        <div className="flex gap-[30px] items-center">
                            {/* Units selected */}
                            <div className="w-1/3 rounded-3xl bg-white dark:bg-common-black p-5 shadow-lg dark:shadow-2xl text-center
                            lg:w-1/5">
                                <p className="text-violet-500 font-bold text-xl">0</p>
                                <p className="text-violet-500">Units</p>
                                <h3>Selected</h3>
                            </div>

                            {/* Stockroom Link */}
                            <div className="flex justify-center items-center text-fuchsia-500 font-bold bg-white dark:bg-common-black 
                        rounded-3xl p-5 cursor-pointer hover:bg-fuchsia-500 hover:text-white dark:hover:bg-fuchsia-500 shadow-lg dark:shadow-2xl
                        lg:justify-around">
                                <p>Enter Stockroom Inventory →</p>
                                <img className="w-1/4 lg:w-1/12" src="/images/stockroom_logo.svg" alt="" />
                            </div>
                        </div>
                    </section>


                    {/* Sales Floor */}
                    <section className="items-center p-4 mx-3 bg-gray-50 dark:bg-common-black rounded-3xl shadow-lg dark:shadow-2xl
                    lg:w-full">
                        {/* Sales Floor with Logo */}
                        <header className="flex gap-2 text-3xl font-bold pb-5">
                            <img className="w-9 pb-1 px-1 bg-violet-500 rounded-xl" src="/images/sales_floor.svg" alt="Sales Floor logo" />Sales Floor
                        </header>

                        {/* Graph */}
                        <Graph />
                    </section>
                </div>


            </main>


        </>
    );
}

export default Home;