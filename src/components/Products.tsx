import { useState, useEffect } from "react";
import ProductButtons from "./ProductButtons";
import ProductList from "./ProductList";
import { getNotOnFloorNum } from "./ProductList";
import SelectedItems from "./SelectedItems";
import { useSelectedItems } from "./SelectedItems";
import { ClipLoader } from "react-spinners";
import { formatNumber } from "../script";
import ProductItems from "./ProductItems";
import { getTotalNotOnFloor } from "../productController";



// Define a type for the selected product category
type CategoryType = 'M_Tees' | 'M_Shorts' | 'M_Jackets' | 'M_Belts' | 'M_Sweaters' | 'M_Sandals' |
    'selected' | null;



function Products() {
    // Use a type for selectedProduct to ensure it's one of the CategoryType or null
    const [selectedProduct, setSelectedProduct] = useState<CategoryType>(null);

    //Will be used as a counter to keep track of how many items are selected
    const { selectedItems } = useSelectedItems();

    //Setting the Not on Floor tracker
    const [NOF, setNOF] = useState<number>(0);

    //Formatting current Not on Floor tracker
    const current_NOF = NOF === 0 ? <p className='flex gap-1 items-center'><ClipLoader color='purple' size={28} /></p> : formatNumber((Number(NOF)))
    useEffect(() => {
        window.scrollTo(0, 0);

        async function fetchNOF() {
            setNOF(await getTotalNotOnFloor());
        }
        fetchNOF();
    }, [])


    const handleProductClick = (categoryType: CategoryType) => {
        setSelectedProduct(categoryType);
    }

    const renderProductContent = () => {
        switch (selectedProduct) {
            case 'M_Tees':
                return <div>
                    <h2 className="text-xl font-bold pl-4 pt-2">Men's T-Shirts</h2>
                    <ProductItems categoryType={selectedProduct} />
                </div>;
            case 'M_Shorts':
                return <div>
                    <h2 className="text-xl font-bold pl-4 pt-2">Men's Shorts</h2>
                    <ProductItems categoryType={selectedProduct} />
                </div>;
            case 'M_Jackets':
                return <div>
                    <h2 className="text-xl font-bold pl-4 pt-2">Men's Jackets</h2>
                    <ProductItems categoryType={selectedProduct} />
                </div>
            case 'M_Belts':
                return <div>
                    <h2 className="text-xl font-bold pl-4 pt-2">Men's Belts</h2>
                    <ProductItems categoryType={selectedProduct} />
                </div>
            case 'M_Sweaters':
                return <div>
                    <h2 className="text-xl font-bold pl-4 pt-2">Men's Sweaters</h2>
                    <p className="text-center text-green-700 dark:text-[#00FF7F]">Nothing to be restocked</p>
                </div>
            case 'M_Sandals':
                return <div>
                    <h2 className="text-xl font-bold pl-4 pt-2">Men's Sandals</h2>
                    <p className="text-center text-green-700 dark:text-[#00FF7F]">Nothing to be restocked</p>
                </div>
            case 'selected':
                return <div>
                    <h2 className="text-xl font-bold pl-4 pt-2">Selected Items</h2>
                    <SelectedItems />
                </div>

            default:
                return <div className="p-4">Select a category to view products</div>
        }
    }

    return (
        <div>
            {/* Overview of Not on Floor */}
            <div className="px-4 py-3 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 max-w-4xl mx-auto">

                    {/* Current NOF Card */}
                    <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl p-4 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm opacity-90">Not on Floor</p>
                                <p className="text-2xl font-bold">{current_NOF}</p>
                                <p className="text-xs opacity-75">Current Units</p>
                            </div>

                            {/* Icon */}
                            <div className="bg-white/20 rounded-full p-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                    <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Items Selected Card */}
                    <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 border border-gray-200 dark:border-zinc-700 shadow-sm hover:shadow-md hover:border-violet-200 dark:hover:border-violet-600 transition-all duration-200 cursor-pointer"
                        onClick={() => handleProductClick('selected')}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Units Selected</p>
                                <p className="text-2xl font-bold text-gray-800 dark:text-white">{selectedItems.length}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-500">Click to view</p>
                            </div>

                            {/* Icon */}
                            <div className="bg-gray-100 dark:bg-zinc-700 rounded-full p-2 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/30 transition-colors">
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm8.707 5.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            {/* Product Section that will display a list of products needed to be restocked */}
            <hr className="border-gray-200 dark:border-gray-600" />
            <div className="flex pl-2 py-3 gap-5 overflow-x-auto">
                <ProductButtons categoryType='M_Tees' onClick={() => handleProductClick('M_Tees')} />
                <ProductButtons categoryType='M_Shorts' onClick={() => handleProductClick('M_Shorts')} />
                <ProductButtons categoryType='M_Jackets' onClick={() => handleProductClick('M_Jackets')} />
                <ProductButtons categoryType='M_Belts' onClick={() => handleProductClick('M_Belts')} />
                <ProductButtons categoryType='M_Sweaters' onClick={() => handleProductClick('M_Sweaters')} />
                <ProductButtons categoryType='M_Sandals' onClick={() => handleProductClick('M_Sandals')} />

            </div>
            <hr className="border-gray-200 dark:border-gray-600" />
            {renderProductContent()}

        </div>
    );
}

export default Products;