import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Dashboard() {
    let name = localStorage.getItem('username')
    return (
        <div>
            <header className="text-black dark:text-white p-3 flex justify-between">
                <h1 className="text-3xl font-bold">Hi {name}!</h1>
                <DarkModeToggle />
                <Link className="font-medium text-violet-600 hover:underline dark:text-violet-500" to="/logout">Log out</Link>
            </header>

            <hr />
            <header className="font-bold text-3xl p-3">Lastest Activity</header>

            <div className="flex gap-[30px] flex-wrap justify-center text-center items-center pb-10">

                {/* Overview of Not on Floor */}
                <div className="w-1/2 rounded-3xl bg-white dark:bg-common-black p-5 shadow-xl flex justify-around">
                    <div>
                        <p className="text-fuchsia-400 font-bold text-xl">426</p>
                        <p className="text-fuchsia-400">Units</p>
                        <h3>NOF</h3>
                    </div>
                    <div>
                        <p className="text-fuchsia-400 font-bold text-xl">786</p>
                        <p className="text-fuchsia-400">Units</p>
                        <h3>Previously</h3>
                    </div>


                </div>

                <div className="w-1/4 rounded-3xl bg-white dark:bg-common-black p-5 shadow-2xl">
                    <p className="text-fuchsia-400 font-bold text-xl">10,742</p>
                    <p className="text-fuchsia-400">Units</p>
                    <h3>Sales Floor</h3>
                </div>

                <div className="w-1/4 rounded-3xl bg-white dark:bg-common-black p-5 shadow-2xl">
                    <p className="text-fuchsia-400 font-bold text-xl">12,831</p>
                    <p className="text-fuchsia-400">Units</p>
                    <h3>Stockroom</h3>
                </div>

                <div className="w-1/4 rounded-3xl bg-white dark:bg-common-black p-5 shadow-2xl">
                    <p className="text-fuchsia-400 font-bold text-xl">0</p>
                    <p className="text-fuchsia-400">Units</p>
                    <h3>Selected</h3>
                </div>



            </div>
        </div>







    );
}