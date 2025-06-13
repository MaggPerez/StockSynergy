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

router.post('/', async (req, res) => {
    const { style_number, product_name, product_image, available_restock, status, description } = req.body;

    //message that shows the incoming post request that is set to insert into database
    console.log('Incoming POST:', req.body);
    const { data, error } = await supabase
        .from('M_Tees')
        .insert([{ style_number, product_name, product_image, available_restock, status, description }])

    //Will show Supabase insert results in the console
    console.log('Supabase insert result:', { data, error });

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(201).json(data)
});


module.exports = router;