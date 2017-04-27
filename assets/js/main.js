var logo = document.getElementById('logo');
var imgBlanco = document.createElement('img');

imgBlanco.src = "assets/img/logo-white.png";
imgBlanco.className = "logoBlanco";


logo.appendChild(imgBlanco);



document.addEventListener("scroll", function() {
  cambioClase();
  // cambiarTexto();
  // cambiarImagen();
  // aparecerBoton();
  aparecerBoton();
});

function cambioClase() {
  var encabezado = document.getElementById('seccion1');
  encabezado.style.background = "white";
  imgBlanco.src = "assets/img/logo-pink.png";
  var menu = document.getElementsByClassName("menu-li");
  for (var i = 0; i < menu.length; i++) {
    menu[i].className = "menu-li textoNegro";
  }
}
// function cambiarImagen() {
//
// }
// function cambiarTexto() {
//
// };
function aparecerBoton() {
  var botonMostrar = document.getElementById('login');
  botonMostrar.style.display = "inline-block";
}



var botonEnviarForm = document.getElementById("enviarFormulario");
var botonSignRide = document.getElementById("signRide");
var inputIngresarNumero = document.getElementById("ingresarNumero");
var tituloFormulario=document.getElementById("tituloFormulario");
var textoSpanFormulario=document.getElementById("textoSpanFormulario");
var divVideo1=document.getElementById("divVideo1");
var divVideo2=document.getElementById("divVideo2");
var divVideo3=document.getElementById("divVideo3");


botonEnviarForm.addEventListener("click",mostrarFormularioCompleto);
botonEnviarForm.addEventListener("click",cambiarColorBotonRosa);
botonEnviarForm.addEventListener("click",cambiarTextoTurnMiles)

botonSignRide.addEventListener("click",esconderFormularioCompleto);
botonSignRide.addEventListener("click",cambiarColorBotonNada);
botonSignRide.addEventListener("click", cambiarTextoMeetYour);

inputIngresarNumero.addEventListener("click",mostrarFormularioCompleto);
divVideo1.addEventListener("click",function(){visualizarVideo(this)});
divVideo2.addEventListener("click",function(){visualizarVideo(this)});
divVideo3.addEventListener("click",function(){visualizarVideo(this)});
var divformulario= document.getElementById("imputsEscondidos");

function visualizarVideo(divVideo){
  ocultarImagen(divVideo)
  playVideo(divVideo)
}
function ocultarImagen(divVideo){
  divVideo.childNodes[1].style.display="none";
  divVideo.childNodes[3].style.display="inline-block";

}
function playVideo(divVideo){
  var liga=divVideo.childNodes[3].src;
  divVideo.childNodes[3].src=liga+"?autoplay=1";
}

function mostrarFormularioCompleto() {
  /*esta funcion debe de extender el formulario completo*/
  divformulario.className="extenderFormulario"; //clase a checar con estilos
}

function esconderFormularioCompleto() {
  /*esta funcion debe de esconder el formulario*/
  divformulario.className="esconderFormulario" //Esconde el formulario desde el css checar con estilos
}



function cambiarColorBotonRosa() {
  //esta funcion es para cambiar los colores de los botones del formulario
  botonEnviarForm.className="boton-rosa";
  botonSignRide.className="boton-nada";
}

function cambiarColorBotonNada(){
  botonEnviarForm.className="boton-nada";
  botonSignRide.className="boton-rosa";
}

function cambiarTextoMeetYour(){
    tituloFormulario.innerHTML="<strong>MEET YOUR <br> 5-STAR RIDE</strong>";
    textoSpanFormulario.innerHTML="SING UP FOR RIDE IN A TAP.";
}

function cambiarTextoTurnMiles(){
    //cambia el texto del formulario
    tituloFormulario.innerHTML="<strong>TURN MILES <br> INTO MONEY</strong>";
    textoSpanFormulario.innerHTML="SIGN UP TO DRIVE WITH LYFT.";
}
