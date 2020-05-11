// These are our required libraries to make the server work.
// We're including a server-side version of Fetch to build on your client-side work
const express = require('express');
const fetch = require('node-fetch');

// Here we instantiate the server we're going to turn on
const app = express();


// Servers are often subject to the whims of their environment.
// Here, if our server has a PORT defined in its environment, it will use that.
// Otherwise, it will default to port 3000
const port = process.env.PORT || 3000;

// Our server needs certain features - like the ability to send and read JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// And the ability to serve some files publicly, like our HTML.
app.use(express.static('public'));


app.route('/api') 
.get("/", function (req, res) {
    res.send (' This is a response whena  get request is made')
})
.post('/' , function (req, res) {
    res.send("POST request made ")
})
.put('/user' , function(req,res) {
 res.send("Put request sent to /user")
})

app.get('/api', (req, res) => {processDataForFrontEnd(req, res)});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));