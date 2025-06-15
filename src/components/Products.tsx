import { useState, useEffect } from "react";
import ProductButtons from "./ProductButtons";
import ProductList from "./ProductList";
import { getNotOnFloorNum } from "./ProductList";
import SelectedItems from "./SelectedItems";
import { useSelectedItems } from "./SelectedItems";
import { ClipLoader } from "react-spinners";
import { formatNumber } from "../script";
import ProductItems from "./ProductItems";



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
            setNOF(await getNotOnFloorNum());
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
            <div className="flex gap-10 py-3 lg:justify-center mx-10">
                <div className="w-full rounded-3xl bg-white dark:bg-zinc-800 p-5 shadow-sm dark:shadow-2xl flex justify-around
                text-center lg:w-1/4">
                    <div>
                        <p className="text-violet-500 font-bold text-xl">{current_NOF}</p>
                        <p className="text-violet-500">Units</p>
                        <h3>NOF</h3>
                    </div>
                    <div>
                        <p className="text-violet-500 font-bold text-xl">26</p>
                        <p className="text-violet-500">Units</p>
                        <h3>Previously</h3>
                    </div>
                </div>

            </div>

            {/* Selected Section where it's the only <ProductButton /> to have a counter of selected items */}
            <div className="flex justify-center items-center pb-3">
                <ProductButtons categoryType='Selected' selectedItemsCounter={selectedItems.length}
                    showCounter={true} onClick={() => handleProductClick('selected')} />
            </div>



            {/* Product List */}
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