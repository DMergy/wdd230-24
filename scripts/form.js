const inputPassword = document.getElementById("password");
const inputPasswordConfirm = document.getElementById("confirmPassword")
const rangeInput = document.getElementById("rate")
const message = document.getElementById("passwordMsg");

inputPasswordConfirm.addEventListener("change", () => {

    if (inputPassword.value !== inputPasswordConfirm.value) {
        message.textContent = "Password does not match.";
        inputPasswordConfirm.style.backgroundColor = "#f00";
    }
    else {
        message.textContent = "";
        inputPasswordConfirm.style.backgroundColor = "fff";
    }
});

rangeInput.addEventListener("change", () => {
    document.getElementById("rateValue").innerText = rangeInput.value;
})

