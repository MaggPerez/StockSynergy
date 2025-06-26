import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import { formatNumber, setDocumentTitle } from '../script'; // Assuming this exists based on Login.tsx
import Graph from '../components/Graph';
import { getTotalNotOnFloor } from '../productController';
import { ClipLoader } from 'react-spinners';
import { SidebarLayout } from '../components/SidebarLayout';

const Analytics: React.FC = () => {
    setDocumentTitle("Analytics");

    const [NOF, setNOF] = useState<number>(0);

    //low Stock Items will do the spin animation until it gets Not on Floor numbers
    const lowStockItems = NOF === 0 ? <p className='flex gap-1 items-center'><ClipLoader color='purple' size={28} /></p> : formatNumber(Number(NOF))
        useEffect(() => {
            window.scrollTo(0, 0);
    
            //retrieves units that need to be replenished
            async function fetchNOF() {
                setNOF(await getTotalNotOnFloor());
            }
            fetchNOF();
        }, [])


    return (
        <>
        <SidebarLayout>
            <main>

                {/* Title of current page */}
                <PageHeader title="Analytics" pathTo='/home' chevronName='Home' />

                {/* Analytics Dashboard */}
                <div className="p-4">
                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

                        {/* Total sales */}
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">Total Sales</h3>
                            <p className="text-3xl font-bold text-violet-600">$24,500</p>
                            <p className="text-sm text-green-500">+12% from last month</p>
                        </div>

                        {/* Inventory Value */}
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">Inventory Value</h3>
                            <p className="text-3xl font-bold text-violet-600">$157,200</p>
                            <p className="text-sm text-red-500">-3% from last month</p>
                        </div>

                        {/* Low Stock Items */}
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">Low Stock Items</h3>
                            <p className="text-3xl font-bold text-violet-600">{lowStockItems}</p>
                            <p className="text-sm text-gray-500">Needs attention</p>
                        </div>

                        {/* Orders Pending */}
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">Orders Pending</h3>
                            <p className="text-3xl font-bold text-violet-600">8</p>
                            <p className="text-sm text-gray-500">Processing</p>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="flex flex-col lg:flex-row gap-6 mb-6">
                        {/* Sales Trend Chart */}
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm lg:w-2/3">
                            <header className="flex gap-2 text-xl font-bold pb-5">
                                <img className="w-7 px-1 bg-violet-500 rounded-xl" src="/images/sales_floor_white.svg" alt="chart icon" />
                                Sales Trend
                            </header>

                            {/* Sales Floor Graph */}
                            <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-zinc-700 rounded-lg">
                                <Graph chart="SalesFloor" />
                            </div>
                        </div>

                        {/* Top Products */}
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm lg:w-1/3">
                            <header className="flex gap-2 text-xl font-bold pb-5">
                                <img className="w-7 px-1 bg-violet-500 rounded-xl" src="/stock_images/t_shirt_icon.svg" alt="product icon" />
                                Top Products
                            </header>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center">
                                    <span>T-Shirts</span>
                                    <span className="font-semibold">$5,240</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>Jeans</span>
                                    <span className="font-semibold">$4,130</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>Hoodies</span>
                                    <span className="font-semibold">$3,870</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>Sneakers</span>
                                    <span className="font-semibold">$3,210</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Inventory Analysis */}
                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm mb-6">
                        <header className="flex gap-2 text-xl font-bold pb-5">
                            <img className="w-7 px-1 bg-violet-500 rounded-xl" src="/images/stockroom_logo_white.svg" alt="inventory icon" />
                            Inventory Analysis
                        </header>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-zinc-700 rounded-lg">
                                <p className="text-gray-500">Stock Distribution by Category</p>
                            </div>
                            <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-zinc-700 rounded-lg">
                                <p className="text-gray-500">Inventory Turnover Rate</p>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm">
                        <header className="flex gap-2 text-xl font-bold pb-5">
                            <img className="w-7 px-1 bg-violet-500 rounded-xl" src="/images/latest_activity_white.svg" alt="activity icon" />
                            Recent Activity
                        </header>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">2023-11-15</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Inventory Update</td>
                                        <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                                        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Completed</span></td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">2023-11-14</td>
                                        <td className="px-6 py-4 whitespace-nowrap">New Order Placed</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                                        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">2023-11-13</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Stock Adjustment</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Mike Johnson</td>
                                        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Completed</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

        </SidebarLayout>
        </>
    );
};

export default Analytics;
