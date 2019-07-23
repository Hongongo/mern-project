const express = require('express');
const connectDB = require('./config/db');

// Routes setup
var router = express.Router();
require('./routes/api/routes')(router);

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Routes
app.get('/', (req, res) => res.send('API Running'));
app.use(router);

// Start listening on port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));