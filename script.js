const form = document.getElementById('form')
const cardHolder = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("card-digits");
const monthExpire = document.querySelector('.monthexpire');
const yearExpire = document.querySelector('.yearexpire');
const cvc = document.getElementById('cvc');
const submit = document.querySelector('.submit');
const confirmation = document.querySelector('.confirmation');
const thankyoubtn =document.getElementById('thankyou');
const continueBtn = document.getElementById('continue')

const errorMesgName = document.querySelector('.error-message-name');
const errorMesgNumber = document.querySelector('.error-message-number');
const errorMesgMonth = document.querySelector('.error-message-month');
const errorMesgYear = document.querySelector('.error-message-year');
const errorMesgCvc = document.querySelector('.error-message-cvc');

const cardName = document.querySelector('.name');
const numOnCard = document.querySelector('.card-number');
const cardMonth = document.querySelector('.month-exp');
const cardYear = document.querySelector('.year-exp')
const cvcDisplay = document.querySelector('.security-code');


cardHolder.addEventListener('change', () => {
    cardName.textContent = cardHolder.value
})

cardNumber.addEventListener('change', () => {
    numOnCard.textContent = cardNumber.value
})

monthExpire.addEventListener('change', () => {
    cardMonth.textContent = monthExpire.value
})

yearExpire.addEventListener('change', () => {
    cardYear.textContent = yearExpire.value
})

cvc.addEventListener('change', () => {
    cvcDisplay.textContent = cvc.value
})

// FORM VALIDATION

handlesubmit = event => {
    event.preventDefault();

    const cardHolderInput = cardHolder.value.trim();
    if(cardHolderInput === '') {
        errorMesgName.classList.add("d-block")
        cardHolder.style.border = "2px solid #FF7979";
    } 
    
    const cardNumberInput = cardNumber.value.trim();
    if(cardNumberInput === '' || cardNumberInput.length < 16 || cardNumberInput.length > 19) {
        errorMesgNumber.classList.add("d-block")
        cardNumber.style.border = "2px solid #FF7979";
    } 

    const monthExpireInput = monthExpire.value.trim();
    if(monthExpireInput === '') {
        errorMesgMonth.classList.add("d-block")
        monthExpire.style.border = "2px solid #FF7979";
    }

    const yearExpireInput = yearExpire.value.trim();
    if(yearExpireInput === '') {
        errorMesgYear.classList.add("d-block")
        yearExpire.style.border = "2px solid #FF7979";
    } 

    const cvcInput = cvc.value.trim();
    if(cvcInput === '') {
        errorMesgCvc.classList.add("d-block")
        cvc.style.border = "2px solid #FF7979";
    } else {
        form.classList.add("hidden");
        confirmation.classList.remove("hidden");
    }
}

continueBtn.addEventListener("click", function () {
    form.classList.remove("hidden");
    confirmation.classList.add("hidden");
    cardHolder.value = "";
    cardNumber.value = "";
    monthExpire.value = "";
    yearExpire.value = "";
    cvc.value = "";
    cardName.innerHTML = cardHolder.placeholder;
    numOnCard.innerHTML = "0000 0000 0000 0000";
    cardMonth.innerHTML = "00";
    cardYear.innerHTML = "00";
    cvcDisplay.innerHTML = "000";
})





