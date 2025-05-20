//Extraer valores de los input

document.getElementById('boton').addEventListener('click', function(event){
    
    event.preventDefault();
    //Input type text
    let valorNombre = document.getElementById('nombre').value;
    console.log(valorNombre);
    //Input type number
    let valorEdad = document.getElementById('edad').value;
    console.log(valorEdad);
    //Input type checkbox
    let valoresComida = document.querySelectorAll('input[name=opciones]:checked');
    let valorSeleccionado = Array.from(valoresComida).map(comida => comida.value);
    console.log(valorSeleccionado);
    //Input type color
    let colorSeleccionado = document.getElementById('color').value;
    console.log(colorSeleccionado);

})
