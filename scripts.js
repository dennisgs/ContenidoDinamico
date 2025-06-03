
const contenedor = document.getElementById('contenedorDinamico');
const cambiarContenidoBtn = document.getElementById('cambiarContenidoBtn');
const crearElementoBtn = document.getElementById('crearElementoBtn');
const cambiarEstiloBtn = document.getElementById('cambiarEstiloBtn');

cambiarContenidoBtn.addEventListener('click', function(){
    const parrafo = contenedor.querySelector('p'); //Aca accedemos una etiqueta que no tenga ID, directamente a traves del padre
    if (parrafo){     //Este if se cumple si existe la etiqueta P o bien esta vació
        parrafo.textContent = 'El contenido de este parrafo ha sido modificado';
        console.log('Contenido de parrafo cambiado');
    }
    else{
        contenedor.innerHTML = '<p> Parrafo insertado y creado desde JS <p>';0
    }
});

crearElementoBtn.addEventListener('click', function() {
    const nuevoParrafo =  document.createElement('p'); //Aca añadimos el elemento a traves del DOOM
    nuevoParrafo.textContent = 'Este es un parrafo creado dinamicamente';  //Añadimos un texto al parrafo
    nuevoParrafo.style.color = 'purple';
    nuevoParrafo.style.fontWeight = 'bold';


    //Aca añadimos el nuevo elemento en la posición dentro 
    contenedor.appendChild(nuevoParrafo);
    console.log('Parrafo añadido dinamicamente');
});

cambiarEstiloBtn.addEventListener('click', function() {

const parrafo = document.getElementsByTagName('p');

  for (let i = 0; i < parrafo.length; i++) {
    parrafo[i].style.backgroundColor = 'black';
    parrafo[i].style.fontSize  = '20px';
    parrafo[i].style.color  = 'white';
  }
});