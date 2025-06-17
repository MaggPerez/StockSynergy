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


//Getting all available restock values and sums up all the available restock values
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


module.exports = router;