function addStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    if (name === "" || age === "" || course === "") {
        alert("Please fill in all fields!");
        return;
    }

    let card = document.createElement("div");
    card.classList.add("student-card");

    card.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Course:</strong> ${course}</p>
        <button class="delete-button">Delete</button>
    `;

    let deleteBtn = card.querySelector(".delete-button");

    deleteBtn.onclick = function () {
        card.remove();
    };

    document.getElementById("studentList").appendChild(card);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}