function calculate() {
    let input = document.getElementById("cal").value;
    let result;

    if (input.includes("+")) {
        let parts = input.split("+");
        result = Number(parts[0]) + Number(parts[1]);
    } else if (input.includes("-")) {
        let parts = input.split("-");
        result = Number(parts[0]) - Number(parts[1]);
    } else if (input.includes("*")) {
        let parts = input.split("*");
        result = Number(parts[0]) * Number(parts[1]);
    } else if (input.includes("/")) {
        let parts = input.split("/");
        result = Number(parts[0]) / Number(parts[1]);
    } else {
        result = "Invalid Input";
    }

    document.getElementById("result").textContent = "Result: " + result;

}
let index=0;
function changeColor() {
  let colors=["red","blue","green","yellow","purple"];
  document.getElementById("color").style.color=colors[index];
  index++;
  if(index>=colors.length){
    index=0;
  }
}