const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
const imagen = document.querySelector(".areaImagen");
const texto1 = document.querySelector(".texto1");
const texto2 = document.querySelector(".texto2");
mensaje.style.display = "none"
copia.style.display = "none"



function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z\s]+$/);

    if(!validador || validador === 0) {
        function alert(){
            Swal.fire({
                icon: 'error',
                title: 'Advertencia',
                text: 'Tener en cuenta que debe ingresar al menos un caracter y solo usar letras minusculas sin acentos',
                confirmButtonText: 'Okey',
                background: '#ffe1df',
                customClass: {
                    icon: 'my-custom-icon-class',
                    confirmButton: 'swal2-styled.swal2-confirm'
                },
                didOpen: () => {
                    const confirmButton = document.querySelector('.swal2-styled.swal2-confirm');
                    confirmButton.onclick = () => {
                        location.reload();
                    };
                  }
              })}
        alert()
        return true;
    }
}

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
        mensaje.style.display ="block"
        imagen.style.display = "none"
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.display = "block"
    imagen.style.display = "none"
    copia.style.display = "block"
    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    imagen.style.display = "block"
    texto1.style.display = "none"
    texto2.style.fontSize = "22px"
    texto2.textContent = "Ingrese otro texto que desee encriptar o desencriptar"
    mensaje.style.display = "none"
    copia.style.display = "none"
    function showAlert() {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Texto copiado',
            showConfirmButton: false,
            timer: 1500,
            background: '#cff6c8',
            customClass: {
                icon: 'my-custom-icon-class'
            }
        })
    }
    showAlert();
}




