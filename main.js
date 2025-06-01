const input = document.getElementsByName("email")[0];
const submitBtn = document.getElementById("submitBtn");
const dismissBtn = document.getElementById("dismissBtn");
const signUpPage = document.getElementById("sign-up");
const submissionPage = document.getElementById("submission");
const errorMsg = document.getElementById("error");

function emailValidation() {
  const email = input.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

submitBtn.addEventListener("click", () => {
  if (emailValidation()) {
    submissionPage.style.display = "flex";
    signUpPage.style.display = "none";
    errorMsg.style.display = "none";
  } else {
    errorMsg.style.display = "block";
    input.focus();
  }
});

dismissBtn.addEventListener("click", () => {
  submissionPage.style.display = "none";
  signUpPage.style.display = "flex";
  input.value = "";
});
