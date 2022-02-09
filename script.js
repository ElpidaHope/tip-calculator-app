let bill = document.querySelector(".bill input");
let numberOfPeople = document.querySelector(".people input");
let resetBtn = document.querySelector(".calculator-result button");
let allInputsObject = document.querySelectorAll(".percentages input");
let tipAmount = document.querySelector(".tip-amount h3");
let amountPerPerson = document.querySelector(".amount-per-person h3");

let allInput = Object.values(allInputsObject)
allInput.pop()

let fivePercent = document.querySelector(".percentages input:nth-of-type(1)");
let tenPercent = document.querySelector(".percentages input:nth-of-type(2)");
let fifteenPercent = document.querySelector(".percentages input:nth-of-type(3)");
let twentyfivePercent = document.querySelector(".percentages input:nth-of-type(4)");
let fiftyPercent = document.querySelector(".percentages input:nth-of-type(5)");
let customPercent = document.querySelector(".percentages input:nth-of-type(6)");


const reset = () => {
    tipAmount.innerHTML = "$0.00"
    amountPerPerson.innerHTML = "$0.00"
    bill.value = ""
    numberOfPeople.value = ""
    let elems = document.querySelector(".active");
    elems.classList.remove("active")
    resetBtn.classList.remove("activated")
    customPercent.value = ""
}

const calculator = (input) => {
    input.addEventListener("click", () => {
        
        let elems = document.querySelector(".active");
        if (elems !== null) {
            elems.classList.remove("active")
            console.log(elems)
        }
 
        if (bill.value === "0") {
            bill.parentNode.classList.add("error")
        }

        if (numberOfPeople.value === "0") {
            numberOfPeople.parentNode.classList.add("error")
        }

        else if (numberOfPeople.value === "" || bill.value === "" || (numberOfPeople.value !== "0" && bill.value === "0") || (bill.value !== "0" && numberOfPeople === "0") || input.value === "") {
            tipAmount.innerHTML = '$0.00'
            amountPerPerson.innerHTML = "$0.00"
        }

        else {
            tipAmount.innerHTML = `$${((parseInt(bill.value) * parseInt(input.value)/100) / parseInt(numberOfPeople.value)).toFixed(2)}`;

            amountPerPerson.innerHTML = `$${(((parseInt(bill.value) * parseInt(input.value)/100) + parseInt(bill.value)) / parseInt(numberOfPeople.value)).toFixed(2)}`; 

            numberOfPeople.parentNode.classList.remove("error")
            bill.parentNode.classList.remove("error")
            resetBtn.classList.add("activated")
        }

        input.classList.add("active")
    })
}

resetBtn.addEventListener("click", reset);

calculator(fivePercent)
calculator(tenPercent)
calculator(fifteenPercent)
calculator(twentyfivePercent)
calculator(fiftyPercent)
calculator(customPercent)
