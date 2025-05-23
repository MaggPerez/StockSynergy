import { useState, useEffect } from "react"
import { getNotOnFloorNum } from "../components/ProductList";
import { generateSales } from "../script";

export default function Dashboard() {
    let current_sales = generateSales();

    const [NOF, setNOF] = useState<number | string>("Loading");
    useEffect(() => {

        async function fetchNOF() {
            setNOF(await getNotOnFloorNum());
        }
        fetchNOF();
    }, [])

    const stats = [
        {
            //Current Sales
            value: `$${current_sales}`,
            label: "Sales Generated",
            sublabel: "Today",
            color: "violet",
            bgColor: "bg-violet-100 dark:bg-violet-900",
            textColor: "text-violet-600 dark:text-violet-400",
            icon: "/images/latest_activity_white.svg"
        },
        {
            //Not on Floor
            value: NOF,
            label: "Units Not on Floor",
            sublabel: "Need Restocking",
            color: "orange",
            bgColor: "bg-orange-100 dark:bg-orange-900",
            textColor: "text-orange-600 dark:text-orange-400",
            icon: "/images/restock-icon.svg"
        },
        {
            //Previous Not on Floor
            value: "26",
            label: "Units Previously",
            sublabel: "Last Period",
            color: "blue",
            bgColor: "bg-blue-100 dark:bg-blue-900",
            textColor: "text-blue-600 dark:text-blue-400",
            icon: "/images/latest_activity_white.svg"
        },
        {
            //Sales floor units
            value: "10,742",
            label: "Sales Floor Units",
            sublabel: "Currently Available",
            color: "green",
            bgColor: "bg-green-100 dark:bg-green-900",
            textColor: "text-green-600 dark:text-green-400",
            icon: "/images/sales_floor_white.svg"
        }
    ]


    return (
        <div className="w-full lg:mx-4">
            {/* Header */}

            <div className="mb-6">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 
                    bg-violet-100 dark:bg-violet-900 rounded-xl">

                        {/* Logo */}
                        <img src="/images/latest_activity_white.svg" alt="Latest activity logo" className="w-5 h-5 invert dark:invert-0" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Latest Activity</h2>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700 hover:shadow-md transition-all duration-200 hover:border-gray-200 dark:hover:border-zinc-600">
                        {/* Icon */}
                        <div className={`flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-xl mb-4`}>
                            <img src={stat.icon} className="w-6 h-6 invert" alt={stat.label} />
                        </div>

                        {/* Value */}
                        <div className="mb-2">
                            <p className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</p>
                        </div>

                        {/* Labels */}
                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white text-sm">{stat.label}</p>

                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.sublabel}</p>
                        </div>

                        {/* Loading indicator for NOF */}
                        {stat.value === "Loading" && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-zinc-800 rounded-2xl">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violate-600"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Quick Insights */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Sales Trend */}
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-violet-200 dark:border-violet-800">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                        <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Sales Trend</span>
                    </div>
                    <p className="text-xs text-violet-600 dark:text-violet-400 mt-1">
                        {current_sales > 1000 ? "Strong performance today" : "Steady growth"}
                    </p>
                </div>

                {/* Restock Alert */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Restock Alert</span>
                    </div>
                    <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                        {NOF !== "Loading" && typeof NOF === "number" && NOF > 20 ? "High priority items" : "Normal levels"}
                    </p>
                </div>

                {/* Floor Status */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-green-700">Floor Status</span>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">Well stocked</p>
                </div>
            </div>
        </div>







    );
}