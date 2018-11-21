const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const path = require('path');
const app = express();


// Force https on Heroku
app.use(sslRedirect());


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/test', (req, res) => {
//   res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

