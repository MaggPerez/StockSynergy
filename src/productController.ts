
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


//create insert method (like in Populate.ts)


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

