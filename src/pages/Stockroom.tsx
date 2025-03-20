import PageHeader from "../components/PageHeader";
import { useEffect, useState } from "react";
import { getNotOnFloorNum } from "../components/ProductList";
import InventorySidebar from "../components/InventorySidebar";
import { setDocumentTitle } from "../script";
import { Link } from "react-router-dom";
import Graph from "../components/Graph";


function Stockroom() {
    setDocumentTitle("Stockroom");
    const [NOF, setNOF] = useState<number | string>("Loading");
    useEffect(() => {
        window.scrollTo(0, 0);

        async function fetchNOF() {
            setNOF(await getNotOnFloorNum());
        }
        fetchNOF();
    }, [])

    let progress;
    if(typeof NOF === 'number'){
        progress = (NOF / 100) * 100;
    }
    else{
        progress = "Loading"
    }

    return (
        <main className="bg-gray-50 dark:bg-common-black text-black dark:text-white h-[130vh] lg:pl-56 lg:duration-300">
            {/* Sidebar */}
            <InventorySidebar />

            {/* Page header */}
            <div className="flex justify-betwee pb-5">
                <PageHeader title="Stockroom" pathTo="/home" />
            </div>


            {/* containter for all sections */}
            <div className="flex flex-col gap-10">
                {/* Overview of Not on Floor */}
                <section className="flex flex-col gap-10">
                    <div className="w-full rounded-3xl bg-white dark:bg-common-black p-5 shadow-sm dark:shadow-2xl flex justify-around
                    text-center lg:w-1/4">
                        <div>
                            <p className="text-violet-500 font-bold text-xl">{NOF}</p>
                            <p className="text-violet-500">Units</p>
                            <h3>NOF</h3>
                        </div>
                        <div>
                            <p className="text-violet-500 font-bold text-xl">26</p>
                            <p className="text-violet-500">Units</p>
                            <h3>Previously</h3>
                        </div>
                    </div>
                </section>

                {/* Analytics */}
                <section className="items-center p-4 mx-3 bg-white dark:bg-common-black rounded-3xl shadow-sm dark:shadow-2xl lg:w-1/2">
                    {/* Stockroom with Logo */}
                    <header className="flex gap-2 text-3xl font-bold pb-5">
                        <img className="w-9 bg-violet-500 rounded-xl" src="/images/stockroom_logo_white.svg" alt="Stockroom Logo" />Analytics
                    </header>

                    <div className="flex flex-col [&>*]:bg-gray-100 dark:[&>*]:bg-gray-800 [&>*]:p-6 gap-5">
                        <div className="rounded-xl">
                            <h3 className="text-xl font-semibold mb-3">Stockroom Efficiency</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                    <p className="text-sm text-gray-500">Average Processing Time</p>
                                    <p className="text-2xl font-bold text-violet-600">24 min</p>
                                </div>
                                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                    <p className="text-sm text-gray-500">Restock Completion Rate</p>
                                    <p className="text-2xl font-bold text-violet-600">{progress}%</p>
                                </div>
                                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                    <p className="text-sm text-gray-500">Items Processed Today</p>
                                    <p className="text-2xl font-bold text-violet-600">0</p>
                                </div>
                                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                    <p className="text-sm text-gray-500">Pending Restocks</p>
                                    <p className="text-2xl font-bold text-violet-600">17</p>
                                </div>
                            </div>
                        </div>

                        {/* stockroom vs sales floor */}
                        <div className="rounded-xl">
                            <h3 className="text-xl font-semibold mb-3">Stockroom vs Sales Floor</h3>
                            <div className=" bg-white dark:bg-gray-700 rounded-lg flex flex-col items-center justify-center">
                                <Graph chart="stockroom" />
                                <Graph chart="SalesFloor" />
                            </div>
                        </div>
                    </div>
                </section>



                {/* Enter Restock Page */}
                <section className="items-center p-4 mx-3 bg-white dark:bg-common-black rounded-3xl shadow-sm dark:shadow-2xl py-5 lg:w-1/2">
                    {/* Stockroom with Logo */}
                    <header className="flex gap-2 text-3xl font-bold pb-5">
                        <img className="w-9 bg-violet-500 rounded-xl" src="/images/stockroom_logo_white.svg" alt="Stockroom Logo" />Restock Zone
                    </header>

                    <div className="flex gap-[30px] items-center ">
                        {/* Stockroom Link */}
                        <Link to='/restock' className="w-full">
                            <div className="flex justify-center items-center text-fuchsia-500 font-bold bg-white dark:bg-common-black 
                                rounded-3xl p-5 cursor-pointer hover:bg-fuchsia-500 hover:text-white dark:hover:bg-fuchsia-500 shadow-sm dark:shadow-2xl
                                lg:justify-around">
                                <p>Restock Products →</p>
                                <img className="w-10 lg:w-1/12" src="/images/stockroom_logo.svg" alt="" />
                            </div>
                        </Link>
                    </div>
                </section>


                

            </div>



        </main>
    );
}
export default Stockroom;