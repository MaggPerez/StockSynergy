import { useEffect, useState } from 'react'
import InventorySidebar from '../components/InventorySidebar'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader';
import { setDocumentTitle } from '../script';
import { PlusCircle } from 'lucide-react';
import InputAddProduct from '../components/InputAddProduct';
import { ClipLoader } from 'react-spinners';
import {Product, insertProduct } from '../productController';


function AddProduct() {
    setDocumentTitle("Add Product")

    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
        //prevents unauthorized users from entering this page
        if (sessionStorage.getItem("isManager") === "false") {
            navigate("/home")
        }
    }, [navigate])

    const [productNameInput, setProductNameInput] = useState<string>("");
    const [styleNumberInput, setStyleNumberInput] = useState<string>("");
    const [categoryInput, setCategoryInput] = useState<string>("");
    const [availableRestockInput, setAvailableRestockInput] = useState<number | string>("");
    const [productImageInput, setProductImageInput] = useState<string>("");
    const [descriptionInput, setDescriptionInput] = useState<string>("");

    const [loading, setLoading] = useState(false);


    //creating hashmap object
    const productImageMap: Record<string, string> = {
        M_Tees: "/stock_images/t_shirt_icon.svg",
        M_Shorts: "/stock_images/shorts_icon.svg",
        M_Jackets: "/stock_images/m_jacket_icon.svg",
        M_Belts: "/stock_images/m_belt_icon.svg"
    }


    /**
     * Function that handles what product category they'll select
     * @param event 
     */
    const handleSelectCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = event.target.value;
        const productImagePath = productImageMap[selectedCategory];
        setCategoryInput(event.target.value);
        setProductImageInput(productImagePath);
    }



    /**
     * Method that handles new product submissions
     * @param e prevents automatic submissions
     * @returns alert message that a new product was added
     */
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        //Loading spinner turns on
        setLoading(true);

        //Validating to see if the user has selected a category.
        try {
            if(categoryInput === ""){
            setLoading(false);

            //Tells the user to choose a category
            return alert("Choose a Category");
        }

        //Creating Product Object based on what the user types in.
        const newProduct: Product = {
            style_number: styleNumberInput,
            product_name: productNameInput,
            product_image: productImageInput,
            available_restock: Number(availableRestockInput),
            status: "Stockroom",
            description: descriptionInput
        };

        //Inserting the new product into the inventory
        await insertProduct(categoryInput, newProduct);
        alert("New Product Added!");

        } catch (error) {
            console.error(error)
        }
        finally {

            //Turns off the loading animation
            setLoading(false);
        }
    }


    return (
        <main className='bg-gray-50 dark:bg-common-black text-black dark:text-white min-h-screen lg:pl-56 lg:duration-300'>
            {/* Sidebar */}
            <InventorySidebar />

            {/* Title of page */}
            <PageHeader title="Add Product" pathTo='/home' chevronName='Home' />

            <div className='p-4 md:p-6'>

                {/* Outer box styling */}
                <div className='bg-white dark:bg-zinc-800 rounded-xl shadow-sm p-6 max-w-7xl mx-auto'>

                    {/* Form header */}
                    <div className='mb-6 font-bold text-violet-600 dark:text-violet-400'>
                        <h2 className='text-2xl'>Product Information</h2>
                        <p className="text-gray-600 dark:text-gray-300">Fill in the details to add a new product to inventory</p>
                    </div>

                    {/* Product Form */}
                    <form onSubmit={handleSubmit} className='space-y-6'>

                        {/* Grid */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                            {/* Product name */}
                            <div>
                                <InputAddProduct htmlName={'productName'} labelName={'Product Name'} inputType={'text'} valueInputName={productNameInput} 
                                setValueInputName={setProductNameInput} requiredTag={true} disableTag={false} />

                            </div>

                            {/* Style Number */}
                            <div>
                                <InputAddProduct htmlName={'styleNumber'} labelName={'Style Number'} inputType={'text'} valueInputName={styleNumberInput} 
                                setValueInputName={setStyleNumberInput} requiredTag={true} disableTag={false} />

                            </div>

                            {/* Category */}
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium">
                                    Category <span className='text-red-500'>*</span>
                                </label>

                                {/* Category Menu */}
                                <select id="category" name="category" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white
                                 dark:bg-zinc-700 text-black dark:text-white" value={categoryInput} onChange={handleSelectCategory}>
                                    <option value="" disabled>-- Choose a Category --</option>
                                    <option value="M_Tees">Men's Tees</option>
                                    <option value="M_Shorts">Men's Shorts</option>
                                    <option value="M_Jackets">Men's Jackets</option>
                                    <option value="M_Belts">Men's Belts</option>
                                </select>
                            </div>

                            {/* Price */}
                            <div>
                                <InputAddProduct htmlName={'price'} labelName={'Price ($)'} inputType={'number'} valueInputName={''} setValueInputName={function (value: string): void {
                                    throw new Error('Function not implemented.');
                                } } requiredTag={false} disableTag={true} placeHolderText='Unavailable - Coming Soon' />

                            </div>

                            {/* Available Restock */}
                            <div>
                                <InputAddProduct htmlName='availableRestock' labelName='Available Restock Quantity' inputType='number' valueInputName={availableRestockInput}
                                    setValueInputName={setAvailableRestockInput} requiredTag={true} disableTag={false} />
                            </div>


                            {/* Color */}
                            <div>
                                <InputAddProduct htmlName={'Color'} labelName={'Color'} inputType={'Text'} valueInputName={''} setValueInputName={function (value: string): void {
                                    throw new Error('Function not implemented.');
                                } } requiredTag={false} disableTag={false} placeHolderText='Unavailable - Coming Soon' />
                            </div>
                        </div>



                        {/* Description */}
                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium">
                                Description <span className='text-red-500'>*</span>
                            </label>
                            <textarea name="description" id="description" rows={4} className='w-full p-3 border border-gray-300 rounded-lg bg-white
                                dark:bg-zinc-700 text-black dark:text-white'
                                onChange={(e) => setDescriptionInput(e.target.value)}
                                required>
                            </textarea>
                        </div>

                        {/* Submit Button */}
                        <div className='flex justify-end gap-5'>
                            <button type="submit" className='px-5 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg
                            font-medium transition-colors duration-300 ' disabled={loading}>
                                {/* Will switch to loader animation if button is clicked as long as all the requirements are fulfilled */}
                                {loading ? (
                                    <p className='flex gap-1'><ClipLoader color='white' size={18} /></p>
                                ) : (
                                    // Defaults to "Add Product" when not clicked
                                    <p className='flex gap-1'><PlusCircle size={26} strokeWidth={1.5} color='white' /> Add Product</p>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default AddProduct