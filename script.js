let hello = "Jonas"

let manadspeng = 40;
let months = 12;

let summa = manadspeng * months;

console.log("Hello " + hello + "!")
console.log("Du sparar på en " + months + " månader " + summa + "kr!")

let doColorBtn = document.getElementById("doColorBtn")

doColorBtn.addEventListener("click", () => {

    let setColor = document.getElementById("setColor").value

    console.log("click på knapp! Sätt färg till " + setColor)

    document.body.style.backgroundColor = setColor;
    
})

