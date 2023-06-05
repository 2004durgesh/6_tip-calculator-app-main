let billAmount = document.getElementById("bill-amount")
let numberOfPeoples = document.getElementById("peoples")
let tipAmountPerson = document.getElementById("tip-amount-person")
let totalAmountPerson = document.getElementById("total-amount-person")
let reset = document.getElementById("reset")
let billError = document.getElementById("bill-error")
let peoplesError = document.getElementById("peoples-error")
let cards = document.querySelectorAll(".card")
let cardCustom = document.getElementsByClassName("card-custom")[0]

let cardValue = 0
let cardCustomValue = 0

let hasError = 1
let errorColor = "hsl(0, 100%, 66%)"
function showError(inputElement, errorElement, errorMessage) {
    errorElement.innerHTML = errorMessage;
    errorElement.classList.add('error');
    inputElement.style.borderColor = "hsl(0, 100%, 66%)";
}


if (billAmount.value === "0") {
    showError(billAmount, billError, "Can't be zero")
    hasError = 0
}


if (numberOfPeoples.value === "0") {
    showError(numberOfPeoples, peoplesError, "Can't be zero")
    hasError = 0
}
if (hasError) {
    function calculateTipAndTotal() {
        let billAmountShown = parseFloat(billAmount.value);
        let numberOfPeoplesShown = parseFloat(numberOfPeoples.value);

        if (isNaN(billAmountShown) || isNaN(numberOfPeoplesShown)) {
            // Handle invalid input
            return;
        }

        let tipAmountPersonShown = (billAmountShown * cardValue / 100) / numberOfPeoplesShown;
        let totalAmountPersonShown = (billAmountShown + (billAmountShown * cardValue) / 100) / numberOfPeoplesShown;

        tipAmountPerson.innerHTML = "$" + tipAmountPersonShown.toFixed(2);
        totalAmountPerson.innerHTML = "$" + totalAmountPersonShown.toFixed(2);
    }

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            cardValue = parseFloat(card.textContent);
            cardCustomValue = parseFloat(cardCustom.value)
            calculateTipAndTotal();
        });
    });

    billAmount.addEventListener("input", calculateTipAndTotal);
    numberOfPeoples.addEventListener("input", calculateTipAndTotal);
}

let loadingAnimation = document.getElementById("loading-animation");

reset.addEventListener("click", () => {
    loadingAnimation.style.display="flex"
    setTimeout(() => {
        loadingAnimation.style.display="none"
    }, 2000);
    setTimeout(()=>{

        location.reload();
    },2100)
});