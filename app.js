require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

// parse application/json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// use cors
let corsOption = { origin: 'http://localhost:80' };
app.use(cors(corsOption));

console.log(process.env.NODE_ENV);

// create static url
app.use(express.static('public'));
if (process.env.NODE_ENV === 'production')
	app.use('/teashop', express.static(path.join(__dirname, 'dist')));
else if (process.env.NODE_ENV === 'dev')
	app.use('/teashop', express.static(path.join(__dirname, 'public')));

// MongoDB
let mongodb = require('./src/backend/mongo/connect');
let url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DATABASE}?connectTimeoutMS=2500&socketTimeoutMS=2500`;

mongodb.connect(url, () => {
	const http = require('http');
	const server = http.createServer(app);
	const { Server } = require('socket.io');
	const io = new Server(server);

	app.get('/teashop', (req, res) => {
		res.sendFile(__dirname + '\\dist\\index.html');
	});

	// Socket.io connection
	io.on('connection', (socket) => {
		console.log('a user connected');

		socket.on('disconnect', () => {
			console.log('user disconnected');
		});
	});

	// Sockets
	require('./src/backend/models/ItemDatabase')(io);

	// Create port
	const port = process.env.PORT || 3000;
	server.listen(port, () => {
		console.log('Connected to port ' + port);
	});
});

// Find 404
// app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));
