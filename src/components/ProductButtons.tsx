import React from 'react';

interface ProductButtonsProps {
    categoryType: string; //M_Tees, M_Jackets, etc.
    onClick: () => void;  //onClick helps to open the content after tapping the button.
    selectedItemsCounter?: number; //displays counter of how many items are selected.
    showCounter?: boolean; //boolean to reveal counter or not
}

function ProductButtons({ categoryType, onClick, selectedItemsCounter, showCounter = false }: ProductButtonsProps): JSX.Element {
    const displayContent = showCounter && selectedItemsCounter !== undefined ? `${categoryType}: ${selectedItemsCounter} Unit(s)` : categoryType
    return (
        <button onClick={onClick} className="bg-violet-600 text-white p-2 rounded-2xl">
            {displayContent}
        </button>
    );
}

export default ProductButtons;