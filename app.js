
patientList = [];

initialize();


// insering the user values into table
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
   + 'REMOVE</button>'//"Delete";  <span class="glyphicon glyphicon-pencil"></span>   //  <button> delete </button>   ///  '<button class=\"btn btn-primary btn-xs my-xs-btn\" type='button' onClick='changeRec(".$num.")'></button>';
   console.log("table", table, patient)

} 

// user submitted data
function submitPatientData(){

 // createDatabase();
    var name=document.getElementById('name').value;
    var number=document.getElementById('number').value;
    var address=document.getElementById('address').value;
    var problem=document.getElementById('problem').value;

    // validate user entered data
    if(name=="" || name==undefined){
      alert("Please enter name");
    }else if(number=="" || number==undefined){
      alert("Please enter number");
    }else if(address=="" || address==undefined){
      alert("Please enter address");
    }else if(problem=="" || problem==undefined || problem == "Choose"){
      alert("Please select problem");
    }else{

      // if data is correct, create Object of the data 
      var patient = new Object();
      patient.pName =name;
      patient.pAddress = address;
      patient.pNumber = number;
      patient.pProblem = problem;

      submitpatient(patient);
      // condition is true 
        if(patientList){
          // push into array
          patientList.push(patient);
        }
        insertRowToTable(patient);
        setPatientListToLocalStorage();   
    }
}
  
function search() {
  var     cell;
 var input = document.getElementById("myInput");
 var  convertUpper = input.value.toUpperCase();
 const table = document.getElementById("myTable");
   var tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
  var  td = tr[i].getElementsByTagName("td");
    for(j=0;j< td.length;j++){
      if(j==0||j==2||j==3){
    var   textValue = td[j].innerText;
      if (textValue) {
        if (textValue.toUpperCase().indexOf(convertUpper) > -1) 
        {
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

function deleteFunction(obj)
{
  var id =  obj.parentElement.parentElement.rowIndex;
  document.getElementById("myTable").deleteRow(id);

  for(var i=0;i<patientList.length;i++){
    if((id-1) == i){
      patientList.splice(i,1);
    }
  }

  setPatientListToLocalStorage();
}

function createDatabase(){
  try{
   if(window.openDatabase){
           var shortName   =  'db_edentiti';
           var version   =  '1.0';
           var displayName  =  'Edentiti Information';
           var maxSize   =  65536; // in bytes
           db    =  openDatabase(shortName, version, displayName, maxSize);
                  alert('Sqlite Database created');
       }
  }catch(e){
   alert(e);
  }
}
   
function setPatientListToLocalStorage(){
  localStorage.setItem('PatientList', JSON.stringify(patientList));
}

function getPatientListFromLocalStorage(){
  const data = JSON.parse(localStorage.getItem('PatientList'));
  if(data){
    patientList = data;
  }else{
    patientList = [];
  }
}

function removePatientListFromLocalStorage(){
  localStorage.removeItem('PatientList');
  patientList = [];
}

function removePatientList(){
  for(i=patientList.length;i>0;i--){
    document.getElementById("myTable").deleteRow(i);
  }
  removePatientListFromLocalStorage();

}

function initialize(){
  getPatientListFromLocalStorage();

  if(patientList){
    for(var i=0;i<patientList.length;i++){
      insertRowToTable(patientList[i]);
    }
  }
}  

function submitpatient(patient){

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
         // document.getElementById("demo").innerHTML = this.responseText;
         alert(this.responseText)
   }
  };
  xhttp.open("POST"," http://localhost:8080/submitPatientData",true );
  xhttp.setRequestHeader("Content-type","application/json");
  console.log("datadata", patient)
  var data = JSON.stringify(patient); 
  console.log("called", data)
  xhttp.send(data);


  
}  


