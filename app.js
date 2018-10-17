const express = require("express");
const app = express();
const PORT = 8000 || process.env.port;
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({entended: true}));


app.get('/', (req, res) => {
	res.render("index.html");
});

app.listen(PORT, () => {
	console.log("Sever is up and running");
});