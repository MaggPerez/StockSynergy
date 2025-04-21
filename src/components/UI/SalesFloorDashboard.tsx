import { useState, useEffect } from "react"
import { getNotOnFloorNum } from "../ProductList";
import { generateSales } from "../../script";

function SalesFloorDashboard() {
    let current_sales = generateSales();

    const [NOF, setNOF] = useState<number | string>("Loading");
    useEffect(() => {

        async function fetchNOF() {
            setNOF(await getNotOnFloorNum());
        }
        fetchNOF();
    }, [])

    return (
        <div className="bg-gray-50 dark:bg-common-black lg:pt-5">

            {/* Latest Activity */}
            <div className="flex justify-between">
                <header className="flex gap-2 font-bold text-3xl p-4">
                    <img className="w-9 px-1 bg-violet-500 rounded-xl" src="/images/latest_activity_white.svg" alt="latest activity logo" /> Latest Activity
                </header>

            </div>

            <div className="flex gap-[35px] overflow-x-auto text-center items-center pb-10 px-10 w-full justify-center
            lg:justify-evenly">

                {/* Overview of current sales */}
                <div className="min-w-[150px] h-[150px] rounded-3xl bg-white dark:bg-zinc-800 p-5 shadow-sm dark:shadow-2xl 
                flex flex-col justify-center items-center lg:w-1/4">
                    <div>
                        <p className="text-violet-500 font-bold text-xl">${current_sales}</p>
                        <p className="text-violet-500">Sales</p>
                        <h3>Generated</h3>
                    </div>
                </div>


                {/* Sales floor units */}
                <div className="min-w-[150px] h-[150px] rounded-3xl bg-white dark:bg-zinc-800 p-5 shadow-sm dark:shadow-2xl 
                flex flex-col justify-center items-center lg:w-1/4">
                    <p className="text-violet-500 font-bold text-xl">10,742</p>
                    <p className="text-violet-500">Units</p>
                    <h3>Sales Floor</h3>
                </div>


            </div>
        </div>







    );
}

export default SalesFloorDashboard