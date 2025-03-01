import { useState, useEffect } from "react";
import Item from "./Item.jsx";
import {collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../firebase.js"


/**
 * Function to get products in the collection id
 * @returns all products within the collection id
 */
async function getProducts() {
    const productsCol = collection(firestoreDB, "products");
    const productSnapshot = await getDocs(productsCol);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;
}


function ProductList(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        window.scrollTo(0,0);
        async function fetchData() {
            const data = await getProducts();
            setProducts(data);
        }
        fetchData();
    }, []);

    return(
        <div className="flex flex-col gap-5">
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