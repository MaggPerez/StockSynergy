import PageHeader from "../components/PageHeader";
import { useEffect, useState } from "react";
import { getNotOnFloorNum } from "../components/ProductList";
import InventorySidebar from "../components/InventorySidebar";
import { setDocumentTitle } from "../script";
import { Link } from "react-router-dom";
import Graph from "../components/Graph";
import { useSelectedItems } from "../components/SelectedItems";

function Stockroom() {
    setDocumentTitle("Stockroom");
    const [NOF, setNOF] = useState<number | string>("Loading");
    const { selectedItems } = useSelectedItems();

    
    
    // Get user role from session storage
    const isManager = sessionStorage.getItem("isManager") === "true";

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
        <main className="bg-gray-50 dark:bg-common-black text-black dark:text-white min-h-screen lg:pl-56 duration-300 transition-all">
            {/* Sidebar */}
            <InventorySidebar />

            {/* Page header */}
            <div>
                <PageHeader title="Stockroom" pathTo="/home" />
                <p className="text-gray-600 dark:text-gray-400 mt-2 pl-4">Manage your stockroom inventory and track restocking activities.</p>
            </div>

            {/* Main Content */}
            <div className="px-3 mb-8">

                {/* Overview Cards */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Inventory Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Not on Floor Card */}
                        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-xl">
                                    <img src="/images/stockroom_logo_white.svg" className="w-6 h-6 invert dark:invert-0" alt="NOF" />
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Units</span>
                            </div>
                            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Not on Floor</h3>
                            <p className="text-2xl font-bold text-violet-600">{NOF}</p>
                        </div>


                        {/* Previously Card */}
                        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Units</span>
                            </div>
                            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Previously</h3>
                            <p className="text-2xl font-bold text-blue-600">26</p>
                        </div>


                        {/* Items Processed Today */}
                        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Today</span>
                            </div>
                            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Items Processed</h3>
                            <p className="text-2xl font-bold text-green-600">0</p>
                        </div>

                        {/* Pending Restocks */}
                        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Pending</span>
                            </div>
                            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Pending Restocks</h3>
                            <p className="text-2xl font-bold text-orange-600">{selectedItems.length || 0}</p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="px-3 mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Quick Actions</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Restock Products */}
                        <Link to="/restock" className="group">
                            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-zinc-700 hover:border-fuchsia-200 dark:hover:border-fuchsia-600">
                                <div className="flex items-center justify-center w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900 rounded-xl mb-4 group-hover:bg-fuchsia-200 dark:group-hover:bg-fuchsia-800 transition-colors">
                                    <img src="/images/stockroom_logo.svg" className="w-6 h-6" alt="Restock" />
                                </div>
                                <h3 className="font-semibold text-gray-800 dark:text-white">Restock Products</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage Inventory</p>
                            </div>
                        </Link>

                        {/* Add Product - Manager Only */}
                        {isManager && (
                            <Link to="/addproduct" className="group">
                                <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-zinc-700 hover:border-emerald-200 dark:hover:border-emerald-600">
                                    <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-xl mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
                                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 dark:text-white">Add Product</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">New Inventory</p>
                                </div>
                            </Link>
                        )}

                        {/* View Analytics */}
                        <Link to="/analytics" className="group">
                            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-zinc-700 hover:border-violet-200 dark:hover:border-violet-600">
                                <div className="flex items-center justify-center w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-xl mb-4 group-hover:bg-violet-200 dark:group-hover:bg-violet-800 transition-colors">
                                    <img src="/images/latest_activity_white.svg" className="w-6 h-6 invert dark:invert-0" alt="Analytics" />
                                </div>
                                <h3 className="font-semibold text-gray-800 dark:text-white">Analytics</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">View Insights</p>
                            </div>
                        </Link>

                        {/* Inventory Report */}
                        <div className="group cursor-pointer pointer-events-none opacity-35">
                            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-zinc-700 hover:border-blue-200 dark:hover:border-blue-600">
                                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-800 dark:text-white">Generate Report (Coming soon)</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Export Data</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Analytics Section */}
                <div className="mb-8">
                    <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700 p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 bg-violet-500 rounded-xl">
                                <img src="/images/stockroom_logo_white.svg" className="w-6 h-6" alt="Analytics" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Stockroom Analytics</h2>
                        </div>

                        <div className="space-y-6">
                            {/* Efficiency Metrics */}
                            <div className="bg-gray-50 dark:bg-zinc-700 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Stockroom Efficiency</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg border border-gray-200 dark:border-zinc-600">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Average Processing Time</p>
                                        <p className="text-2xl font-bold text-violet-600">24 min</p>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg border border-gray-200 dark:border-zinc-600">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Restock Completion Rate</p>
                                        <p className="text-2xl font-bold text-violet-600">{progress}%</p>
                                    </div>
                                                                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg border border-gray-200 dark:border-zinc-600">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Items Processed Today</p>
                                        <p className="text-2xl font-bold text-violet-600">0</p>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg border border-gray-200 dark:border-zinc-600">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Pending Restocks</p>
                                        <p className="text-2xl font-bold text-violet-600">17</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stockroom vs Sales Floor Charts */}
                            <div className="bg-gray-50 dark:bg-zinc-700 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Stockroom vs Sales Floor</h3>
                                <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 border border-gray-200 dark:border-zinc-600">
                                    <div className="flex flex-col items-center justify-center space-y-4">
                                        <div className="w-full">
                                            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2 text-center">Stockroom Inventory</h4>
                                            <Graph chart="stockroom" />
                                        </div>
                                        <div className="w-full">
                                            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2 text-center">Sales Floor Inventory</h4>
                                            <Graph chart="SalesFloor" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="mb-8">
                    <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700 p-6">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Recent Stockroom Activity</h2>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-700 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Product restocked: Nike Air Max</span>
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-700 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Inventory count updated</span>
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">4 hours ago</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-700 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Low stock alert: Adidas Ultraboost</span>
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">6 hours ago</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-700 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">New shipment received</span>
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">1 day ago</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Manager-Only Section - Product Management */}
                {isManager && (
                    <div className="mb-8">
                        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl shadow-sm p-6 text-white">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-20 rounded-xl">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold">Manager Tools</h2>
                            </div>
                            <p className="text-emerald-100 mb-6">Access advanced inventory management features and product controls.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Link to="/addproduct" className="group">
                                    <div className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-200 rounded-xl p-4 border border-white border-opacity-20">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <div>
                                                <h3 className="font-semibold">Add New Product</h3>
                                                <p className="text-sm text-emerald-100">Expand your inventory</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="group cursor-pointer">
                                    <div className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-200 rounded-xl p-4 border border-white border-opacity-20">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <div>
                                                <h3 className="font-semibold">Manage Settings</h3>
                                                <p className="text-sm text-emerald-100">Configure stockroom</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Stockroom;

