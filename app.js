let cookieForm = document.getElementById("cookie-form");

cookieForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let { cookie, cookie_type } = event.target;
  console.log(cookie.value, cookie_type.value);
});
