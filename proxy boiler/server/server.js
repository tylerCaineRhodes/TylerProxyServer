const express = require('express');
const bodyParser = require('body-parser');
const proxy = require('http-proxy-middleware');
const app = express();
const port = 3000;
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.listen(port, () => {
  console.log(`yo, dude, listen-  you're connected to ${port}`);
})



 






