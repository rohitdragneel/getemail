const express = require('express')
const bodyParser = require('body-parser');
// const cors = require('cors');
var emailFinder = require('./lib/email-finder');
const app = express();
const port = 3000;

// Where we will keep books
let books = [];



// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    // We will be coding here
    var data = {
        name: req.body.first_name.trim() + ' ' + req.body.last_name.trim(),
        domain: req.body.domain
      };
    
      emailFinder(data)
      .then(function (email) {
        res.send({email: email});
      })
      .catch(function (err) {
        res.status(500).send(err);
      })
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));