const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb+srv://root:dinga@patientqueuecluster.7xnvk.mongodb.net/PatientQueue?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect(connectionString, (err, client) => {
  if (err) return console.error(err);

  console.log('Connected to Database');
  const db = client.db('PatientQueue');
  const patientCollection = db.collection('Patients');

  app.post('/submitPatientData', (req, res) => {
    patientCollection.insertOne(req.body)
      .then(result => {
        res.send(`Successfully submitted ${req.body.pName} patient data`);
      })
      .catch(error => {
        console.error(error);
      })
  });

  app.get('/getPatients', (req, res) => {
    db.collection('Patients').find().toArray()
      .then(results => {
        res.send(results);
      })
      .catch(error => console.error(error))
  })

  app.post('/removePatients', (req, res) => {
    var myquery = { pNumber: req.body.pNumber };
    patientCollection.deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted", obj.deletedCount);
      if (obj.deletedCount == 0) {
        res.send("No Patient to delete");
      } else {
        res.send("Deleted successfully");
      }
    });
  })

  app.post('/removeAllPatients', (req, res) => {
    patientCollection.deleteMany({}, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted", obj.deletedCount);
      if (obj.deletedCount == 0) {
        res.send("No Patient to delete ");
      } else {
        res.send("Deleted successfully");
      }
    });
  })

})

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port${port}`);
});
