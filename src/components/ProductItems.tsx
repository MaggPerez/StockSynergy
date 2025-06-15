import React from 'react'
import { useState, useEffect } from 'react'
import { Product, getAllMensTees, getProducts, getNotOnFloorSection } from '../productController'
import Item from './Item';
import { ClipLoader } from 'react-spinners';


interface ProductListProps {
    categoryType: string;
}


function ProductItems({ categoryType }: ProductListProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [NOF, setNOF] = useState<number>(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //Fetching all data from database
        async function fetchData() {

            //Starts loading animation
            setLoading(true)
            try {
                setProducts(await getProducts(categoryType));
                const nofData = await getNotOnFloorSection(categoryType);

                //Checking to see if the NOF value is an array and is not empty. Otherwise nof value is set to 0
                const nofValue = Array.isArray(nofData) && nofData.length > 0 ? nofData[0].sum : 0;
                console.log(nofValue);

                setNOF(nofValue);
                
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
            finally {
                //Disables loading animation once done
                setLoading(false)
            }
        }

        fetchData();
    }, [categoryType])

    
    //Loading animation runs first while fetching data
    if(loading){
        return (
            <div className="flex justify-center items-center py-8">
            <ClipLoader color="#7c3aed" size={40} />
        </div>
        )
    }

    //If Not on Floor is at 0, then nothing needs to be restocked
    return NOF === 0 ? (
        <p className="text-center text-green-700 dark:text-[#00FF7F]">Nothing to be restocked</p>
    )
    : (
        // Otherwise, a list of products will be shown that are needed to be restocked
        <div className='flex flex-col gap-5'>

            <div className='pl-4 flex gap-2'>
                <p>Not on Floor:</p>
                <p className='text-green-700 dark:text-[#00FF7F]'>{NOF}</p>
            </div>


            {products.map((productItem) => (
                <Item
                    key={productItem.style_number}
                    styleNumber={productItem.style_number}
                    productName={productItem.product_name}
                    productImage={productItem.product_image}
                    availableRestock={productItem.available_restock}
                    description={productItem.description}
                    category={''} />
            ))}

        </div>
    )
}

export default ProductItems