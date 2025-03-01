import Checkbox from "./Checkbox";

/**
 * Takes in product image, product name, style number, description of product, and available restock unit
 * @param {*} param0 
 * @returns 
 */
function Item({ productImage, productName, styleNumber, description, availableRestock }) {
    return (
        <section className="items-center p-4 mx-3 bg-gray-50 border-2 border-violet-600 dark:bg-common-black rounded-3xl shadow-sm dark:shadow-2xl
        lg:w-1/2">

            <div className="flex flex-wrap justify-between items-center">

                {/* Item Image with Product Name */}
                <div className="flex items-center gap-5">
                    <img className="w-10 bg-violet-600 rounded-xl" src={productImage} alt={productImage} />
                    <p>{productName}</p>
                </div>

                {/* Style Number */}
                <div>
                    <h3 className="font-bold">Style Number</h3>
                    <p className="text-right">{styleNumber}</p>
                </div>

            </div>
            {/* Item description */}
            <div className="">
                <div>
                    <h3 className="font-bold">Description</h3>
                    <p className="">{description}</p>

                </div>
            </div>

            {/* Available Restock + View Item */}
            <div className="flex justify-between text-xs pt-2">
                <h4 className="font-bold text-green-700 dark:text-[#00FF7F]">Available Restock: {availableRestock} Unit(s)</h4>
                <Checkbox />
                <a href="#" className="hover:text-violet-600 dark:hover:text-violet-400">View item </a>
            </div>
        </section>
    );
}

export default Item;