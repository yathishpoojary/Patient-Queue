
patientList = [];

function insertRowToTable(patient)
{

  var table=document.getElementById("myTable");

    var row=table.insertRow();
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);

    cell1.innerHTML = patient.pName;
    cell2.innerHTML = patient.pAddress;
    cell3.innerHTML =patient.pNumber;
   cell4.innerHTML = patient.pProblem;

} 



function submitPatientData(){
  var name=document.getElementById('name').value;
  var number=document.getElementById('number').value;
  var address=document.getElementById('address').value;
 var problem=document.getElementById('problem').value;

 var patient = new Object();
 patient.pName =name;
 patient.pAddress = address;
 patient.pNumber = number;
 patient.pProblem = problem;
 patientList.push(patient);

    insertRowToTable(patient)
   

}
  
function search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
   
   
   
   // creating table

  //  var table=document.createElement("table");
  //  console.log("table is "+table);

  //  var tableBody=document.createElement("tbody");
  //  console.log("table body "+tableBody);

  //  var row=document.createElement("tr");

  //  console.log("tr is row "+row);








// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

