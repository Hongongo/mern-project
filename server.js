const express = require('express');
const connectDB = require('./config/db');

// Routes setup
var router = express.Router();
require('./routes/api/routes')(router);

var usersRoute = require('./routes/api/users');
var authRoute = require('./routes/api/auth');
var profileRoute = require('./routes/api/profile');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({extended:false}));

// Routes
app.get('/', (req, res) => res.send('API Running'));
//app.use(router);
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/profile', profileRoute);

// Start listening on port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));