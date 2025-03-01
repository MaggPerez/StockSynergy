import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import DarkModeToggle from "../components/DarkModeToggle";
import ProductList from "../components/ProductList.jsx";


function Stockroom() {

    return (
        <main className="lg:pl-56 lg:duration-300 text-black dark:text-white h-[130vh]">
            <Sidebar />

            <div className="flex justify-between">
                <PageHeader title="Stockroom" />
                <DarkModeToggle />

            </div>

            {/* Overview of Not on Floor */}
            <div className="flex flex-col gap-10">
                <div className="w-full rounded-3xl bg-white dark:bg-common-black p-5 shadow-sm dark:shadow-2xl flex justify-around
                text-center lg:w-1/4">
                    <div>
                        <p className="text-violet-500 font-bold text-xl">521</p>
                        <p className="text-violet-500">Units</p>
                        <h3>NOF</h3>
                    </div>
                    <div>
                        <p className="text-violet-500 font-bold text-xl">426</p>
                        <p className="text-violet-500">Units</p>
                        <h3>Previously</h3>
                    </div>


                </div>

                {/* Displays a list of products from firebase */}
                <ProductList />

                
            </div>
        </main>
    );
}

export default Stockroom;