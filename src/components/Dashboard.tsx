import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import PageHeader from "./PageHeader";


export default function Dashboard() {
    let name = localStorage.getItem('username');

    
    return (
        <div className="bg-gray-50 dark:bg-common-black lg:pt-10">

            {/* Header and Light/Dark mode */}
            {/* <p className="text-center">Stock Synergy is currently under development.</p> */}



            <div className="flex justify-between">
                <header className="flex gap-2 font-bold text-3xl p-4">
                    <img className="w-9 px-1 bg-violet-500 rounded-xl" src="/images/latest_activity_white.svg" alt="latest activity logo" /> Latest Activity
                </header>

                <div className="mr-5">
                    <DarkModeToggle />

                </div>
            </div>

            <div className="flex gap-[35px] flex-wrap justify-center text-center items-center pb-10 px-10
            lg:justify-evenly">

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

                {/* Sales floor units */}
                <div className="w-1/3 rounded-3xl bg-white dark:bg-common-black p-5 shadow-sm dark:shadow-2xl
                lg:w-1/5">
                    <p className="text-violet-500 font-bold text-xl">10,742</p>
                    <p className="text-violet-500">Units</p>
                    <h3>Sales Floor</h3>
                </div>

                {/* Stockroom unit */}
                <div className="w-1/3 rounded-3xl bg-white dark:bg-common-black p-5 shadow-sm dark:shadow-2xl
                lg:w-1/5">
                    <p className="text-violet-500 font-bold text-xl">12,831</p>
                    <p className="text-violet-500">Units</p>
                    <h3>Stockroom</h3>
                </div>




            </div>
        </div>







    );
}