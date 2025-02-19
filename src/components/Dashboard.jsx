import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Dashboard() {
    let name = localStorage.getItem('username')
    return (
        <div className="bg-violet-50 dark:bg-common-black">
            {/* <img className="mx-auto w-12 lg:hidden" src="/images/stock_synergy_icon.svg" alt="" />
            <header className="text-black dark:text-white p-3 flex justify-between">
                <h1 className="text-2xl font-bold">Hi {name}!</h1>


                <DarkModeToggle />
                <Link className="font-medium text-violet-600 hover:underline dark:text-violet-500" to="/logout">Log out</Link>
            </header> */}

            {/* Header and Light/Dark mode */}
            <div className="flex">
                <header className="font-bold text-3xl p-3">Lastest Activity</header>
                <DarkModeToggle />
            </div>
                <p className="mr-24">Stock Synergy is currently under development. Stay tuned</p>

            <div className="flex gap-[35px] flex-wrap justify-center text-center items-center pb-10
            lg:justify-evenly">

                {/* Overview of Not on Floor */}
                <div className="w-1/2 rounded-3xl bg-white dark:bg-common-black p-5 shadow-lg dark:shadow-2xl flex justify-around
                lg:w-1/5">
                    <div>
                        <p className="text-violet-500 font-bold text-xl">426</p>
                        <p className="text-violet-500">Units</p>
                        <h3>NOF</h3>
                    </div>
                    <div>
                        <p className="text-violet-500 font-bold text-xl">786</p>
                        <p className="text-violet-500">Units</p>
                        <h3>Previously</h3>
                    </div>


                </div>

                {/* Sales floor units */}
                <div className="w-1/3 rounded-3xl bg-white dark:bg-common-black p-5 shadow-lg dark:shadow-2xl
                lg:w-1/5">
                    <p className="text-violet-500 font-bold text-xl">10,742</p>
                    <p className="text-violet-500">Units</p>
                    <h3>Sales Floor</h3>
                </div>

                {/* Stockroom unit */}
                <div className="w-1/2 rounded-3xl bg-white dark:bg-common-black p-5 shadow-lg dark:shadow-2xl
                lg:w-1/5">
                    <p className="text-violet-500 font-bold text-xl">12,831</p>
                    <p className="text-violet-500">Units</p>
                    <h3>Stockroom</h3>
                </div>

                {/* Units selected */}
                {/* <div className="w-1/3 rounded-3xl bg-white dark:bg-common-black p-5 shadow-2xl
                lg:w-1/5">
                    <p className="text-violet-500 font-bold text-xl">0</p>
                    <p className="text-violet-500">Units</p>
                    <h3>Selected</h3>
                </div> */}



            </div>
        </div>







    );
}