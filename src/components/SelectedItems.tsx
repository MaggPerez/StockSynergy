import { useState, useContext, createContext, ReactNode } from "react";
import Item from "./Item";
import Populate, {Product} from "../populate";


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

    const addItem = (item: Product) => {
        setSelectedItems((prevItems) => {
            const exists = prevItems.some(existingItem => existingItem.styleNum === item.styleNum);
            if(exists){
                return prevItems
            }
            return [...prevItems, item]
        });
    };

    const removeItem = (styleNumber: string) => {
        setSelectedItems((prevItems) =>
            prevItems.filter((item) => item.styleNum !== styleNumber)
        );
    };

    const isSelected = (styleNumber: string) => {
        return selectedItems.some((item) => item.styleNum === styleNumber);
    };

    return (
        <SelectedItemsContext.Provider value={{ selectedItems, addItem, removeItem, isSelected }}>
            {children}
        </SelectedItemsContext.Provider>
    );
};

export const useSelectedItems = () => {
    const context = useContext(SelectedItemsContext);
    if (!context) {
        throw new Error("useSelectedItems must be used within a SelectedItemsProvider");
    }
    return context;
};








function SelectedItems(): JSX.Element {
    const { selectedItems } = useSelectedItems();
    const {onHandleMoveToSalesFloor} = Populate();


    //if the array is empty or has no selected values
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
            <button onClick={() => onHandleMoveToSalesFloor(selectedItems)}  className="bg-blue-600 text-white p-2 m-2 rounded-2xl">Move to Sales Floor</button>

            {/* Displays all selected items */}
            <div className="flex flex-col gap-5">
                {selectedItems.map((product) => (
                    <Item
                        key={product.styleNum}
                        productImage={product.prodImg}
                        productName={product.prodName}
                        styleNumber={product.styleNum}
                        description={product.des}
                        availableRestock={product.availStock}
                        category={product.category}
                    />
                ))}
            </div>
        </section>
    )
}

export default SelectedItems;
