function abrir(element){
  id = element.id;
  console.log(id);
  var w=window.open("detalles.html");
  w.id=id;
}

function carrito(element){
  id = element.id;
  console.log(id);
  var w=window.open("carrito.html");
  w.id=id;
}

async function onloadD(id){
  const response = await fetch("JSON/catalogo2.json");
  const json = await response.json();
  console.log(json.libros[id]);
  var html = "";
  html=`
  <div class="left-column">
    <img class="active" src="${json.libros[id].img}" heigth = "100" alt=""/>
  </div>

  <div class="right-column">

    <div class="product-description">
      <span>${json.libros[id].categoria}</span>
      <h1>${json.libros[id].nombre}</h1>
      <p>${json.libros[id].sinopsis}</p>
    </div>

    <div class="product-configuration">
      <div class="cable-config">
        <a href="https://www.paypal.com/es/webapps/mpp/paypal-popup">¿Cómo funciona el pago con PayPal?</a>
      </div>
    </div>
    <div class="product-price">
      <span>$${json.libros[id].precio}</span>
      <a href="cuenta.html">
      <button class="busqueda-form-btn"type="button">Añadir al carrito</button>
      </a>
    </div>
  </div>
`;

document.getElementById("detallespro").innerHTML = html;
var genero=JSON.stringify(json.libros[id].categoria);
console.log(genero);
var html2 = "";
let detalles = json.libros;
for (var n in detalles){
  if(JSON.stringify(detalles[n].categoria) == genero){
    console.log(detalles[n].nombre);
  html2+=`
  <div class="product-card">
      <div class="product-image">
              <img src=${detalles[n].img} class="product-thumb" alt="" id="${detalles[n].id}" onclick="abrir(this)">
          
  </div>
  <div class="product-info">
      
          <h2 class="product-brand" id="${detalles[n].id}" onclick="abrir(this)">${detalles[n].nombre}</h2>
    
      <p class="product-short-description">${detalles[n].autor}</p>
      <span class="price">${detalles[n].precio}</span>
  </div>
</div>
`;
  }
}
document.getElementById("caja-libro-recomendacion").innerHTML = html2;
}