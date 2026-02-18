function login() {
  const password = document.getElementById("password").value;
  if (password === "demo123") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("inbox").classList.remove("hidden");
  } else {
    document.getElementById("login-error").innerText = "Incorrect password";
  }
}

function openEmail() {
  document.getElementById("inbox").classList.add("hidden");
  document.getElementById("email-view").classList.remove("hidden");
}

function reportPhish() {
  document.getElementById("email-view").classList.add("hidden");
  document.getElementById("reported").classList.remove("hidden");
}
