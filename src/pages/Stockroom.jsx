import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import DarkModeToggle from "../components/DarkModeToggle";


function Stockroom() {

    return (
        <main className="lg:pl-56 lg:duration-300 text-black dark:text-white">
            <Sidebar />

            <div className="flex justify-between">
                <PageHeader title="Stockroom" />
                <DarkModeToggle />

            </div>

            <div>

            </div>
        </main>
    );
}

export default Stockroom;