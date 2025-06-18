const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

//Allows localhost and stocksynergy.netlify.app to use back-end server
const allowedOrigins = [
  'http://localhost:5173',
  'https://stocksynergy.netlify.app'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
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