import { useState } from "react";
import ProductButtons from "./ProductButtons";
import ProductList from "./ProductList";
import { handlePopulate } from "../populate";


function Products() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (categoryType) => {
        setSelectedProduct(categoryType);
    }

    
    const renderProductContent = () => {
        switch (selectedProduct) {
            case 'M_Tees':
                return <div>
                    <h2 className="text-xl font-bold pl-4 pt-2">Men's T-Shirts</h2>
                    <ProductList categoryType={selectedProduct} />
                </div>;
            case 'M_Shorts':
                return <div className="">
                    <h2 className="text-xl font-bold pl-4 pt-2">Men's Shorts</h2>
                    <ProductList categoryType={selectedProduct} />
                </div>;
            case 'M_Jackets':
                return <div>
                    <h2 className="text-xl font-bold pl-4 pt-2">Men's Jackets</h2>
                    <p className="text-center text-green-700 dark:text-[#00FF7F]">Nothing to be restocked</p>
                </div>
            case 'M_Belts':
                return <div>
                    <h2 className="text-xl font-bold pl-4 pt-2">Men's Belts</h2>
                    <p className="text-center text-green-700 dark:text-[#00FF7F]">Nothing to be restocked</p>
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

            default:
                return <div className="p-4">Select a category to view products</div>
        }
    }


    return (
        <div>
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