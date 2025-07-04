import { useState, useContext, createContext, ReactNode } from "react";
import Item from "./Item";
import Populate from "../populate";
import { Product, moveToSalesFloor } from "../productController";
import { ClipLoader } from "react-spinners";


//Defining type for selecting items
interface SelectedItemsContextType {
    selectedItems: Product[];
    addItem: (item: Product) => void;
    removeItem: (styleNumber: string) => void;
    isSelected: (styleNumber: string) => boolean;
}

// Create a context for selected items
export const SelectedItemsContext = createContext<SelectedItemsContextType | undefined>(undefined);

//Selected Items Provider
export const SelectedItemsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState<Product[]>([]);

    /**
     * Function to add selected items to list
     * @param item 
     */
    const addItem = (item: Product) => {
        setSelectedItems((prevItems) => {
            const exists = prevItems.some(existingItem => existingItem.style_number === item.style_number);
            if (exists) {
                return prevItems
            }
            return [...prevItems, item]
        });
    };

    /**
     * Function to remove selected items from list
     * @param styleNumber 
     */
    const removeItem = (styleNumber: string) => {
        setSelectedItems((prevItems) =>
            prevItems.filter((item) => item.style_number !== styleNumber)
        );
    };

    /**
     * Function that checks if the selected item has already been selected
     * @param styleNumber 
     * @returns 
     */
    const isSelected = (styleNumber: string) => {
        return selectedItems.some((item) => item.style_number === styleNumber);
    };

    return (
        <SelectedItemsContext.Provider value={{ selectedItems, addItem, removeItem, isSelected }}>
            {children}
        </SelectedItemsContext.Provider>
    );
};


/**
 * Function that allows to use the selectedItems contexts
 * @returns context
 */
export const useSelectedItems = () => {
    const context = useContext(SelectedItemsContext);
    if (!context) {
        throw new Error("useSelectedItems must be used within a SelectedItemsProvider");
    }
    return context;
};








function SelectedItems(): JSX.Element {
    const { selectedItems } = useSelectedItems();
    const { onHandleMoveToSalesFloor, loading } = Populate();


    //if the array is empty or has no selected values, it will return "No items selected"
    if (selectedItems.length === 0) {
        return (
            <section className="items-center p-4 mx-3 bg-gray-50 border-2 border-violet-600 dark:bg-common-black rounded-3xl shadow-sm dark:shadow-2xl">
                <h2 className="text-xl font-bold">Selected Items</h2>
                <p className="text-gray-500 dark:text-gray-400">No items selected</p>
            </section>
        );
    }



    return (
        <section className="items-center p-2 mx-3 bg-gray-50 border-2 border-violet-600 dark:bg-common-black rounded-3xl shadow-sm dark:shadow-2xl">
            {/* Button to move to sales floor */}
            <button onClick={() => moveToSalesFloor(selectedItems)} className="bg-blue-600 text-white p-2 m-2 rounded-2xl"
                disabled={loading}>
                {loading ?
                    //If button is clicked, a spin loader animation is played and button is disabled
                    (<p className='flex gap-1'><ClipLoader color='white' size={18} /></p>)
                    :
                    //If button is not clicked, it displays the text to move items to Sales Floor
                    (<p>Move to Sales Floor</p>)}
            </button>


            {/* Displays all selected items and their properties */}
            <div className="flex flex-col gap-5">
                {selectedItems.map((product) => (
                    <Item
                        key={product.style_number}
                        style_number={product.style_number}
                        product_name={product.product_name}
                        product_image={product.product_image}
                        available_restock={product.available_restock}
                        status={product.status}
                        description={product.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default SelectedItems;
