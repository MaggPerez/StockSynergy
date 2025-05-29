import { setDoc, doc, getDocs, collection, QuerySnapshot, DocumentData, updateDoc } from "firebase/firestore";
import { firestoreDB } from "./firebase";
import jsonData from "./populateProducts.json"
import { useState } from "react";
import { getNotOnFloorNum } from "./components/ProductList";

export interface Product {
    availStock: number;
    des: string;
    prodImg: string;
    prodName: string;
    styleNum: string;
    category: string;
    status: string;
}

function Populate() {
    const [productNameInput, setProductNameInput] = useState<string>("");
    const [styleNumberInput, setStyleNumberInput] = useState<string>("");
    const [categoryInput, setCategoryInput] = useState<string>("");
    const [availableRestockInput, setAvailableRestockInput] = useState<number | string>("");
    const [productImageInput, setProductImageInput] = useState<string>("");
    const [descriptionInput, setDescriptionInput] = useState<string>("");

    const [loading, setLoading] = useState(false);


    /**
     * Function that handles products being inserted to Firestore
     * Checks if categoryInput isn't empty
     * Checks if there isn't an existing style number already being used
     * @param e 
     * @returns success message that a product was inserted
     */
    const handlePopulate = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        setLoading(true);
        e.preventDefault();

        if (categoryInput === "") {
            setLoading(false);
            return alert("Choose a Category")
        }


        //setting a variable to populate products into firebase
        const populateProduct: Product[] = [{
            availStock: Number(availableRestockInput),
            des: descriptionInput,
            prodImg: productImageInput,
            prodName: productNameInput,
            styleNum: styleNumberInput,
            category: categoryInput,
            status: "Stockroom"
        }];

        //Reading through JSON file having product info
        for (const data of populateProduct) {
            const existingStyleNumber = await isStyleNumberUnique(data.styleNum);

            //if there is an existing style number in use, the product will not populate
            if (existingStyleNumber === data.styleNum) {
                setLoading(false);
                return;
            }

            //if there are no existing style numbers, product will get populated to Firebase
            try {
                await setDoc(doc(firestoreDB, data.category, data.styleNum), {
                    availableRestock: data.availStock,
                    description: data.des,
                    productImage: data.prodImg,
                    productName: data.prodName,
                    styleNumber: data.styleNum
                });
                setLoading(false)
                alert("Product Added!")
            } catch (error) {
                console.error("Error adding document: ", error)
            }
        }
    };




    /**
     * Function that gets all style numbers from each collections and checks if it exists
     * @param {string} key 
     * @returns existing style number
     */
    const isStyleNumberUnique = async (key: string): Promise<string | undefined> => {
        const collectionTable: Record<string, string> = {
            m_tees: "M_Tees",
            m_shorts: "M_Shorts",
            m_jackets: "M_Jackets",
            m_belts: "M_Belts",
        };

        const m_tee_collection = collection(firestoreDB, collectionTable.m_tees);
        const m_shorts_collection = collection(firestoreDB, collectionTable.m_shorts);
        const m_jackets_collection = collection(firestoreDB, collectionTable.m_jackets)
        const m_belts_collection = collection(firestoreDB, collectionTable.m_belts);

        const retrieveM_Tees: QuerySnapshot<DocumentData> = await getDocs(m_tee_collection);
        const retrieveM_Shorts: QuerySnapshot<DocumentData> = await getDocs(m_shorts_collection);
        const retrieveM_Jackets: QuerySnapshot<DocumentData> = await getDocs(m_jackets_collection);
        const retrieveM_Belts: QuerySnapshot<DocumentData> = await getDocs(m_belts_collection);

        const teeExists = retrieveM_Tees.docs.some(doc => doc.id === key);
        const shortsExists = retrieveM_Shorts.docs.some(doc => doc.id === key);
        const jacketsExists = retrieveM_Jackets.docs.some(doc => doc.id === key);
        const beltsExists = retrieveM_Belts.docs.some(doc => doc.id === key);

        if (teeExists) {
            alert(`${key} is in use for: ${collectionTable.m_tees}`);
            return key;
        } else if (shortsExists) {
            alert(`${key} is in use for: ${collectionTable.m_shorts}`);
            return key;
        }
        else if (jacketsExists) {
            alert(`${key} is in use for: ${collectionTable.m_jackets}`);
            return key;
        }
        else if (beltsExists) {
            alert(`${key} is in use for: ${collectionTable.m_belts}`);
            return key;
        }
    }

    /**
     * Method to move selected items to the Sales Floor.
     * Basically it updates the status of the product from "Stockrooom" -> "Sales Floor"
     * @param itemsToBeMoved contains Product data such as category, style number
     */
    async function onHandleMoveToSalesFloor(itemsToBeMoved: Product[]) {

        //Loading animation
        setLoading(true);
        
        try {
            const updateStatus: string = "Sales Floor"
            
            for (const data of itemsToBeMoved) {
                const docRef = doc(firestoreDB, data.category, data.styleNum);
                await updateDoc(docRef, {
                    status: updateStatus
                });

                
            }
        } catch (error) {
            alert("Error in moving units.")
        }
        finally{
            //Alert showing that the units were moved to Sales Floor
            setLoading(false);

            alert(itemsToBeMoved.length + " Product(s) Moved to Sales Floor. Refresh page to show update.")

        }
    }



    return {
        productNameInput, setProductNameInput, styleNumberInput, setStyleNumberInput,
        categoryInput, setCategoryInput, availableRestockInput, setAvailableRestockInput,
        productImageInput, setProductImageInput, descriptionInput, setDescriptionInput, handlePopulate,
        loading, setLoading, onHandleMoveToSalesFloor,
    };

}

export default Populate;





