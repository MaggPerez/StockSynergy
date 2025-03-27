import { useState, useEffect, createContext } from "react";
import { useSelectedItems } from "./SelectedItems";

interface CheckboxProps {
    product: {
        productImage: string;
        productName: string;
        styleNumber: string;
        description: string;
        availableRestock: number;
    }
}

interface ButtonContextProps{
    onClick?: () => void;
}


function Checkbox({ product }: CheckboxProps): JSX.Element {
    const { addItem, removeItem, isSelected } = useSelectedItems();
    const selected = isSelected(product.styleNumber);

    const handleToggle = () => {
        if(selected){
            removeItem(product.styleNumber);
        }
        else{
            addItem(product);
        }
    }
    

    //figure out how to click an item and it moves to selected region
    
    return (
        <div className="flex gap-2">
            <input type="checkbox" id="some_id" className="relative peer shrink-0
             appearance-none w-4 h-4 border-2 border-blue-500 rounded-sm bg-white mt-1 checked:bg-blue-800 checked:border-0"
             checked={selected}
             onChange={handleToggle} />
            <label  htmlFor="some_id" className="mt-1">Select</label>
            <svg
                className="absolute w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none "
                xmlns="https://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
    );
}

export default Checkbox;