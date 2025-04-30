import { useEffect } from 'react'
import InventorySidebar from '../components/InventorySidebar'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader';
import { setDocumentTitle } from '../script';
import { PlusCircle } from 'lucide-react';

function AddProduct() {
    setDocumentTitle("Add Product")
    const navigate = useNavigate();
    useEffect(() => {
        //prevents unauthorized users from entering this page
        if (sessionStorage.getItem("isManager") === "false") {
            navigate("/home")
        }
    }, [navigate])

    return (
        <main className='bg-gray-50 dark:bg-common-black text-black dark:text-white min-h-screen lg:pl-56 lg:duration-300'>
            {/* Sidebar */}
            <InventorySidebar />

            {/* Title of page */}
            <PageHeader title="Add Product" />

            <div className='p-4 md:p-6'>

                {/* Outer box styling */}
                <div className='bg-white dark:bg-zinc-800 rounded-xl shadow-sm p-6 max-w-7xl mx-auto'>

                    {/* Form header */}
                    <div className='mb-6 font-bold text-violet-600 dark:text-violet-400'>
                        <h2 className='text-2xl'>Product Information</h2>
                        <p className="text-gray-600 dark:text-gray-300">Fill in the details to add a new product to inventory</p>
                    </div>

                    {/* Product Form */}
                    <form action="" className='space-y-6'>

                        {/* Grid */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                            {/* Product name */}
                            <div>

                                <label htmlFor="productName" className='block mb-2 text-sm font-medium'>
                                    Product Name <span className='text-red-500'>*</span>
                                </label>
                                <input type="text"
                                    id="productName"
                                    name="productName"
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white
                                 dark:bg-zinc-700 text-black dark:text-white"/>
                            </div>

                            {/* Style Number */}
                            <div>

                                <label htmlFor="styleNumber" className='block mb-2 text-sm font-medium'>
                                    Style Number <span className='text-red-500'>*</span>
                                </label>
                                <input type="text"
                                    id="styleNumber"
                                    name="styleNumber"
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white
                                 dark:bg-zinc-700 text-black dark:text-white"/>
                            </div>

                            {/* Category */}
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium">
                                    Category <span className='text-red-500'>*</span>
                                </label>

                                {/* Category Menu */}
                                <select id="category" name="category" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white
                                 dark:bg-zinc-700 text-black dark:text-white" >
                                    <option value="" disabled>-- Choose a Category --</option>
                                    <option value="M_Tees">Men's Tees</option>
                                    <option value="M_Shorts">Men's Shorts</option>
                                    <option value="M_Jackets">Men's Jackets</option>
                                    <option value="M_Belts">Men's Belts</option>
                                </select>
                            </div>

                            {/* Price */}
                            <div>
                                <label htmlFor="price" className='block mb-2 text-sm font-medium'>
                                    Price ($)
                                </label>
                                <input type="number" id='price' name='price' min="0" step="0.01" disabled placeholder='Coming Soon'
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white 
                                    dark:bg-zinc-700 text-black dark:text-white" />
                            </div>

                            {/* Available Restock */}
                            <div>
                                <label htmlFor="availableRestock" className="block mb-2 text-sm font-medium">
                                    Available Restock Quantity <span className='text-red-500'>*</span>
                                </label>
                                <input type="number" id="availableRestock" name='availableRestock' min="0"
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white 
                                    dark:bg-zinc-700 text-black dark:text-white" />
                            </div>

                            {/* Product Image */}
                            <div>
                                <label htmlFor="productImage" className="block mb-2 text-sm font-medium">
                                    Product Image <span className='text-red-500'>*</span>
                                </label>
                                
                                {/* Menu Image */}
                                <select id="category" name="category" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white
                                 dark:bg-zinc-700 text-black dark:text-white" >
                                    <option value="" disabled>-- Choose a Category --</option>
                                    <option value="M_Tees">T-Shirt</option>
                                    <option value="M_Shorts">Shorts</option>
                                    <option value="M_Jackets">Jacket</option>
                                    <option value="M_Belts">Belt</option>
                                </select>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium">
                                Description <span className='text-red-500'>*</span>
                            </label>
                            <textarea name="description" id="description" rows={4} className='w-full p-3 border border-gray-300 rounded-lg bg-white
                                dark:bg-zinc-700 text-black dark:text-white'>
                            </textarea>
                        </div>

                        {/* Submit Button */}
                        <div className='flex justify-end'>
                            <button type="submit" className='px-5 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg
                            font-medium transition-colors duration-300 flex gap-1'>
                                <PlusCircle size={26} strokeWidth={1.5} color='white' /> Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default AddProduct