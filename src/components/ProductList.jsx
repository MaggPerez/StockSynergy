import { useState, useEffect } from "react";
import Item from "./Item.jsx";
import {collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../firebase.js"


/**
 * Function to get products based on collection id
 * @param {*} categoryType 
 * @returns all products within the collection id
 */
async function getProducts(categoryType) {
    const productsCol = collection(firestoreDB, categoryType);
    const productSnapshot = await getDocs(productsCol);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;
}

export async function getRestockNumber(categoryType) {
    const productsCol = collection(firestoreDB, categoryType);
    const productSnapshot = await getDocs(productsCol);
    const restockNumber = productSnapshot.docs.map(doc => doc.data().availableRestock);
    const sum = restockNumber.reduce((increment, currentValue) => increment + currentValue, 0);
    return sum;
}

/**
 * Function that takes category name (e.g M_Tee or M_Shorts) and fetches its data from firebase
 * @param {name of category} param0 
 * @returns data based on the category type
 */
function ProductList({categoryType}){
    const [products, setProducts] = useState([]);
    const [restockNum, setRestockNum] = useState("Loading...");

    //fetches firebase docs
    useEffect(() => {
        async function fetchData() {
            const data = await getProducts(categoryType);
            const dataVal = await getRestockNumber(categoryType);
            setProducts(data);
            setRestockNum(dataVal);
        }
        fetchData();
    }, [categoryType]);

    return(
        <div className="flex flex-col gap-5">
            <div className="pl-4 flex gap-2">
                <p>Not on Floor:</p>
                <p className="text-green-700 dark:text-[#00FF7F]">{restockNum}</p>
            </div>
            {products.map((product, index) => (
                <Item
                key={index}
                productImage={product.productImage}
                productName={product.productName}
                styleNumber={product.styleNumber}
                description={product.description}
                availableRestock={product.availableRestock}
                 />
            ))}
        </div>
    );
}

export default ProductList;