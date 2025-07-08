import React from "react";
import Checkbox from "./Checkbox";
import { Product } from "../productController";

interface ItemProps {
    styleNumber: string;
    productName: string;
    productImage: string;
    availableRestock: number;
    description: string;
    status?: string;
}

function Item({ style_number, product_name, product_image, available_restock, status, description }: Product): JSX.Element {
    const product: Product = {
        style_number: style_number,
        product_name: product_name,
        product_image: product_image,
        available_restock: available_restock,
        status: status,
        description: description
    }

    const getStockStatusColor = (stock: number) => {
        if (stock === 0) return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800';
        if (stock <= 5) return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800';
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800';
    };

    const getStatusColor = (status: string) => {
        switch (status?.toLowerCase()) {
            case 'stockroom':
                return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800';
            case 'sales floor':
                return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800';
        }
    };

    return (
        <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
            {/* Header with Status */}
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="flex-shrink-0">
                            {/* Image Container */}
                            <img 
                                className="w-12 h-12 object-cover rounded-lg border-2 bg-violet-400 border-violet-200 dark:border-violet-700" 
                                src={product_image} 
                                alt={product_name}
                                onError={(e) => {
                                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNCAzMkMyOC40MTgzIDMyIDMyIDI4LjQxODMgMzIgMjRDMzIgMTkuNTgxNyAyOC40MTgzIDE2IDI0IDE2QzE5LjU4MTcgMTYgMTYgMTkuNTgxNyAxNiAyNEMxNiAyOC40MTgzIDE5LjU4MTcgMzIgMjQgMzJaIiBmaWxsPSIjOUM3Q0ZGIi8+CjwvcGFnPgo8L3N2Zz4K';
                                }}
                            />
                        </div>
                        {/* Product Name and Style Number */}
                        <div className="min-w-0 flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{product_name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Style: {style_number}</p>
                        </div>
                    </div>
                    {/* Status */}
                    <div className="flex-shrink-0">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(status || '')}`}>
                            {status}
                        </span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
                {/* Description */}
                <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
                </div>

                {/* Available Restock */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available in Stockroom:</span>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium border ${getStockStatusColor(available_restock)}`}>
                        {available_restock} units
                    </span>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                        <Checkbox product={product} />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Select for restocking</span>
                    </div>
                    <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Details
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Item;