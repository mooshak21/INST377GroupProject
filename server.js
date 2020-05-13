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


async function processDataForFrontEnd(req, res) {
  const baseURL = "https://data.princegeorgescountymd.gov/resource/mnie-hrv7.json"; 

  // Your Fetch API call starts here
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
}


app.route("/api")
.get((req, res) => {
  (async () => {
    const result = await processDataForFrontEnd(req, res);
    console.log("Expected result", result);
    res.send(result);
  })()
})
.post((req, res) => {
  console.log("/api post request", req.body);
  if (!req.body.name) {
    console.log(req.body);
    res.status("418").send("something went wrong, additionally i am a teapot");
  } else {
    console.log("Post request sent")
    .then((result) => {
      console.log(result);
      res.send("your request was successful"); // simple mode
    })
    .catch((err) => {
      console.log(err);
    });
  }
})
.put((req,res) => { //put request to api
  console.log("put request acessed", req.body); //console log statement to the route
  if (!req.body.name) {
    console.log(req.body);
    res.status("418").send("something went wrong, additionally i am a teapot");
  } else {
    console.log("Put request succesful")
    .then((result) => {
      console.log(result);
      res.send("done"); // simple mode
    })
    .catch((err) => {
      console.log(err);
    });
  }

});

/* app.route('/api') 
.get("/", function (req, res) {
    res.send (' This is a response whena  get request is made')
})
.post('/' , function (req, res) {
    res.send("POST request made ")
})
.put('/user' , function(req,res) {
 res.send("Put request sent to /user")
})

app.get('/api', (req, res) => {processDataForFrontEnd(req, res)}); */



app.listen(port, () => console.log(`Example app listening on port ${port}!`));