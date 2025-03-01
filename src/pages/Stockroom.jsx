import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import DarkModeToggle from "../components/DarkModeToggle";
import Item from "../components/Item";


function Stockroom() {

    return (
        <main className="lg:pl-56 lg:duration-300 text-black dark:text-white">
            <Sidebar />

            <div className="flex justify-between">
                <PageHeader title="Stockroom" />
                <DarkModeToggle />

            </div>

            <div className="flex flex-col gap-10">
                {/* Overview of Not on Floor */}
                <div className="w-full rounded-3xl bg-white dark:bg-common-black p-5 shadow-sm dark:shadow-2xl flex justify-around
                lg:w-1/4">
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
                <Item image={"/stock_images/t_shirt_icon.svg"}
                productName="Happy T-Shirt"
                styleNumber="41MI0V31" 
                description="Plain T-Shirt with smiling Logo"/>

                
            </div>
        </main>
    );
}

export default Stockroom;