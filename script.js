

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 */

let matrizLlaves = [["e", "enter"], ["i","imes"], ["a", "ai"] ,["o","ober"],["u", "ufat"]]; 

condicionesIniciales();

function obtenerTexto(elementoHTML) {
 return document.querySelector(elementoHTML);
}

function asignarTextoElemento(elementoHTML, textoElemento){
  let elemento = document.querySelector(elementoHTML);
  elemento.textContent = textoElemento;
}

function encriptarTexto(texto){
  texto = texto.toLowerCase(); 
  for (let i = 0; i < matrizLlaves.length; i++) {
    let regex = new RegExp(matrizLlaves[i][0], "g");
    texto = texto.replace(regex, matrizLlaves[i][1]);
  }
  return texto;
}

function btnEncriptar(){
  condicinesPresionarBoton();
  const textoEntrada = obtenerTexto(".texto_entrada").value;
  const textoEncriptado = encriptarTexto(textoEntrada);
  asignarTextoElemento('.mensaje_resultado', textoEncriptado);
}

function desencriptarTexto(texto){
  for (let i = 0; i < matrizLlaves.length; i++) {
    let regex = new RegExp(matrizLlaves[i][1], "g");
    texto = texto.replace(regex, matrizLlaves[i][0]);
  }
  return texto;
}

function btnDesencriptar(){
  condicinesPresionarBoton();
  const textoEntrada = obtenerTexto(".texto_entrada");
  const textoEncriptado = desencriptarTexto(textoEntrada);
  asignarTextoElemento('.mensaje_resultado', textoEncriptado);
}

function copiar(){
  const textoSalida = obtenerTexto(".mensaje_resultado").textContent;
  const rango = document.createRange();
  rango.selectNodeContents(obtenerTexto(".mensaje_resultado")); //elemento de seleccion
  const seleccion = window.getSelection();
  seleccion.removeAllRanges(); // Limpiar  selección previa
  seleccion.addRange(rango); // Seleccionar el contenido del elemento
  const texto = navigator.clipboard.writeText(textoSalida)
 return texto
}

function condicionesIniciales() {
  document.querySelector(".mensaje_resultado").style.display = 'none';
  document.querySelector(".boton_copiar").style.display = 'none';
}

function condicinesPresionarBoton(){
    document.querySelector(".elementos_iniciales").style.display = 'none';
    document.querySelector(".mensaje_resultado").style.display = 'block';
    document.querySelector(".boton_copiar").style.display = 'block';
}
  
