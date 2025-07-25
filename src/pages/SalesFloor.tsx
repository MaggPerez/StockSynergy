import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Graph from "../components/Graph";
import { SidebarLayout } from "../components/SidebarLayout";
import SalesFloorDashboard from "../components/UI/SalesFloorDashboard";
import { setDocumentTitle } from "../script";

function SalesFloor() {
    setDocumentTitle("Sales Floor");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <SidebarLayout>
            <main>

                <PageHeader title="Sales Floor" pathTo="/home" chevronName="Home" />

                <SalesFloorDashboard />

                <div className="flex flex-col lg:flex-row gap-5 flex-wrap pt-2">

                    {/* Sales Floor Units */}
                    <section className="p-4 mx-3 bg-white dark:bg-zinc-800 rounded-3xl shadow-sm dark:shadow-2xl lg:w-1/3">

                        {/* inner gray bg */}
                        <header className="flex gap-2 text-3xl font-bold pb-5">
                            <h2>Sales Floor Units</h2>
                        </header>

                        <div className="bg-gray-100 dark:bg-common-black p-2 rounded-3xl">

                            <Graph chart="SalesFloor" />

                        </div>
                    </section>

                    {/* Popular Items */}
                    <section className="p-4 mx-3 bg-white dark:bg-zinc-800 rounded-3xl shadow-sm dark:shadow-2xl lg:w-1/2">
                        <header className="flex gap-2 text-3xl font-bold pb-5">
                            <h2>Popular Items</h2>
                        </header>

                        <div className="w-full max-w-[600px] mx-auto grid grid-cols-3 gap-4 justify-start text-center text-white font-bold
                    ">
                            <div className="bg-blue-500 p-4 rounded-xl"><img src="/stock_images/t_shirt_icon.svg" alt="" />Waffle Tee</div>
                            <div className="bg-blue-500 p-4 rounded-xl"><img src="/stock_images/shorts_icon.svg" alt="" />Giraffe Shorts</div>
                            <div className="bg-blue-500 p-4 rounded-xl"><img src="/stock_images/t_shirt_icon.svg" alt="" />Happy T-Shirt</div>
                        </div>
                    </section>

                </div>
            </main>
        </SidebarLayout>
    );
}

export default SalesFloor;