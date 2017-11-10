var  btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  //traducir el titulo
  var title = document.querySelector("h1")

  var newTitle = "Por favor inicia sesión"

  title.innerHTML = newTitle;

  //traducir input
  var mail = document.querySelectorAll("input")[0].placeholder = "correo electronico";
  var password = document.querySelectorAll("input")[1].placeholder = "contraseña";
  var check = document.getElementById("spn").innerHTML = "recuerdame";

  //traducir botones
  var btnSingIn = document.querySelectorAll("button")[0].innerHTML = "iniciar sesion";
  var btnTranslate = document.querySelectorAll("button")[1];
  btnTranslate.innerHTML = "Traducir";

})
