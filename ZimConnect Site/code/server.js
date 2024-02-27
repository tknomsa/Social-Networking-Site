//Importing required modules
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
//Converting URLs to paths
import { fileURLToPath } from 'url'; 
//MongoDB driver for node.js
import { MongoClient } from 'mongodb';

//Defining __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url)); 
const app = express();
//Defining port number for server to listen on
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

//MongoDB connection setup
const password = "Tadiwanashe1411";
const userName = "ntkachere";
const server = "cluster0.zaz5qzr.mongodb.net";
const databaseName = "ZimConnect";

const encodedUsername = encodeURIComponent(userName);
const encodedPassword = encodeURIComponent(password);

const connectionURI = `mongodb+srv://${encodedUsername}:${encodedPassword}@${server}/${databaseName}?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(connectionURI);

//Function to connect to mongoDB
async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
//Calling mongoDB function to establish connection
connectDB();

//Serving static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

//Route handling GET requests to root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


//GET request to fetch data from MongoDB
app.get('/M00883591', async (req, res) => {
    try {
        const db = client.db(databaseName);
        const collection = db.collection('comments');
        const data = await collection.find({}).toArray();
        //Send fetched data as a JSON response
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

//POST request handler for inserting data into MongoDB
app.post('/M00883591', async (req, res) => {
    try {
        const db = client.db(databaseName);
        const collection = db.collection('comments');
        await collection.insertOne(req.body);
        //Sending a success message with the received data
        res.json({ message: "POST request received", receivedData: req.body });
    } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
//Listening for incoming connections
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
