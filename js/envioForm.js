const form = document.querySelector("#formEnvio");

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombreRemitente = document.querySelector("#nombreRemitente");

    nombreRemitente.value.length === 0
      ? nombreRemitente.classList.add("is-invalid")
      : nombreRemitente.classList.remove("is-invalid");

    const direccionRemitente = document.querySelector("#direccionRemitente");

    direccionRemitente.value.length === 0
      ? direccionRemitente.classList.add("is-invalid")
      : direccionRemitente.classList.remove("is-invalid");

    const nombreDestinatario = document.querySelector("#nombreDestinatario");

    nombreDestinatario.value.length === 0
      ? nombreDestinatario.classList.add("is-invalid")
      : nombreDestinatario.classList.remove("is-invalid");

    const direccionDestinatario = document.querySelector(
      "#direccionDestinatario"
    );

    direccionDestinatario.value.length === 0
      ? direccionDestinatario.classList.add("is-invalid")
      : direccionDestinatario.classList.remove("is-invalid");

    const pesoPaquete = document.querySelector("#pesoPaquete");

    parseInt(pesoPaquete.value) !== 0
      ? pesoPaquete.classList.add("is-invalid")
      : pesoPaquete.classList.remove("is-invalid");

    const largoDelPaquete = document.querySelector("#largoDelPaquete");

    parseInt(largoDelPaquete.value) !== 0
      ? largoDelPaquete.classList.add("is-invalid")
      : largoDelPaquete.classList.remove("is-invalid");

    const anchoDelPaquete = document.querySelector("#anchoDelPaquete");

    parseInt(anchoDelPaquete.value) !== 0
      ? anchoDelPaquete.classList.add("is-invalid")
      : anchoDelPaquete.classList.remove("is-invalid");

    const altoDelPaquete = document.querySelector("#altoDelPaquete");

    parseInt(altoDelPaquete.value) !== 0
      ? altoDelPaquete.classList.add("is-invalid")
      : altoDelPaquete.classList.remove("is-invalid");

    const envioNormal = document.querySelector("#envioNormal");
    const envioUrgente = document.querySelector("#envioUrgente");

    if (envioNormal.checked || envioUrgente.checked) {
      envioNormal.classList.remove("is-invalid");
      envioUrgente.classList.remove("is-invalid");
    } else {
      envioNormal.classList.add("is-invalid");
      envioUrgente.classList.add("is-invalid");
    }

    const checkPaypal = document.querySelector("#checkPaypal");

    const checkTransferenciaBancaria = document.querySelector(
      "#checkTransferenciaBancaria"
    );

    const checkTarjetaDeCredito = document.querySelector(
      "#checkTarjetaDeCredito"
    );

    if (
      checkPaypal.checked ||
      checkTransferenciaBancaria.checked ||
      checkTarjetaDeCredito.checked
    ) {
      checkPaypal.classList.remove("is-invalid");
      checkTransferenciaBancaria.classList.remove("is-invalid");
      checkTarjetaDeCredito.classList.remove("is-invalid");
    } else {
      checkPaypal.classList.add("is-invalid");
      checkTransferenciaBancaria.classList.add("is-invalid");
      checkTarjetaDeCredito.classList.add("is-invalid");
    }

    const fechaDeEnvio = document.querySelector("#fechaDeEnvio");

    fechaDeEnvio.value !== ""
      ? fechaDeEnvio.classList.remove("is-invalid")
      : fechaDeEnvio.classList.add("is-invalid");
  });
});
