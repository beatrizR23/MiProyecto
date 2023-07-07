document.querySelector('body').style.backgroundColor= 'yellow';

// ACCEDE Y DEVUELVE UNA COLECCION DE ELEMENTOS POR SU SELECTOR CSS:
// miColeccion = document.querySelectorAll('*');

// CREACION DE ELMENTOS NUEVOS EN EL DOM Y AÑADIRLOS AL DOCUMENTO
// CREAMOS 'header', 'main' Y 'footer'
document.querySelector('body').appendChild(document.createElement('header'));
document.querySelector('body').appendChild(document.createElement('main'));
document.querySelector('body').appendChild(document.createElement('footer'));

// METODO 'document.createElement('tagName')' AÑADE EL NODO (ELEMENTO) AL DOM
// METODO 'document.-elementoSeleccionado-.appendChild('elemento')' AÑADE EL NODO AL DOCUMENTO VISIBLE
document.querySelector('header').appendChild(document.createElement('section'));

// CREAMOS ELEMENTOS NUEVOS GUARDANDO EN VARIABLES LA REFERENCIA A LOS ELEMENTOS 
miRaiz = document.querySelector('header');
miElemento = document.createElement('section');
miRaiz.appendChild(miElemento);
// 'innerText' PARA METER CONTENIDO A UN ELEMENTO HTML --> OJO REEMPLAZA SU CONTENIDO
// miElemento.innerText = 'Hola soy tu section';
miElemento.innerHTML += `<h1 id='titulo'>Alajas de plata</H1>`;

// CONTENEDOR DEL BLOG
// CREAMOS EL BLOQUE PRINCIPAL
miMain = document.querySelector('main');
miBlogCont = document.createElement('section');
miMain.appendChild(miBlogCont);

// CREAMOS CADA ENTRADA DEL BLOG
miEntrada = document.createElement('div');
miMain.appendChild(miEntrada);
/*segunda carpeta*/
  // CREAMOS LA ESTRUCTURA BASICA DE LA PAGINA
document.querySelector("body").appendChild(document.createElement("header"));
document.querySelector("body").appendChild(document.createElement("main"));
document.querySelector("body").appendChild(document.createElement("footer"));
// AÑADIMOS HEADER Y SU H1 DENTRO DE UNA 'section'
// CREAMOS LA 'section' DENTRO DE 'header'
miRaiz = document.querySelector("header");
miElemento = document.createElement("section");
miRaiz.appendChild(miElemento);

miRaiz.style.textAlign = "center";
miElemento.innerHTML += `<h1 id='titulo'>Mi Proyecto</h1>`;
// CREAMOS LA 'section' QUE CONTROLA LAS ENTRADAS DEL BLOG
miMain = document.querySelector("main");
miBlogCont = document.createElement("section");
miMain.appendChild(miBlogCont);
// CREAMOS EL CONTENIDO DE LA SECTION DE CONTROL
miTituloBlogCont = document.createElement("h2");
miBlogCont.appendChild(miTituloBlogCont);
miTituloBlogCont.innerText = "joyas hermosas";
miTituloBlogCont.style.textAlign = "center";
miButtonBlogCont = document.createElement("button");
miBlogCont.appendChild(miButtonBlogCont);
miButtonBlogCont.innerText = "+";
miButtonBlogCont.addEventListener('click', creaFicha);

function creaFicha() {
  // CREAMOS EL 'div' QUE VA A SER LA ENTRADA PRIMERA DEL BLOG
  miEntrada = document.createElement("div");
  miMain.appendChild(miEntrada);
  miEntrada.style.width = "70vw";
  miEntrada.style.margin = "auto";

  // ********** ESTILOS DEL 'div' --> FICHA DE LA ENTRADA **********
  miSeccionFicha = document.createElement("section");
  miEntrada.appendChild(miSeccionFicha);
  miSeccionFicha.style.display = "flex";
  miSeccionFicha.style.justifyContent = "space-evenly";

  // AÑADIMOS FOTO, PARRAFO, TITULO Y LISTA A LA SECCION DE LA FICHA
  miFotoFicha = document.createElement("img");
  miSeccionFicha.appendChild(miFotoFicha);
  miFotoFicha.setAttribute("src","/img/IMG-20230405-WA0008.jpg candongas - copia.jpg" );
  miFotoFicha.style.width = "5rem";

  miParrafoFicha = document.createElement("p");
  miSeccionFicha.appendChild(miParrafoFicha);
  miParrafoFicha.innerText = "Millhouse from Springfield";
  miParrafoFicha.style.fontSize = "0.7rem";
  miParrafoFicha.style.height = "1 rem";
  miParrafoFicha.style.alignSelf = "end";

  miTituloFicha = document.createElement("h3");
  miSeccionFicha.appendChild(miTituloFicha);
  miTituloFicha.innerText = "IDEAS DE MILLHOUSE";
  // CREAMOS LA LISTA DE NOMBRES DE LA DERECHA
  miListaFicha = document.createElement("ul");
  miSeccionFicha.appendChild(miListaFicha);
  // AÑADIMOS 5 ELEMENTOS A LA LISTA
  // CREANDO UN BUCLE FOR PARA METER 5 <li> EN LA LISTA
  miArrayLista = ["Julio", "Brigitte", "Edu", "Andres", "German"];
  for (let i = 0; i < 5; i++) {
    miElem = document.createElement("li");
    miListaFicha.appendChild(miElem);
    miElem.innerHTML = miArrayLista[i];
    miElem.style.fontSize = "0.7rem";
  }

  // CREAMOS EL 'textarea' DONDE ESCRIBIREMOS LAS IDEAS DEL BLOG
  miTextarea = document.createElement("textarea");
  miEntrada.appendChild(miTextarea);
  miTextarea.setAttribute("cols", "50");
  miTextarea.setAttribute("rows", "10");
  miTextarea.value =
    "Este es el ejemplo de entrada para mi blog de ideas.";
  miTextarea.style.width = "50vw";
  miTextarea.style.margin = "auto";
  // NO FUNCIONA 'resize'
  // miTextArea.style.resize= 'none';
  // document.querySelector('textarea').style.resize= 'none;'
}
function borraTextarea(){
  document.querySelector('#miTXTarea').value='';
}
function cuentaLetras(){
  let contador=0;

  
}
