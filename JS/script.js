
const input = document.querySelector("textarea");
const result = document.querySelector(".saida"); 
const cript = document.querySelector(".crip"); 
const descript = document.querySelector(".descrip"); 
const copiar = document.querySelector(".copy"); 
let cripText; 
function criptografar() {
  if(input.value !="") {
     cripText = input.value.replace(/e/g, "enter"); 
     cripText = cripText.replace(/i/g, "imes"); 
     cripText = cripText.replace(/a/g, "ai"); 
     cripText = cripText.replace(/o/g, "ober"); 
     cripText = cripText.replace(/u/g, "ufat"); 

     result.textContent = cripText; 
     copiar.classList.add("showbutton"); 
     input.value = "";
     result.img1="none";
  }
}
function descriptografar() {
  if(input.value !="") {
    cripText = input.value.replace(/enter/g, "e");
    cripText = cripText.replace(/imes/g, "i"); 
    cripText = cripText.replace(/ai/g, "a"); 
    cripText = cripText.replace(/ober/g, "o"); 
    cripText = cripText.replace(/ufat/g, "u"); 
    
    result.textContent = cripText;
    copiar.classList.add("showbutton"); 
    input.value = "";  

  }  
}

function copiarResultado(){
  navigator.clipboard.writeText(result.textContent)
  alert("Mensagem copiada!");
}

cript.addEventListener("click", criptografar); 
descript.addEventListener("click", descriptografar); 
copiar.addEventListener("click", copiarResultado); 