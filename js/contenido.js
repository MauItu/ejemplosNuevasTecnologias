// Función para agregar un nuevo párrafo
function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    if (texto.trim() !== "") {
        contenido.innerHTML += '<p>' + texto + '</p>';
        document.getElementById("texto").value = "";
    }
}

// Función para agregar un nuevo título
function nuevoTitulo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    if (texto.trim() !== "") {
        contenido.innerHTML += '<h2>' + texto + '</h2>';
        document.getElementById("texto").value = "";
    }
}

// Función para agregar un enlace
function nuevoEnlace() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("enlaceTexto").value;
    var url = document.getElementById("enlaceURL").value;
    
    if (texto.trim() !== "" && url.trim() !== "") {
        contenido.innerHTML += '<a href="' + url + '" target="_blank">' + texto + '</a><br>';
        document.getElementById("enlaceTexto").value = "";
        document.getElementById("enlaceURL").value = "";
    }
}

// Cargar imagen en el contenido
document.getElementById('imagen').onchange = function(evt) {
    var entradaArchivo = evt.target, archivos = entradaArchivo.files;
    if (FileReader && archivos && archivos.length) {
        var imagen = new FileReader();
        imagen.onload = function() {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.setAttribute('src', imagen.result);
            etiquetaImg.setAttribute('width', '200px');
            etiquetaImg.setAttribute('height', '180px');
            document.getElementById('contenido').appendChild(etiquetaImg);
        }
        imagen.readAsDataURL(archivos[0]);
    }
};

// Función para imprimir contenido
function imprimir() {
    var divContents = document.getElementById("contenido").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
    a.document.write('<body><h1>Resultado</h1><br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}
