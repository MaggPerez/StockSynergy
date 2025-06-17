const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
    origin: 'https://stocksynergy.netlify.app',
    credentials: true
}));

app.use(express.json());

const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Stock API running, get to work');
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})