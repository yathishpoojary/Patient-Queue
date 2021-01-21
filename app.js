
// This is use to store the data which user entered
const userName=document.querySelector(".name");
const address=document.querySelector(".address");
const phoneNumber=document.querySelector(".contactNumber");
const problem=document.querySelector(".problem");

let patientList = [];

// submit button
const submit=document.querySelector(".input-addList");
// show details
const todoList=document.querySelector(".show-list");

//submit button working
submit.addEventListener('click',addTodo);

// function addToTable(patientList){
//     console.log("bsdb", patientList);

//     // if($("#selector").length) {
//     //     //object already exists
//     // }
//     var table = document.createElement("pTable");
//     table.setAttribute("id", "myTable");
//     document.body.appendChild(table);

//     for (var i = 0; i < patientList.length; i++) {
//        var patient = patientList[i];
//        var row = document.createElement("TR");
   
//        var refCell = document.createElement("TD");
//        var growerCell = document.createElement("TD");
//        var itemCell = document.createElement("TD");
   
//        row.appendChild(refCell);
//        row.appendChild(growerCell);
//        row.appendChild(itemCell);
   
//        var ref = document.createTextNode(patient.pName);
//        var grower = document.createTextNode(patient.pAddress);
//        var item = document.createTextNode(patient.pNumber);
   
//        refCell.appendChild(ref);
//        growerCell.appendChild(grower);
//        itemCell.appendChild(item);
   
//        table.appendChild(row);
//        document.body.appendChild(document.createElement('hr'));
//      }

// }

function addTodo(e){

    var patient = new Object();
    patient.pName = userName.value;
    patient.pAddress = address.value;
    patient.pNumber = phoneNumber.value;
    patient.pProblem = problem.value;

    patientList.push(patient);

    addToTable(patientList);
    
    const todoDiv=document.createElement('div');
       todoDiv.className="todos";

        const todos=document.createElement('li');
        todos.className="todo-name";

        const todoAddress=document.createElement('li')
        todoAddress.className="todo-address";

        const todoNumber=document.createElement('li');
        todoNumber.className="todo-Number";

        const todoproblem=document.createElement('li');
        todoproblem.className="todoproblem";

    todos.appendChild(document.createTextNode(userName.value));
    console.log(" this is username"+userName.value);
    console.log(todos);
    

    todoAddress.appendChild(document.createTextNode(address.value));
    console.log(`this is the address ${address.value}`);

    todoNumber.appendChild(document.createTextNode(phoneNumber.value));
    todoproblem.appendChild(document.createTextNode(problem.value));


    todoDiv.appendChild(todoNumber);
    todoDiv.appendChild(todos);
    todoDiv.appendChild(todoAddress);
    todoDiv.appendChild(todoproblem);
    address.value="";
    userName.value="";

    todoList.appendChild(todoDiv);

    var send = { "name": ""+userName.value, "address": address.value , "Phone Number": phoneNumber.value , "Problem": problem.value };
    var sendString = JSON.stringify(send);
    alert(sendString);
    xhttp.send(send);


    e.preventDefault();
}


console.log(userName);

let r=exports("app.js");