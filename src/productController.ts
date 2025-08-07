/**
 * Global interface for Product standards
 */
export interface Product {
    style_number: string;
    product_name: string;
    product_image: string;
    available_restock: number;
    status: string;
    description: string;
}

const baseURL = import.meta.env.VITE_API_URL;


export async function getAllMensTees() {
    const response = await fetch(`${baseURL}/api/products`);
    const data: Product[] = await response.json();
    return data;
}

/**
 * Method that gets products based on what category type the user selects.
 * Example: M_Tees, W_Sweaters
 * @param section category section
 * @returns Products in array format, based on what the user selects.
 */
export async function getProducts(section: string) {
    const response = await fetch(`${baseURL}/api/products/section/${section}`);
    const data: Product[] = await response.json();
    return data;
}


/**
 * Method to insert new products into inventory.
 * @param section Category of the product, M_Tees or M_Shorts
 * @param newProduct Product object containing details such as style number, etc
 */
export async function insertProduct(section: string, newProduct: Product) {
    try {
        const response = await fetch(`${baseURL}/api/products/insert/${section}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        });

        const data = await response.json();
        console.log("Product created: ", data)

    } catch (error) {
        console.error('Error posting product:', error)
    }
}


/**
 * Method that gets Not on Floor aka all of the available restock number for every single section available
 * @returns Total available restock for all sections 
 */
export async function getTotalNotOnFloor() {
    const response = await fetch(`${baseURL}/api/products/units`);
    const data = await response.json();
    return data;
}



/**
 * Method that gets Not on Floor aka available restock number based on the section the user selects.
 * Example: M_Tees, M_Shorts
 * @param table category section
 * @returns Single object array containing the summation of the available restock 
 */
export async function getNotOnFloorSection(table: string) {
    const response = await fetch(`${baseURL}/api/products/value/${table}`)
    const data = await response.json();
    console.log("NOF Section data: ", data)
    return data;
}



/**
 * Method that moves selected items from Restock.tsx in each section to the Sales Floor
 * @param items List of selected items ready to be moved to the sales floor
 * @param removeItem Function to remove items from selected items list
 */
export async function moveToSalesFloor(items: Product[], removeItem: (styleNumber: string) => void) {
    try {
        const response = await fetch(`${baseURL}/api/products/move`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(items),
        });

        //Throws error status if there was a HTTP error
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`)
        }

        
    } catch (error) {
        return console.error("Error in moving products to sales floor", error)
    }
    finally {
        alert(items.length + " Product(s) successfully moved to Sales Floor.");

        //Removing the selected items off the list
        items.forEach((item) => {
            removeItem(item.style_number)
        })
    }
}


/**
 * Fetches the sales floor units data including the total count and details of each unit.
 * @returns Sales Floor Units data
 */
export async function getSalesFloorUnits() {
    const response = await fetch(`${baseURL}/api/products/salesfloorunits`)
    const data = await response.json();
    console.log("Sales Floor Units data: ", data)
    return data;
}



