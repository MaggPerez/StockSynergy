import React from 'react'
import { useState, useEffect } from 'react'
import { Product, getAllMensTees, getProducts } from '../productController'
import Item from './Item';

interface ProductListProps {
    categoryType: string;
}

function ProductItems({ categoryType }: ProductListProps) {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        async function fetchData() {
            setProducts(await getProducts(categoryType));
        }

        fetchData();
    }, [categoryType])


  return (
    <div className='flex flex-col gap-5'>

        <div className='pl-4 flex gap-2'>
            <p>Not on Floor:</p>
            <p className="text-green-700 dark:text-[#00FF7F]">Under Development</p>
        </div>

        {products.map((productItem, index) => (
            <Item 
            key={index}
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