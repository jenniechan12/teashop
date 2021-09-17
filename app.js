require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

// parse application/json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// use cors
let corsOption = { origin: 'http://localhost:80' };
app.use(cors(corsOption));

// MongoDB
let mongodb = require('./src/backend/mongo/connect');
let url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DATABASE}?connectTimeoutMS=2500&socketTimeoutMS=2500`;

mongodb.connect(url, () => {
	// Create port
	const port = process.env.PORT || 3000;
	app.listen(port, () => {
		console.log('Connected to port ' + port);
	});
});

// Find 404
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));
