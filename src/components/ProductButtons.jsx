


function ProductButtons({categoryType, onClick}){
    return(
        <button onClick={onClick} className="bg-violet-600 text-white p-2 rounded-2xl">{categoryType}</button>
    );
}

export default ProductButtons;