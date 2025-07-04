const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');


// Getting all M_Tees
router.get('/', async (req, res) => {
    const { data, error } = await supabase.from('M_Tees').select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});



// Inserting products
router.post('/insert/:table', async (req, res) => {
    const { table } = req.params;
    const { style_number, product_name, product_image, available_restock, status, description } = req.body;

    //message that shows the incoming post request that is set to insert into database
    console.log('Incoming POST:', req.body);
    const { data, error } = await supabase
        .from(table)
        .insert([{ style_number, product_name, product_image, available_restock, status, description }])

    //Will show Supabase insert results in the console
    console.log('Supabase insert result:', { data, error });

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(201).json(data)
});


//Get products based on table
router.get('/section/:table', async (req, res) => {
    const { table } = req.params;

    const allowedTables = ["M_Tees", "M_Shorts", "M_Jackets", "M_Belts"];
    
    if(!allowedTables.includes(table)){
        return res.status(400).json({ error: "Invalid Section Name"});
    }

    const { data, error } = await supabase.from(table).select("*");


    if(error){
        return res.status(500).json({ error: error.message});
    }


    res.json(data);
})


//Getting all available restock values and sums up all the available restock values based on the section 
//the user picks
router.get('/value/:table', async (req, res) => {
    const { table } = req.params;

    const allowedTables = ["M_Tees", "M_Shorts", "M_Jackets", "M_Belts"];
    
    if(!allowedTables.includes(table)){
        return res.status(400).json({ error: "Invalid Section Name"});
    }

    const { data, error } = await supabase.from(table).select("available_restock.sum()");

    
    if(error){
        return res.status(500).json({ error: error.message});
    }


    res.json(data);
})


//GET method to get the total restock number
router.get('/units', async (req, res) => {

    const { data, error } = await getTotalRestock();
    console.log("From reading getTotalRestock: ", data);

    if(error){
        return res.status(500).json({ error: error.message });
    }


    res.json(data);
})


//PUT request to update status of items from Stockroom to Sales Floor
router.put('/move', async (req, res) => {

    //Product will be an array of selected items
    const product  = req.body;

    const moveToSalesFloor = "Sales Floor"

    // Available Tables
    const tables = ['M_Tees', 'M_Shorts', 'M_Jackets', 'M_Belts'];

    //Iterating through all tables
    for (const table of tables){

        //Iterating through all selected products as item
        product.forEach(async item => {

            //Changing the status of the item
            const { error } = await supabase.from(table).update({ status: moveToSalesFloor }).eq('style_number', item.style_number).select()
            
            if (error){
                return res.status(500).json({ error: error.message });
            }
        });

    }

    return res.status(200).json({ Message: "Success"})


})


/**
 * 
 * @returns Total Restock Number for all Tables
 */
async function getTotalRestock() {
  let NOF = 0;
  const tables = ['M_Tees', 'M_Shorts', 'M_Jackets', 'M_Belts'];

  for (const table of tables) {
    const { data, error } = await supabase
      .from(table)
      .select('available_restock');

    if (error) {
      console.error(`Error fetching from ${table}:`, error);
      return { data: null, error};
    }

    const sum = data.reduce((acc, item) => acc + (item.available_restock || 0), 0);
    NOF += sum;
  }

  console.log('Total available_restock across all tables:', NOF);

  //Returning as an object instead of number
  return { data: NOF, error: null};
}


module.exports = router;