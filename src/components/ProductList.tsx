import { useState, useEffect } from "react";
import Item from "./Item";
import { getDocs, collection, QuerySnapshot, DocumentData } from "firebase/firestore";
import { firestoreDB } from "../firebase";
import { formatNumber } from "../script";

// Define the type for a Product
interface Product {
    productImage: string;
    productName: string;
    styleNumber: string;
    description: string;
    availableRestock: number;
}

/**
 * Function to get products based on collection id
 * @param categoryType The category identifier
 * @returns all products within the collection id
 */
async function getProducts(categoryType: string): Promise<Product[]> {
    const productsCol = collection(firestoreDB, categoryType);
    const productSnapshot = await getDocs(productsCol);
    const productList: Product[] = productSnapshot.docs.filter((doc) => doc.data().status !== "Sales Floor").map((doc) => doc.data() as Product);
    return productList;
}

/**
 * Function to get the restock number for a category
 * @param categoryType The category identifier
 * @returns the total restock number for all products
 */
export async function getRestockNumber(categoryType: string): Promise<number> {
    const productsCol = collection(firestoreDB, categoryType);
    const productSnapshot = await getDocs(productsCol);
    const restockNumber: number[] = productSnapshot.docs.filter((doc) => doc.data().status !== "Sales Floor").map((doc) => doc.data().availableRestock);
    const sum = restockNumber.reduce((increment, currentValue) => increment + currentValue, 0);
    return sum;
}


/**
 * Function that calculates the total available restock units
 * @returns total value of restockable items 
 */
export async function getNotOnFloorNum() {
    const collectionTable: Record<string, string> = {
        m_tees: "M_Tees",
        m_shorts: "M_Shorts",
        m_jackets: "M_Jackets",
        m_belts: "M_Belts",
    };

    const m_tee_collection = collection(firestoreDB, collectionTable.m_tees);
    const m_shorts_collection = collection(firestoreDB, collectionTable.m_shorts);
    const m_jackets_collection = collection(firestoreDB, collectionTable.m_jackets);
    const m_belts_collection = collection(firestoreDB, collectionTable.m_belts);

    const retrieveM_Tees: QuerySnapshot<DocumentData> = await getDocs(m_tee_collection);
    const retrieveM_Shorts: QuerySnapshot<DocumentData> = await getDocs(m_shorts_collection);
    const retrieveM_Jackets: QuerySnapshot<DocumentData> = await getDocs(m_jackets_collection);
    const retrieveM_Belts: QuerySnapshot<DocumentData> = await getDocs(m_belts_collection);

    const mTeeNOF: number[] = retrieveM_Tees.docs.filter((doc) => doc.data().status !== "Sales Floor").map(doc => doc.data().availableRestock)
    const mShortsNOF: number[] = retrieveM_Shorts.docs.filter((doc) => doc.data().status !== "Sales Floor").map(doc => doc.data().availableRestock)
    const mJacketsNOF: number[] = retrieveM_Jackets.docs.filter((doc) => doc.data().status !== "Sales Floor").map(doc => doc.data().availableRestock)
    const mBeltsNOF: number[] = retrieveM_Belts.docs.filter((doc) => doc.data().status !== "Sales Floor").map(doc => doc.data().availableRestock)

    const NOF = mTeeNOF.reduce((increment, currentValue) => increment + currentValue, 0) +
        mShortsNOF.reduce((increment, currentValue) => increment + currentValue, 0) +
        mJacketsNOF.reduce((increment, currentValue) => increment + currentValue, 0) +
        mBeltsNOF.reduce((increment, currentValue) => increment + currentValue, 0);

    return NOF;
}

/**
 * Function that takes category name (e.g M_Tee or M_Shorts) and fetches its data from firebase
 * @param categoryType The category name
 * @returns data based on the category type
 */
interface ProductListProps {
    categoryType: string;
}



function ProductList({ categoryType }: ProductListProps): JSX.Element {
    const [products, setProducts] = useState<Product[]>([]);  // Typed as an array of Product
    const [restockNum, setRestockNum] = useState<string | number>("Loading...");  // Can be string or number

    // Fetches firebase docs
    useEffect(() => {
        async function fetchData() {
            const data = await getProducts(categoryType);
            const dataVal = await getRestockNumber(categoryType);
            setProducts(data);
            setRestockNum(dataVal);
        }
        fetchData();
    }, [categoryType]);

    return (
        <div className="flex flex-col gap-5">

            {/* If the restock number is 0, then a message is shown that nothing needs to be restock */}
            {restockNum === 0 ? (<p className="text-center text-green-700 dark:text-[#00FF7F]">Nothing to be restocked</p>)
                :
                // If restock number is not 0, then it will show what needs to be restocked.
                (<div className="pl-4 flex gap-2">
                    <p>Not on Floor:</p>
                    <p className="text-green-700 dark:text-[#00FF7F]">{formatNumber(Number(restockNum) || 0)}</p>
                </div>)
            }

            {products.map((product, index) => (
                <Item
                    key={index}
                    productImage={product.productImage}
                    productName={product.productName}
                    styleNumber={product.styleNumber}
                    description={product.description}
                    availableRestock={product.availableRestock}
                    category={categoryType}
                />
            ))}
        </div>
    );
}

export default ProductList;