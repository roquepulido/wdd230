const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputPasswordConfirm = document.getElementById("passwordRepeat");
const rangeInput = document.getElementById("rate");
const message = document.getElementById("passwordMsg");
const submitButton = document.getElementById("submitButton");

inputPasswordConfirm.addEventListener("change", () => {
  if (inputPassword.value !== inputPasswordConfirm.value) {
    message.textContent = "Password don't match";
    inputPasswordConfirm.style.backgroundColor = "#f00";
  } else {
    message.textContent = "";
    inputPasswordConfirm.style.backgroundColor = "#fff";
  }
});

rangeInput.addEventListener("change", () => {
  document.getElementById("rateValue").innerText = rangeInput.value;
});

function activeButton() {
  if (
    inputPassword.value &&
    inputPasswordConfirm.value &&
    usernameInput.value &&
    emailInput.value
  ) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled");
  }
}
