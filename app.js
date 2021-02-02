
patientList = [];
const baseURL = "http://localhost:8080/"

initialize();

// insering the user values into table
function insertRowToTable(patient) {

  var table = document.getElementById("myTable");

  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);

  cell1.innerHTML = patient.pName;
  cell2.innerHTML = patient.pAddress;
  cell3.innerHTML = patient.pNumber;
  cell4.innerHTML = patient.pProblem;
  cell5.innerHTML = '<button  type="button" onClick="deleteFunction(this)" >'
    + 'REMOVE</button>'

}

// user submitted data
function submitPatientData() {

  // createDatabase();
  var name = document.getElementById('name').value;
  var number = document.getElementById('number').value;
  var address = document.getElementById('address').value;
  var problem = document.getElementById('problem').value;

  // validate user entered data
  if (name == "" || name == undefined) {
    alert("Please enter name");
  } else if (number == "" || number == undefined) {
    alert("Please enter number");
  } else if (address == "" || address == undefined) {
    alert("Please enter address");
  } else if (problem == "" || problem == undefined || problem == "Choose") {
    alert("Please select problem");
  } else {

    // if data is correct, create Object of the data 
    var patient = new Object();
    patient.pName = name;
    patient.pAddress = address;
    patient.pNumber = number;
    patient.pProblem = problem;

    submitpatient(patient);

  }
}

function search() {
  var cell;
  var input = document.getElementById("myInput");
  var inputUpper = input.value.toUpperCase();
  const table = document.getElementById("myTable");
  var tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      if (j == 0 || j == 2 || j == 3) {
        var textValue = td[j].innerText;
        if (textValue) {
          console.log("in search window " + (textValue.toUpperCase().indexOf(inputUpper)));
          if (textValue.toUpperCase().indexOf(inputUpper) > -1) {
            tr[i].style.display = "";
            break;
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }

  }
}

function deleteFunction(obj) {
  var id = obj.parentElement.parentElement.rowIndex;
  for (var i = 0; i < patientList.length; i++) {
    if ((id - 1) == i) {
      //  patientList.splice(i,1);
      deletePatientData(patientList[i]);
    }
  }

  // setPatientListToLocalStorage();
}

function createDatabase() {
  try {
    if (window.openDatabase) {
      var shortName = 'db_edentiti';
      var version = '1.0';
      var displayName = 'Edentiti Information';
      var maxSize = 65536; // in bytes
      db = openDatabase(shortName, version, displayName, maxSize);
      alert('Sqlite Database created');
    }
  } catch (e) {
    alert(e);
  }
}

function setPatientListToLocalStorage() {
  localStorage.setItem('PatientList', JSON.stringify(patientList));
}

function getPatientListFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('PatientList'));
  if (data) {
    patientList = data;
  } else {
    patientList = [];
  }
}

function removePatientListFromLocalStorage() {
  localStorage.removeItem('PatientList');
  patientList = [];
}

function removePatientList() {

  // for (i = patientList.length; i > 0; i--) {
  //   document.getElementById("myTable").deleteRow(i);
  // }
  // removePatientListFromLocalStorage();

  deleteAllPatientData();
}

function initialize() {
  // getPatientListFromLocalStorage();
  //  if(patientList){
  //   for(var i=0;i<patientList.length;i++){
  //     insertRowToTable(patientList[i]);
  //   }
  // }

  getPatientData();


}

function getPatientData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      for (i = patientList.length; i > 0; i--) {
        document.getElementById("myTable").deleteRow(i);
      }
      patientList = JSON.parse(this.responseText);
      if (patientList) {
        for (var i = 0; i < patientList.length; i++) {
          insertRowToTable(patientList[i]);
        }
      }
    }
  };
  xhttp.open("GET", baseURL + "getPatients", true);
  xhttp.send();
}

function submitpatient(patient) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      if (patientList) {
        patientList.push(patient);
      }
      insertRowToTable(patient);
      setPatientListToLocalStorage();
    }
  };
  xhttp.open("POST", baseURL + "submitPatientData", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  var data = JSON.stringify(patient);
  xhttp.send(data);
}


function deletePatientData(patient) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      getPatientData();
    }
  };

  xhttp.open("POST", baseURL + "removePatients", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  var data = JSON.stringify(patient);
  console.log(data);
  xhttp.send(data);
}

function deleteAllPatientData() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      getPatientData();
    }
  };

  xhttp.open("POST", baseURL + "removeAllPatients", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
} 