function insertRowToTable(patient)
{

  var table=document.getElementById("myTable");

    var row=table.insertRow(0);
    var cell1=row.insertCell(1);
    var cell2=row.insertCell(2);
    var cell3=row.insertCell(3);
    var cell4=row.insertCell(4);

    cell1.innerHTML = patient.pName;
    cell2.innerHTML = patient.pAddress;
    cell3.innerHTML =patient.pNumber;
   cell4.innerHTML = patient.pProblem;
       
    // cell1.innerHTML=name;

} 


function addTable() {
    try{
  
      var myTableDiv = document.getElementById("myTable");
  
    var table = document.createElement('TABLE');
    table.border = '1';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    console.log("patientList", patientList);
  
  
    // for (var i = 0; i < 3; i++) {
    //   var tr = document.createElement('TR');
    //   tableBody.appendChild(tr);
  
    //   for (var j = 0; j < 4; j++) {
    //     var td = document.createElement('TD');
    //     td.width = '75';
    //     td.appendChild(document.createTextNode("Cell " + i + "," + j));
    //     tr.appendChild(td);
    //   }
    // }
    for (var i = 0; i < patientList.length; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
     // for (var j = 0; j < 4; j++) {
        var td = document.createElement('TD');
        var td2 = document.createElement('TD2');
       // td.width = '75';
        td.appendChild(document.createTextNode("Cell " + i + "," ));
        td2.appendChild(document.createTextNode(patientList[i].pName));
        tr.appendChild(td);
        tr.appendChild(td2);
     // }
    }
    myTableDiv.appendChild(table);
    console.log("myTableDiv", myTableDiv);
  
    console.log("patientListpatientList", patientList);
  
    }catch(ex){
      console.log("ex", ex);
    }
    
  }