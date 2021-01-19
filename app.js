
// This is use to store the data which user entered
const userName=document.querySelector(".name");
const address=document.querySelector(".address");
const phoneNumber=document.querySelector(".contactNumber");
const problem=document.querySelector(".problem");

// submit button
const submit=document.querySelector(".input-addList");
// show details
const todoList=document.querySelector(".show-list");

//submit button working
submit.addEventListener('click',addTodo);

function addTodo(e){

    
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

    var send = { "name": ""+userName.value, "address": address.value, "Phone Number":phoneNumber.value, "Problem": problem.value };
    var sendString = JSON.stringify(send);
    alert(sendString);
    xhttp.send(send);


    e.preventDefault();
}


console.log(userName);