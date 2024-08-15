const emailUsuario = document.querySelector("#emailUsuario");
const consultaUsuario = document.querySelector("#consultaUsuario");

const form = document.querySelector("#formConsulta");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailRegex.test(emailUsuario.value)
      ? emailUsuario.classList.remove("is-invalid")
      : emailUsuario.classList.add("is-invalid");

    consultaUsuario.value !== ""
      ? consultaUsuario.classList.remove("is-invalid")
      : consultaUsuario.classList.add("is-invalid");
  });
});
