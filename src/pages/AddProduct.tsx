import React, { useEffect } from 'react'
import InventorySidebar from '../components/InventorySidebar'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
    const navigate = useNavigate();
    useEffect(() => {
        //prevents unauthorized users from entering this page
        if(sessionStorage.getItem("isManager") === "false"){
            navigate("/home")
        }
    })

  return (
    <p className='text-black'>
        <InventorySidebar />
        
    </p>
  )
}

export default AddProduct