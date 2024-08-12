
function encriptador() {
    // Para obtener el texto del textarea de entrada
    let textoEntrada = document.getElementById('textareaInput').value;

if (textoEntrada.length != 0) {
    
    // Función para reemplazar una vocal usando el operador ternario
    function vocales(vocal) {
         return vocal === 'a' ? 'ai' :
                vocal === 'e' ? 'enter' :
                vocal === 'i' ? 'imes' :
                vocal === 'o' ? 'ober' :
                vocal === 'u' ? 'ufat' : vocal;
  
    }
    // Reemplaza las vocales en el texto de entrada usando un loop
    let textoSalida = '';
    for (let i = 0; i < textoEntrada.length; i++) {
        textoSalida += vocales(textoEntrada[i]);
    }
    // Coloca el texto reemplazado en el textarea de salida
    document.getElementById('textareaOutput').value = textoSalida;
    document.getElementById('personitas').style.display = 'none';
    } else {
        alert("No hay texto valido");
        document.getElementById('textareaOutput').value = '';
        document.getElementById('personitas').style.display = 'block';
    }
}

function desencriptador() {
    // Para obtener el texto del textarea de entrada
    let textoEntrada = document.getElementById('textareaInput').value;
    
    if (textoEntrada.length != 0) {
        // Función para reemplazar una vocal encriptada
        let vocalesCifradas = textoEntrada
            .replace(/ai/g, "a") 
            .replace(/enter/g, "e") 
            .replace(/imes/g, "i") 
            .replace(/ober/g, "o") 
            .replace(/ufat/g, "u");
        // Coloca el texto reemplazado en el textarea de salida y elimina la imagen
        document.getElementById('textareaOutput').value = vocalesCifradas;
        document.getElementById('personitas').style.display = 'none';
    } else {
        alert("No hay texto válido.");
        document.getElementById('textareaOutput').value = '';
        document.getElementById('personitas').style.display = 'block';
    }
}

function copiar() {
    // Obtiene el texto del textarea
    var texto = document.getElementById("textareaOutput").value; 
    navigator.clipboard.writeText(texto).then(function () {
        //swal alert personalizada
        const Toast = Swal.mixin({
           
            target: '#areaDeOutput',
            customClass: {
            container: 'position-absolute'
                        },            
            toast: true,
            position: "center",            
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: false,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
           
            icon: "success",
            title: "texto copiado.",
          });
    });
  }
