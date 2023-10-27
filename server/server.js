const express = require('express');
const cors = require('cors');
require('dotenv').config();

// import routes
const userRoutes = require('./routes/UserRoutes');
const customerRoutes = require('./routes/CustomerRoutes');
const sellerRoutes = require('./routes/SellerRoutes');
const feedbackRoutes = require('./routes/FeedbackRoutes');

// port number
const port = process.env.DB_PORT;

const app = express();

app.use(express.json());
app.use(cors());

// routers
app.use('/api/users', userRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/seller', sellerRoutes);
app.use('/api/feedback', feedbackRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to e-commerce system backend!");
});

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});