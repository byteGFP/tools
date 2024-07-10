const videos=document.getElementById('videos');
const music = document.getElementById("musica");
const imagen = document.getElementById("image");
const pdf = document.getElementById("lector");
const texto=document.getElementById("text_funcion");
const divv=document.getElementById("videos");
const divm=document.getElementById("musica");
const divi=document.getElementById("image");
const divp=document.getElementById("lector");
const panelv=document.getElementById("panelv");
const panelm=document.getElementById("panelm");
const paneli=document.getElementById("paneli");
const panelp=document.getElementById("panell");
const img_pdf=document.getElementById("nombre_archivo");
const botonpdf=document.getElementById("btnl");
const cargando = document.getElementById("cargando_animate");

var clickv=false;
var clickm=false;
var clicki=false;
var clickp=false;

/* botones de selccion ************************************* */

// boton de videos

videos.addEventListener('mouseover', function() {

    divv.style.backgroundColor =  "rgb(38,38,38)";
    divv.style.filter = 'none'

});

videos.addEventListener('mouseout', function() {

    

    if(clickv==false){
        divv.style.backgroundColor =  "transparent";
        divv.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';
    }

});

videos.addEventListener('click', () => {

    clickv=true;
    clickm=false;
    clicki=false;
    clickp=false;
    divv.style.backgroundColor =  "rgb(38,38,38)";
    divp.style.backgroundColor =  "transparent";
    divm.style.backgroundColor =  "transparent";
    divi.style.backgroundColor =  "transparent";
    panelv.style.display = 'flex';
    panelm.style.display = 'none';
    paneli.style.display = 'none';
    panelp.style.display = 'none';
    divv.style.filter = 'none'
    divm.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';
    divi.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';
    divp.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';

});

// boton de musica 

music.addEventListener('mouseover', function() {

    divm.style.backgroundColor =  "rgb(38,38,38)";
    divm.style.filter = 'none'

});

music.addEventListener('mouseout', function() {

    
    if(clickm==false){
        divm.style.backgroundColor =  "transparent";
        divm.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';
    }

});

music.addEventListener('click', () => {

    clickm=true;
    clickv=false;
    clicki=false;
    clickp=false;
    divm.style.backgroundColor =  "rgb(38,38,38)";
    divv.style.backgroundColor =  "transparent";
    divp.style.backgroundColor =  "transparent";
    divi.style.backgroundColor =  "transparent";
    panelm.style.display = 'flex';
    panelv.style.display = 'none';
    paneli.style.display = 'none';
    panelp.style.display = 'none';
    divv.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';
    divm.style.filter = 'none'
    divi.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';
    divp.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';

});

// boton de imagen

imagen.addEventListener('mouseover', function() {

    divi.style.backgroundColor =  "rgb(38,38,38)";
    divi.style.filter = 'none'

});

imagen.addEventListener('mouseout', function() {

    if(clicki==false){
        divi.style.backgroundColor =  "transparent";
        divi.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';
    }

});

imagen.addEventListener('click', () => {

    clicki=true;
    clickv=false;
    clickm=false;
    clickp=false;
    divi.style.backgroundColor =  "rgb(38,38,38)";
    divv.style.backgroundColor =  "transparent";
    divm.style.backgroundColor =  "transparent";
    divp.style.backgroundColor =  "transparent";
    paneli.style.display = 'flex';
    panelm.style.display = 'none';
    panelv.style.display = 'none';
    panelp.style.display = 'none';
    divv.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';
    divi.style.filter = 'none'
    divm.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';
    divp.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';

});

//boton de pdf

pdf.addEventListener('mouseover', function() {

    divp.style.backgroundColor =  "rgb(38,38,38)";
    divp.style.filter = 'none'

});

pdf.addEventListener('mouseout', function() {

    

    if(clickp==false){
        divp.style.backgroundColor =  "transparent";
        divp.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';
    }

});

pdf.addEventListener('click', () => {

    clickp=true;
    clickv=false;
    clicki=false;
    clickm=false;
    divp.style.backgroundColor =  "rgb(38,38,38)";
    divv.style.backgroundColor =  "transparent";
    divm.style.backgroundColor =  "transparent";
    divi.style.backgroundColor =  "transparent";
    panelp.style.display = 'flex';
    panelm.style.display = 'none';
    paneli.style.display = 'none';
    panelv.style.display = 'none';
    divv.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';
    divp.style.filter = 'none'
    divm.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';
    divi.style.filter = 'drop-shadow(0 0 5px #5AE3B5)';

});

/* fin de los botones de seleccion ********************************* */

/* vistas previas de los elementos subidos ******************************* */

/*vista previa de pdf*/

document.getElementById('pdfl').addEventListener('change', function(event) {

    const file = event.target.files[0];
    const fileName = file.name;
    const fileNameElement = document.getElementById('file-name');

    if (file && file.type === 'application/pdf') {

        fileNameElement.textContent = '${fileName}';
        fileNameElement.style.display = 'block';
        img_pdf.style.display = 'flex';
        document.querySelector('.btnl').disabled = false; // Habilita el botón de convertir pdf

    } else {

        alert('Por favor, selecciona un archivo PDF.');

    }

});

//vista previa de imagen//

document.getElementById('img-enviada').addEventListener('change', function(event) {

    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    const img = document.getElementById('nombre_archivo_img');
    const fileimg = event.target.files[0];
    const fileNameimg = fileimg.name;
    const fileNameElementimg = document.getElementById('file-name-img');
    const fileReader = new FileReader();

    if (fileimg && allowedTypes.includes(fileimg.type)){

        fileNameElementimg.textContent = fileNameimg;
        fileNameElementimg.style.display = 'flex';
        img.style.display = 'flex';
        const imagen_img = document.getElementById("imagen_img");
        fileReader.readAsDataURL(fileimg);

        fileReader.onload = function(e) {

            imagen_img.style.backgroundImage = `url(${e.target.result})`;
        };

    } else {

        alert('Por favor, selecciona una imagen en formato PNG, JPEG o JPG.');

    }

});

/*vista previa de cancion */

function mostrarPrevisualizacionCancion() {

    const urlm = document.getElementById('urlm').value.trim();
    const previewDivm = document.getElementById('cancionPreview');
    previewDivm.innerHTML = ''; // Limpiar cualquier contenido previo

    // Validar si la URL es de YouTube para crear un iframe

    const youtubeRegexm = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;

    if (youtubeRegexm.test(urlm)) {

        const videoIdMatchm = urlm.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        const videoIdm = videoIdMatchm ? videoIdMatchm[1] : null;

        if (videoIdm) {

            const iframem = document.createElement('iframe');
            iframem.src = 'https://www.youtube.com/embed/${videoIdm}';
            iframem.frameBorder = 0;
            iframem.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframem.allowFullscreen = true;
            previewDivm.appendChild(iframem);

        } else {

            alert("URL de YouTube no válida.");

        }

    } else {

        // Crear un elemento video para otras URL
        const videom = document.createElement('video');
        videom.src = urlm;
        videom.controls = true;

        videom.onerror = function() {

            alert("No se pudo cargar el video. Por favor, verifica la URL.");

        };

        previewDivm.appendChild(videom);

    }
}

/*vista previa de video*/

function mostrarPrevisualizacion() {

    const url = document.getElementById('url').value.trim();
    const previewDiv = document.getElementById('preview');
    previewDiv.innerHTML = ''; // Limpiar cualquier contenido previo
    
    // Validar si la URL es de YouTube para crear un iframe

    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;

    if (youtubeRegex.test(url)) {

        const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        const videoId = videoIdMatch ? videoIdMatch[1] : null;

        if (videoId) {

            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/${videoId}';
            iframe.frameBorder = 0;
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            previewDiv.appendChild(iframe);

        } else {

            alert("URL de YouTube no válida.");

        }

    } else {

        // Crear un elemento video para otras URL
        const video = document.createElement('video');
        video.src = url;
        video.controls = true;
        previewDiv.appendChild(video);

    }
}

/* fin de las vistas previas *********************************** */

/** enviar formularios ************************************************************************************************************* */

/** enviar la url del video a python  */

$(document).ready(function() {

    $("#btn").click(function() {

        var url = $("#url").val();

        $.ajax({
            
            type: "POST",
            url: "/enviar-url",
            data: { url: url },

            beforeSend: function() {

                $("#loader").show();
                $("#preview").hide();

            },
            success: function(response) {

                $("#loader").hide();
                $("#preview").show(response);

            }
        });
      
    });

});

// conseguir la ruta del video de python para descargarlo

const desacargarbtn = document.getElementById('btnDescargarVideo').addEventListener('click', function() {

    window.location.href = '/descarga';
    document.getElementById('url').value = '';
    document.getElementById('preview').style.display = 'none';

});

// enviar url de cancion a python 

$(document).ready(function() {

    $("#btnm").click(function() {

        var urlm = $("#urlm").val();

        $.ajax({
            
            type: "POST",
            url: "/enviar-urlm",
            data: { urlm: urlm },

            beforeSend: function() {

                $("#loader").show();
                $("#cancionPreview").hide();

            },
            success: function(response) {

                $("#loader").hide();
                $("#cancionPreview").show(response);

            }
        });
      
    });

});

/** descargar el video y borrar la carpeta de python  */

const desacargarbtnm = document.getElementById('btnDescargarMusica').addEventListener('click', function() {

    window.location.href = '/descarga-musica';
    document.getElementById('urlm').value = '';
    document.getElementById('cancionPreview').style.display = 'none';

});

/**enviar imagen a python */

$(document).ready(function() {
    $('#img-enviadabtn').click(function() {
        var formData = new FormData();
        var fileInput = document.getElementById('img-enviada');
        var file = fileInput.files[0];
        formData.append('img-enviada', file);

        $('#loader4').show();
        $('#nombre_archivo_img').hide();

        $.ajax({
            url: '/img-enviada',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                if (response.success) {
                    var imageUrl = response.url;  // Utiliza la URL de la imagen devuelta por el servidor
                    $('#imagen_img').css('background-image', 'url(' + imageUrl + ')');
                    $('#file-name-img').text(response.filename).show();
                }
            },
            complete: function() {
                $('#loader4').hide();
                $('#nombre_archivo_img').show();
            }
        });
    });
});

/**borrar imagen de la carpeta y descargarla*/
const desacargarimg = document.getElementById('descargar_img-enviada').addEventListener('click', function() {

    window.location.href = '/descarga-img';
    document.getElementById('imagen_img').style.backgroundImage = 'none';
    document.getElementById('nombre_archivo_img').style.display = 'none';

});

/** fin del envio de formularios *************************************************************************************************** */