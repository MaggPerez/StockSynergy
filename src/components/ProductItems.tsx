import React from 'react'
import { useState, useEffect } from 'react'
import { Product, getAllMensTees, getProducts, getNotOnFloorSection } from '../productController'
import Item from './Item';
import { ClipLoader } from 'react-spinners';


interface ProductListProps {
    categoryType: string;
}


function ProductItems({ categoryType }: ProductListProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [NOF, setNOF] = useState<number>(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //Fetching all data from database
        async function fetchData() {

            //Starts loading animation
            setLoading(true)
            try {
                //Grabbing products based on what section the user selects along with its Not on Floor data.
                //Otherwise returns empty array
                setProducts((await getProducts(categoryType)) || []);
                const nofData = await getNotOnFloorSection(categoryType);

                //Checking to see if the NOF value is an array and is not empty. Otherwise nof value is set to 0
                const nofValue = Array.isArray(nofData) && nofData.length > 0 ? nofData[0].sum : 0;

                //Setting NOF tracker
                setNOF(nofValue);
                
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
            finally {
                //Disables loading animation once done
                setLoading(false)
            }
        }

        fetchData();
    }, [categoryType])


    
    //Loading animation runs first while fetching data
    if(loading){
        return (
            <div className="flex justify-center items-center py-8">
            <ClipLoader color="#7c3aed" size={40} />
        </div>
        )
    }

    //If a category has no products or Not on Floor is 0, then nothing needs to be restocked
    return products.length === 0 || NOF === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 px-4">
            <div className="text-center bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 max-w-md">

            {/* Creates checkmark icon */}
                <div className="flex justify-center mb-3">
                    <svg className="w-12 h-12 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                {/* Shows message that all itesm are stocked up */}
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">All Stocked Up!</h3>
                <p className="text-green-600 dark:text-green-400">No items need to be restocked in this category.</p>
            </div>
        </div>
    )
    : (
        // Otherwise, a list of products will be shown that are needed to be restocked
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Header Section with Summary */}
            <div className='bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl p-4 sm:p-6 mb-6 border border-violet-200 dark:border-violet-800'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>

                    {/* Header */}
                    <div className='flex items-center gap-3'>
                        <div className='p-2 bg-violet-100 dark:bg-violet-800 rounded-lg'>
                            <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold text-gray-900 dark:text-white'>Inventory Restock</h2>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>Items needed from stockroom to sales floor</p>
                        </div>
                    </div>

                    {/* Display Not on Floor tracker */}
                    <div className='flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700'>
                        <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>Items Not on Floor:</span>
                        <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'>
                            {NOF}
                        </span>
                    </div>

                </div>
            </div>

            {/* Displays all products in Grid format using <Item /> component for styling */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6'>
                {products.map((productItem) => (
                    <Item 
                        key={productItem.style_number}
                        style_number={productItem.style_number}
                        product_name={productItem.product_name} 
                        product_image={productItem.product_image}
                        available_restock={productItem.available_restock} 
                        status={productItem.status} 
                        description={productItem.description} 
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductItems