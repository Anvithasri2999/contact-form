function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error = document.getElementById("errorMsg");

    if(name === "" || email === ""){
        error.innerText = "All fields are required!";
        return false;
    }

    if(!email.includes("@")){
        error.innerText = "Enter valid email!";
        return false;
    }

    error.innerText = "Form Submitted Successfully!";
    return false;
}

function addTask(){
    let taskInput = document.getElementById("task");
    let taskValue = taskInput.value;

    if(taskValue === "") return;

    let li = document.createElement("li");
    li.innerHTML = taskValue +
        " <button onclick='this.parentElement.remove()'>Delete</button>";

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}