function changeText() {
    document.getElementById("title").innerHTML = "DOM Changed!";
}
function displayInput() {
    var input = document.getElementById("nameinput").value;
    document.getElementById("output").innerHTML =  input;
}
function addTask() {
    var task = document.getElementById("task").value;
    let li=document.createElement("li");
    li.innerHTML=task;
    document.getElementById("list").appendChild(li);
}