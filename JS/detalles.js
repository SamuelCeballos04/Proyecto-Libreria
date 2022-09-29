/*function prueba(element){
    id = element.id;
    alert(element.id);
    return id;
}
var app ={};
var catalogo = datos =>{
    //console.log(datos);
    idr = prueba();
    console.log(idr);
    app.libros=datos;
    var html = ""
    html=`
    <div class="left-column">
      <img class="active" src="${datos.img}" heigth = "100" alt=""/>
    </div>

    <div class="right-column">

      <div class="product-description">
        <span>${libro.categoria}</span>
        <h1>${libro.nombre}</h1>
        <p>${libro.sinopsis}</p>
      </div>

      <div class="product-configuration">
        <div class="cable-config">
          <a href="https://designmodo.com/demo/product-page/#">¿Cómo funciona el pago con PayPal?</a>
        </div>
      </div>
      <div class="product-price">
        <span>$${libro.precio}</span>
        <a href="https://designmodo.com/demo/product-page/#" class="cart-btn">Añadir al carrito</a>
      </div>
    </div>
  `;
    app.libros.map(libro=>{
        idL = libro.id;
        if(idL==libro.id){
    html=`
    <div class="left-column">
      <img class="active" src="${libro.img}" heigth = "100" alt=""/>
    </div>

    <div class="right-column">

      <div class="product-description">
        <span>${libro.categoria}</span>
        <h1>${libro.nombre}</h1>
        <p>${libro.sinopsis}</p>
      </div>

      <div class="product-configuration">
        <div class="cable-config">
          <a href="https://designmodo.com/demo/product-page/#">¿Cómo funciona el pago con PayPal?</a>
        </div>
      </div>
      <div class="product-price">
        <span>$${libro.precio}</span>
        <a href="https://designmodo.com/demo/product-page/#" class="cart-btn">Añadir al carrito</a>
      </div>
    </div>
  `;
  //console.log(libro.nombre)
        }
    })
  document.getElementById("detallespro").innerHTML = html;
}
var app ={};
var vendidos = datos =>{
    //console.log(datos);
    app.libros=datos;
    var html = ""
    app.libros.map(libro=>{
        idL = libro.id;
        if(idL==libro.id){
    html=`
    <div class="left-column">
      <img class="active" src="${libro.img}" heigth = "100" alt=""/>
    </div>

    <div class="right-column">

      <div class="product-description">
        <span>${libro.categoria}</span>
        <h1>${libro.nombre}</h1>
        <p>${libro.sinopsis}</p>
      </div>

      <div class="product-configuration">
        <div class="cable-config">
          <a href="https://designmodo.com/demo/product-page/#">¿Cómo funciona el pago con PayPal?</a>
        </div>
      </div>
      <div class="product-price">
        <span>$${libro.precio}</span>
        <a href="https://designmodo.com/demo/product-page/#" class="cart-btn">Añadir al carrito</a>
      </div>
    </div>
  `;
  //console.log(libro.nombre)
        }
    })
  document.getElementById("detallespro").innerHTML = html;
}*/

/*async function prueba(element){
  id = element.id;
  console.log('aaa')
  alert(element.onclick);
  const response = await fetch("../JSON/catalogo2.json");
  const json = await response.json();
  console.log(json.libros[id]);
  var html = '';
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
          <a href="https://designmodo.com/demo/product-page/#">¿Cómo funciona el pago con PayPal?</a>
        </div>
      </div>
      <div class="product-price">
        <span>$${json.libros[id].precio}</span>
        <a href="https://designmodo.com/demo/product-page/#" class="cart-btn">Añadir al carrito</a>
      </div>
    </div>
  `;
  document.getElementById("detallespro").innerHTML = html;

}*/




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
  const response = await fetch("../JSON/catalogo2.json");
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
      <button class="busqueda-form-btn"type="button" onclick="carrito(this)">Añadir al carrito</button>
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
          <button class="card-btn">Agregar al carrito</button>
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