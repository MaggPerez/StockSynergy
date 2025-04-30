import { setDoc, doc, getDocs, collection, QuerySnapshot, DocumentData } from "firebase/firestore";
import { firestoreDB } from "./firebase";
import jsonData from "./populateProducts.json"

interface Product {
    availStock: number;
    des: string;
    prodImg: string;
    prodName: string;
    styleNum: string;
}

export const handlePopulate = async (): Promise<void> => {

    //setting a variable to populate products into firebase
    const populateProduct: Product[] = [{
        availStock: jsonData.availableRestock,
        des: jsonData.description,
        prodImg: jsonData.productImage,
        prodName: jsonData.productName,
        styleNum: jsonData.styleNumber
    }];

    //Reading through JSON file having product info
    for(const data of populateProduct){
        const existingStyleNumber = await isStyleNumberUnique(data.styleNum);

        //if there is an existing style number in use, the product will not populate
        if(existingStyleNumber === data.styleNum){
            return;
        }

        //if there are no existing style numbers, product will get populated to Firebase
        try {
            await setDoc(doc(firestoreDB, "M_Belts", data.styleNum), {
                availableRestock: data.availStock,
                description: data.des,
                productImage: data.prodImg,
                productName: data.prodName,
                styleNumber: data.styleNum
            }); 
            alert("Document written!")
        } catch (error) {
            console.error("Error adding document: ", error)
        }
    }
};


/**
 * Function that gets all style numbers from each collections and checks if it exists
 * @param {*} key 
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
    else if(jacketsExists){
        alert(`${key} is in use for: ${collectionTable.m_jackets}`);
        return key;
    }
    else if (beltsExists) {
        alert(`${key} is in use for: ${collectionTable.m_belts}`);
        return key;
    }
}

// <ProductButtons categoryType="Populate" onClick={handlePopulate} />
