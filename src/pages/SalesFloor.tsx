import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";


function SalesFloor() {

    return (
        <main className="lg:pl-56 lg:duration-300">
            <Sidebar />

            <PageHeader title="Sales Floor" />
        </main>
    );
}

export default SalesFloor;