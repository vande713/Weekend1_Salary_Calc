const express = require('express'); // this says to go find module named 'express'. Whatever it exports we will import

const app = express();
const PORT = 3000;

// // req is request, res is response
// app.get('/', function (req, res) {
//     res.send('Hello world');
// });



// '.use' is similar to GET but catch all for all requests
app.use(express.static('public'));

// server needs to be constantly listening for requests and sending responses
app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`)
});
