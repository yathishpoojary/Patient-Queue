const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.post('/example', (req, res) => {
    res.send(`Full name is:${req.query.fname} ${req.body.lname}.`);
  });
  
  app.get('/getPatientList', (req, res) => {
    res.send([{"name":"Suma"},{"name":"Yathish"}]);
  });
  
  app.post('/submitPatientData', (req, res) => {
      console.log("req", req.body);
  
      
      res.send(`Successfully submitted ${req.body.pName} patient data`);
  });
  
  const port = 8080;
  
  app.listen(port, () => {
    console.log(`Server running on port${port}`);
  });
  