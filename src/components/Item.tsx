import React from "react";
import Checkbox from "./Checkbox";
import { Product } from "../productController";

interface ItemProps {
    styleNumber: string;
    productName: string;
    productImage: string;
    availableRestock: number;
    description: string;
    status?: string;
}

function Item({ style_number, product_name, product_image, available_restock, status, description }: Product): JSX.Element {
    const product: Product = {
        style_number: style_number,
        product_name: product_name,
        product_image: product_image,
        available_restock: available_restock,
        status: status,
        description: description
    }

    return (
        <section
            className="text-black dark:text-white items-center p-4 mx-3 bg-gray-50 border-2 border-violet-600 dark:bg-common-black rounded-3xl shadow-sm dark:shadow-2xl lg:w-1/2"
        >
            <p className="rounded-xl bg-gray-200 w-24 p-0.5 text-center">{status}</p>
            <div className="flex flex-wrap justify-between items-center">
                {/* Item Image with Product Name */}
                <div className="flex items-center gap-5">
                    <img className="w-10 bg-violet-600 rounded-xl" src={product_image} alt={product_image} />
                    <p>{product_name}</p>
                </div>

                {/* Style Number */}
                <div>
                    <h3 className="font-bold">Style Number</h3>
                    <p className="text-right">{style_number}</p>
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
                <h4 className="font-bold text-green-700 dark:text-[#00FF7F]">
                    Available Restock: {available_restock} Unit(s)
                </h4>
                <Checkbox product={product} />
                <a href="#" className="hover:text-violet-600 dark:hover:text-violet-400">
                    View item
                </a>
            </div>
        </section>
    );
}

export default Item;