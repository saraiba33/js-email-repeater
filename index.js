const button = document.querySelector("button")


function getOutputValue() {
    const inputVal = document.querySelector("#email-input").value;
    document.querySelector("#email-output").textContent = inputVal
}

button.addEventListener("click", event => {
    return getInputValue()
})