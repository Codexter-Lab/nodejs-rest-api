const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/db');

dotenv.config();

const app = express();
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('User Service is running');
});

// User routes
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
