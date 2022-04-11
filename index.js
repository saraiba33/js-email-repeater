const button = document.querySelector("button")
const ouptut = document.querySelector("#email-ouput")


function getOutputValue() {
    const inputValue = document.querySelector("#email-input").value;
    document.querySelector("#email-output").textContent = inputValue
}

button.addEventListener("click", () => {
    ouptut.textContent = getOutputValue()
})