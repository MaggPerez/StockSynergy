

/**
 * Thinking about adding this soon
 * @returns 
 */
function Item({ image, productName, styleNumber, description }) {
    return (
        <section className="items-center p-4 mx-3 bg-gray-50 border-2 border-violet-600 dark:bg-common-black rounded-3xl shadow-sm dark:shadow-2xl
        lg:w-1/2">

            <div className='text-gray-500 dark:text-gray-400'>
                <input type="checkbox" className="" />
            </div>

            <div className="flex flex-wrap justify-between items-center">

                {/* Item Image with Product Name */}
                <div className="flex items-center gap-5">
                    <img className="w-10 bg-violet-600 rounded-xl" src={image} alt={image} />
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

            {/* Top header */}
            <div className="flex justify-between text-xs pt-2">
                <h4 className="font-bold text-green-700 dark:text-[#00FF7F]">Available Restock: 1 Unit(s)</h4>
                <p>View item</p>
            </div>
        </section>
    );
}

export default Item;