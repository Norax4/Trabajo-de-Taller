const form = document.querySelector("#formEnvio");

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    console.log(formData);
  });
});
