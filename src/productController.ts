/**
 * Gloabl interface for Product standards
 */
export interface Product {
    style_number: string;
    product_name: string;
    product_image: string;
    available_restock: number;
    status: string;
    description: string;
}


export async function getAllMensTees() {
    const response = await fetch('http://localhost:3000/api/products');
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
    const response = await fetch(`http://localhost:3000/api/products/section/${section}`);
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
        const response = await fetch(`http://localhost:3000/api/products/insert/${section}`, {
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
export async function getTotalNotOnFloor(){
    const response = await fetch('http://localhost:3000/api/products/units');
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
    const response = await fetch(`http://localhost:3000/api/products/value/${table}`)
    const data = await response.json();
    console.log("NOF Section data: ", data)
    return data;
}


//create UPDATE method in backend for Move To's Stockroom and Sales Floor



