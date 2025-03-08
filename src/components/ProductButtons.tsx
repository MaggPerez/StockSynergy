import React from 'react';

interface ProductButtonsProps {
    categoryType: string;
    onClick: () => void;  // onClick is a function that doesn't return anything
}

function ProductButtons({ categoryType, onClick }: ProductButtonsProps): JSX.Element {
    return (
        <button onClick={onClick} className="bg-violet-600 text-white p-2 rounded-2xl">
            {categoryType}
        </button>
    );
}

export default ProductButtons;