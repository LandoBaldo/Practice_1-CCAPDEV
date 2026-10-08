let fname = "Lean";
let lname = "Gutierrez";
const button = document.getElementById("button1");
const output = document.getElementById("firstName");
const output1 = document.getElementById("lastName")

button.addEventListener("click", () => {
    output.textContent = fname;
    output1.textContent = lname;
})

function helloWorld() {
    document.getElementById("demo").innerHTML = "Hello World!";
}

