import { useEffect } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Graph from "../components/Graph";
import { setDocumentTitle } from "../script.js"
import PageHeader from "../components/PageHeader";
import InventorySidebar from '../components/InventorySidebar'


const Home: React.FC = () => {
    setDocumentTitle("Home");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <main className="bg-gray-50 dark:bg-common-black text-black dark:text-white min-h-screen lg:pl-56 duration-300 transition-all">
                {/* Sidebar */}
                <InventorySidebar />


                {/* Title of current page */}
                <div>
                    <PageHeader title="Home" />
                    <p className="text-gray-600 dark:text-gray-400 mt-2 pl-4">Welcome back! Here's what's happening with your inventory today.</p>
                </div>


                {/* Dashboard having latest activities */}
                <div className="px-6 mb-8">
                    <Dashboard />
                </div>



                {/* Quick Actions */}
                <div className="px-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Quick Actions</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

                        {/* Analytics link */}
                        <Link to="/analytics" className="group">
                            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-zinc-700 hover:border-violet-200 dark:hover:border-violet-600">
                                <div className="flex items-center justify-center w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-xl mb-4 group-hover:bg-violet-200 dark:group-hover:bg-violet-800 transition-colors">
                                    <img src="/images/latest_activity_white.svg" className="w-6 h-6 invert dark:invert-0" alt="Analytics" />
                                </div>
                                <h3 className="font-semibold text-gray-800 dark:text-white">Analytics</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">View Insights</p>
                            </div>
                        </Link>


                        {/* Sales floor link */}
                        <Link to="/salesFloor" className="group">
                            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-zinc-700 hover:border-violet-200 dark:hover:border-violet-600">
                                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                                    <img src="/images/sales_floor_white.svg" className="w-6 h-6 invert dark:invert-0" alt="Sales Floor" />
                                </div>
                                <h3 className="font-semibold text-gray-800 dark:text-white">Sales Floor</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage sales</p>
                            </div>
                        </Link>


                        {/* Stockroom link */}
                        <Link to="/stockroom" className="group">
                            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-zinc-700 hover:border-violet-200 dark:hover:border-violet-600">
                                <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                                    <img src="/images/stockroom_logo_white.svg" className="w-6 h-6 invert dark:invert-0" alt="Stockroom" />
                                </div>
                                <h3 className="font-semibold text-gray-800 dark:text-white">Stockroom</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Check inventory</p>
                            </div>
                        </Link>


                        {/* Restock */}
                        <Link to="/restock" className="group">
                            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-zinc-700 hover:border-violet-200 dark:hover:border-violet-600">
                                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                                    <img src="/images/package_open_icon.svg" className="w-6 h-6 invert dark:invert-0" alt="Restock" />
                                </div>
                                <h3 className="font-semibold text-gray-800 dark:text-white">Restock</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Replenish items</p>
                            </div>
                        </Link>

                    </div>
                </div>

                {/* Main content Grid */}
                <div className="px-6 pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Sales performance */}
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex items-center justify-center w-10 h-10 bg-violet-100 dark:bg-violet-900 rounded-xl">
                                        <img src="/images/sales_floor_white.svg" className="w-5 h-5 invert dark:invert-0" alt="Sales" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Sales Performance</h3>
                                </div>
                                <Graph chart="SalesFloor" />
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="space-y-6">

                            {/* Stockroom overview */}
                            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-900 rounded-xl">
                                        <img src="/images/stockroom_logo_white.svg" className="w-5 h-5 invert dark:invert-0" alt="Stockroom" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Stockroom</h3>
                                </div>
                                
                                <div className="text-center mb-4">
                                    <p className="text-3xl font-bold text-violet-600">12,831</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Total Units</p>
                                </div>

                                {/* Stockroom link */}
                                <Link to='/stockroom' className="block">
                                    <div className="bg-violet-50 dark:bg-violet-900/20 hover:bg-violet-100 dark:hover:bg-violet-900/40 p-4 rounded-xl transition-colors cursor-pointer border border-violet-200 dark:border-violet-800">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-violet-700 dark:text-violet-300">View Inventory</span>

                                            {/* Right arrow icon */}
                                            <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Recent updates */}
                            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-xl">
                                        <img src="/images/news_logo_white.svg" className="w-5 h-5 invert dark:invert-0" alt="News" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Recent Updates</h3>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-zinc-700 rounded-lg">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm">New products incoming</span>
                                    </div>
                                    <div className="space-y-2 ml-5">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">• Sunglasses</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">• Summer Shorts</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">• T-Shirts</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">• Denim Jeans</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </main>
        </>
    );
};

export default Home;