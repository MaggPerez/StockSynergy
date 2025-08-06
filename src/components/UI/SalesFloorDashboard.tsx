import { useState, useEffect } from "react"
import { getTotalNotOnFloor } from "../../productController";
import { formatNumber, generateSales } from "../../script";
import { ClipLoader } from "react-spinners";
import { getSalesFloorUnits } from "../../productController";

function SalesFloorDashboard() {
    const current_sales = generateSales();
    const rawCurrentSales = current_sales.replace(/,/g, "");
    const salesGenerated = Number(rawCurrentSales);

    //Setting the Not on Floor tracker
    const [NOF, setNOF] = useState<number>(0);

    //Setting Sales Floor Units
    const [salesFloorUnits, setSalesFloorUnits] = useState<number>(0)

    //Formatting current Not on Floor tracker
    const current_NOF = NOF === 0 ? <p className='flex gap-1 items-center'><ClipLoader color='orange' size={28} /></p> : formatNumber((Number(NOF)))
    
    useEffect(() => {

        async function fetchData() {
            setNOF(await getTotalNotOnFloor());
            setSalesFloorUnits(await getSalesFloorUnits())
        }
        fetchData();
    }, [])

    return (
        <div className="px-6 mb-8">

            {/* Dashboard Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                {/* Sales Generated Card */}
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700 hover:shadow-md transition-all duration-200">

                    <div className="flex items-center justify-between mb-4">

                        {/* Square Color Icon + Percentage */}
                        <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl">
                            <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>

                        <span className="text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full font-medium">
                            +12.5%
                        </span>
                    </div>

                    {/* Sales generated and information */}
                    <div>
                        <p className="text-2xl font-bold text-green-600 dark:text-white mb-1">${formatNumber(salesGenerated)}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Sales Generated</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Today's revenue</p>
                    </div>
                </div>

                {/* Sales floor units card */}
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700 hover:shadow-md transition-all duration-200">

                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl">
                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>

                        <span className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full font-medium">
                            Active
                        </span>
                    </div>

                    <div>
                        <p className="text-2xl font-bold text-blue-600 dark:text-white mb-1">{formatNumber(salesFloorUnits)}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Units on Floor</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Available inventory</p>
                    </div>
                </div>

                {/* Not on Floor Card */}
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl">
                            <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>

                        <span className="text-xs text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-full font-medium">
                            Pending
                        </span>
                    </div>

                    <div>
                        <p className="text-2xl font-bold text-orange-600 dark:text-white mb-1">
                            {current_NOF}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Not on Floor</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Awaiting placement</p>
                    </div>

                </div>

                {/* Floor efficiency card */}
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-xl">
                            <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <span className="text-xs text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 px-2 py-1 rounded-full font-medium">
                            Excellent
                        </span>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-violet-600 dark:text-white mb-1">94%</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Floor Efficiency</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Stock utilization</p>
                    </div>
                </div>
            </div>

            {/* Latest Activity Section */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">

                <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-xl">
                        <img src="/images/latest_activity_white.svg" className="w-6 h-6 invert dark:invert-0" alt="Latest Activity" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Latest Activity</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Real-time sales floor insights</p>
                    </div>

                    <div className="ml-auto flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-700 dark:text-green-400 text-sm font-medium">Live</span>
                    </div>

                </div>

                {/* Activity Items */}
                <div className="space-y-4">

                    {/* Sales Completed */}
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-zinc-700/50 rounded-xl">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">

                            <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
                            </svg>

                        </div>

                        <div className="flex-1">
                            <p className="font-medium text-gray-800 dark:text-white">Sale Completed</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Waffle Tee - $24.99</p>
                        </div>

                        <span className="text-xs text-gray-500 dark:text-gray-500">2 min ago</span>
                    </div>

                    {/* Stock Restocked */}
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-zinc-700/50 rounded-xl">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">

                            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4" />
                            </svg>

                        </div>

                        <div className="flex-1">
                            <p className="font-medium text-gray-800 dark:text-white">Stock Restocked</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Happy T-Shirt - 15 units added</p>
                        </div>

                        <span className="text-xs text-gray-500 dark:text-gray-500">5 min ago</span>
                    </div>

                    {/* Low Stock Alert */}
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-zinc-700/50 rounded-xl">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">

                            <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>

                        </div>

                        <div className="flex-1">
                            <p className="font-medium text-gray-800 dark:text-white">Low Stock Alert</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Giraffe Shorts - Only 3 units left</p>
                        </div>

                        <span className="text-xs text-gray-500 dark:text-gray-500">8 min ago</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SalesFloorDashboard