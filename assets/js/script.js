
document.getElementById('boton').addEventListener('click', function(event){
    
    //Para que el boton no recargue la página
    event.preventDefault();

//Extraer valores de los input!!

    //Input type text
    let valorNombre = document.getElementById('nombre').value;
    console.log(valorNombre);

    //Input type number
    let valorEdad = document.getElementById('edad').value;
    console.log(valorEdad);
    //Convertir a texto
    let edad = valorEdad.toString();

    //Input type checkbox
    let valoresComida = document.querySelectorAll('input[name=opciones]:checked');
    let valorSeleccionado = Array.from(valoresComida).map(comida => comida.value);
    console.log(valorSeleccionado);

    //Input type color
    let colorSeleccionado = document.getElementById('color').value;
    console.log(colorSeleccionado);

    //Input type text (frase favorita)
    let fraseFav = document.getElementById('frase').value;
    console.log(fraseFav);

    //Alerta código para habilitar + agregar valor del nombre

    //Código bootstrap
    const containerAlerta = document.getElementById('contenedorAlerta')
    const funcionAlerta = (message) => {
    const crearCont = document.createElement('div')
    crearCont.innerHTML = [
        `<div class="alert alert-primary alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar alerta"></button>',
        '</div>'
    ].join('')

    containerAlerta.append(crearCont)
    }

    const abrirAlerta = document.getElementById('botonAlerta')
    if (abrirAlerta) {
    abrirAlerta.addEventListener('click', () => {
        funcionAlerta('Tu nombre es: ' + valorNombre); //Input Text
    })
    }

    //Popover

    //Cambiar su contenido interno
    let botonPopover = document.getElementById('popoverBtn');
    botonPopover.setAttribute('data-bs-content', edad); //Input Number

    //Para habilitarlo (codigo BS)
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    
    //Toast

    //Cambiar su contenido interno
    let contenidoToast = document.querySelector('.toast-body');
    contenidoToast.innerHTML = valorSeleccionado; //Input Checkbox

    //Habilitarlo
    const toastTrigger = document.getElementById('toastBtn')
        const toastLiveExample = document.getElementById('liveToast')

        if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
        }

    //Poner color a offcanvas

    let cuerpo = document.getElementById('cuerpoCanvas');
    cuerpo.style.backgroundColor = colorSeleccionado; //Input Color

    //Editando los headings del Carrusel
    let tituloFrase = document.getElementById('fraseFavorita1');
    tituloFrase.innerHTML = fraseFav; //Input text (frase)

    let tituloFrase2 = document.getElementById('fraseFavorita2');
    tituloFrase2.innerHTML = 'Mi nombre es ' + valorNombre;

    let tituloFrase3 = document.getElementById('fraseFavorita3');
    tituloFrase3.innerHTML = 'Tengo ' + edad + ' años';
})
