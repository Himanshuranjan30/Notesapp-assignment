const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))


app.use(bodyParser.json())


const dbConfig = require('./dbconfig.js');
const mongoose = require('mongoose');




mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to DB', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Basic Notes App"});
});

require('./backend/routes/routes')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});