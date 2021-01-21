
patientList = [];

function insertRowToTable(patient)
{

  var table=document.getElementById("myTable");

    var row=table.insertRow();
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5= row.insertCell(4);

    cell1.innerHTML = patient.pName;
    cell2.innerHTML = patient.pAddress;
    cell3.innerHTML =patient.pNumber;
   cell4.innerHTML = patient.pProblem;
   cell5.innerHTML=  '<button  type="button" onClick="deleteFunction(this)" >'
   + '<span class="glyphicon glyphicon-pencil"></span>REMOVE</button>'//"Delete";  //  <button> delete </button>   ///  '<button class=\"btn btn-primary btn-xs my-xs-btn\" type='button' onClick='changeRec(".$num.")'></button>';
   console.log("table", table, patient)

} 

function submitPatientData(){
  var name=document.getElementById('name').value;
  var number=document.getElementById('number').value;
  var address=document.getElementById('address').value;
 var problem=document.getElementById('problem').value;

 if(name=="" || name==undefined){
   alert("Please enter name");
 }else if(number==null || number==undefined){
  alert("Please enter number");
}else if(address==null || address==undefined){
  alert("Please enter address");
}else if(problem==null || problem==undefined || problem == "Choose"){
  alert("Please select problem");
}else{

  var patient = new Object();
  patient.pName =name;
  patient.pAddress = address;
  patient.pNumber = number;
  patient.pProblem = problem;
  patientList.push(patient);
 
     insertRowToTable(patient)
}


   

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

function deleteFunction(obj)
{

  var id =  obj.parentElement.parentElement.rowIndex;
  document.getElementById("myTable").deleteRow(id);

  for(var i=0;i<patientList.length;i++){
    if((id-1) == i){
      patientList.splice(i,1);
    }
  }

  console.log("patientListpatientListpatientList", patientList)

}
   
   

// var index,table =document.getElementById('table');
// console.log(index+" the value of");
// for(int i=1;i<table.row.length;i++)
// {
//   table[i].cell5.onClick=function()
//   {
//     index=this.parentElement.rowIndex;
//     console.log(index);
//     table.deleteRow(index);
//   }
// }
   
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

