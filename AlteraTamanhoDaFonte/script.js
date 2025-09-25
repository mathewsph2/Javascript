/* Ao clicar nos links  as classes devem ser aplicadas ao body de acordo com a seguinte lógica:

Link aumentar: Se o texto estiver pequeno vai para regular e se o texto estiver regular vai para grande.
Link diminuir: Se o texto estiver grande vai para regular e se o texto estiver regular vai para pequeno. */


const body = document.body;
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");

aumentar.addEventListener("click", (e) => {
  e.preventDefault();

  if (body.classList.contains("texto-pequeno")) {
    body.classList.replace("texto-pequeno", "texto-regular");
  } else if (body.classList.contains("texto-regular")) {
    body.classList.replace("texto-regular", "texto-grande");
  }
});

diminuir.addEventListener("click", (e) => {
  e.preventDefault();

  if (body.classList.contains("texto-grande")) {
    body.classList.replace("texto-grande", "texto-regular");
  } else if (body.classList.contains("texto-regular")) {
    body.classList.replace("texto-regular", "texto-pequeno");
  }
});