const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const muneco = document.querySelector(".contenedor-muneco");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");



botonEncriptar.onclick = encriptar;

function encriptar(){
    let cajatxt = recuperarTexto();
    if (cajatxt !=""){
    ocultarAdelante();
    }
    else {alert("Debes ingresar algun texto");
}

    resultado.textContent = encriptarTexto(cajatxt);
}

function validarTexto(){
    let textoEscrito = document.querySelector(".cajatxt").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }

}


function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto [i]
        }

    }
    return textoFinal;
}

botonDesencriptar.onclick = desencriptar;

function desencriptar(){
    ocultarAdelante();
    let cajatxt = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatxt);
}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "enter"){
            textoFinal = textoFinal + "e"
            i = i+1;
        }
        else if(texto[i] == "imes"){
            textoFinal = textoFinal + "i"
            i = i+4;
        }
        else if(texto[i] == "ai"){
            textoFinal = textoFinal + "a"
            i = i+3;
        }
        else if(texto[i] == "ober"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "ufat"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto [i]
        }

    }
    return textoFinal;
}

function recuperarTexto(){
    let cajatxt = document.querySelector(".cajatxt");
    return cajatxt.value
}
/*hacer un if*/
function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

    const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
})