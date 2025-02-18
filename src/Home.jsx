
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import DarkModeToggle from "./components/DarkModeToggle";


function Home() {
    let name = localStorage.getItem("username");

useEffect(() => {
            document.body.style.background = "#1a1a1a"
        })

    return (
        <>
            <div className="bg-violet-50 dark:bg-common-black text-black dark:text-white h-screen lg:pl-56 lg:duration-300">
                <Sidebar />
                

                <h1 className="text-3xl font-bold text-violet-600 text-center">
                    Stock Synergy is currently under development. Stay tuned
                </h1>

                <Dashboard />

                <hr className="border-violet-600 border-2 mx-3" />



            </div>

        </>
    );
}

export default Home;