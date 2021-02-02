const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const MongoClient =require('mongodb').MongoClient;
const connectionString="mongodb+srv://root:dinga@patientqueuecluster.7xnvk.mongodb.net/PatientQueue?retryWrites=true&w=majority";
app.use(cors());


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

MongoClient.connect(connectionString,(err,client)=> {
    if (err) return console.error(err);

    console.log('Connected to Database');
    const db=client.db('PatientQueue');
    const patientCollection = db.collection('Patients');

    app.post('/submitPatientData', (req, res) => {
        console.log("req", req.body);
    
        patientCollection.insertOne(req.body)
        .then(result => {
          console.log("result", result)
          res.send(`Successfully ** submitted ${req.body.pName} patient data`);
        })
        .catch(error =>{
            console.error(error);
        })
        
    });

    
    app.get('/getPatients', (req, res) => {
        db.collection('Patients').find().toArray()
          .then(results => {
            console.log("results array", results);
            res.send(results);
          })
          .catch(error => console.error(error))
        // ...
      })
       

      app.delete('/removePatients', (req, res) => {

        console.log("reee", req);

        var myquery = { pName: req.body.pName };
        patientCollection.deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        //db.close();
  });

        //   patientCollection.deleteOne( { name: req.body.pName })
        //   .then(result => {
        //     if (result.deletedCount === 0) {
        //       return res.json('No quote to delete')
        //     }
        //     res.json(`Deleted `+ req.body.pName)
        //   })
        //   .catch(error => console.error(error))
      })
       
    
  })


app.post('/example', (req, res) => {
    res.send(`Full name is:${req.query.fname} ${req.body.lname}.`);
  });
  
  app.get('/getPatientList', (req, res) => {
    res.send([{"name":"Suma"},{"name":"Yathish"}]);
  });
  
//   app.post('/submitPatientData', (req, res) => {
//       console.log("req", req.body);
  
      
//       res.send(`Successfully submitted ${req.body.pName} patient data`);
//   });
  
  const port = 8080;
  
  app.listen(port, () => {
    console.log(`Server running on port${port}`);
  });
  