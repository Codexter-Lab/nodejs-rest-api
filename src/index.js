const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./config/db');

dotenv.config();

const app = express();
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Application is running');
});

// User routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
