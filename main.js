const input = document.getElementsByName("email")[0];
const submitBtn = document.getElementById("submitBtn");
const dismissBtn = document.getElementById("dismissBtn");
const signUpPage = document.getElementById("sign-up");
const submissionPage = document.getElementById("submission");
const errorMsg = document.getElementById("error");
const illustration = document.getElementById("illustration");
const pageContent = document.getElementById("page-content");
const body = document.getElementsByTagName("body")[0];

function emailValidation() {
  const email = input.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

submitBtn.addEventListener("click", () => {
  if (emailValidation()) {
    submissionPage.style.display = "flex";
    dismissBtn.style.display = "flex";
    signUpPage.style.display = "none";
    submitBtn.style.display = "none";
    errorMsg.style.display = "none";
    illustration.style.display = "none";

    if (window.innerWidth > 700) {
      pageContent.style.width = "40%";
      body.style.width = "min-content";
    }
  } else {
    errorMsg.style.display = "block";
    input.focus();
  }
});

dismissBtn.addEventListener("click", () => {
  submissionPage.style.display = "none";
  dismissBtn.style.display = "none";
  signUpPage.style.display = "flex";
  illustration.style.display = "flex";
  submitBtn.style.display = "flex";
  input.value = "";
});
