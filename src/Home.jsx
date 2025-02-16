
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";


function Home() {
    let name = localStorage.getItem("username");



    return (
        <>
            <div className="bg-white text-black h-screen lg:pl-56 lg:duration-300">
                <Sidebar />
                <header className="text-black p-3 flex justify-between">
                    <h1 className="text-3xl font-bold">Hi {name}!</h1>
                    <Link className="font-medium text-violet-600 hover:underline dark:text-violet-500" to="/logout">Log out</Link>
                </header>

                <hr />

                <h1 className="text-3xl font-bold text-violet-600 text-center">
                    Mag's NOF is currently under development. Stay tuned
                </h1>

                <Dashboard />



                



            </div>

        </>
    );
}

export default Home;