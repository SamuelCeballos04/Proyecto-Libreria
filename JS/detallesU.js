function abrir(element, user, pass){
    console.log(user);
    id = element.id;
    console.log(id);
    var w=window.open("detallesU.html");
    w.id=id;
    w.user=user;
    w.pass=pass;
  }
  
  function carrito(element,user,pass){
    id = element.id;
    console.log(id);
    console.log("user",user);
    var w=window.open("carrito.html");
    w.id=id;
    w.user=user;
    w.pass=pass;
  }
  
  async function onloadD(id, user, pass){
    console.log(user);
    html=`${user}`;
    const btn = document.getElementById("btn-usuario");
    btn.setAttribute("onclick", `validar(user,pass)`);
    document.getElementById("nombre-cuenta").innerHTML = html;
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
        <button class="busqueda-form-btn"type="button" onclick="carrito(this,user,pass)">Añadir al carrito</button>
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
                <img src=${detalles[n].img} class="product-thumb" alt="" id="${detalles[n].id}" onclick="abrir(this,user,pass)">
  
    </div>
    <div class="product-info">
        
            <h2 class="product-brand" id="${detalles[n].id}" onclick="abrir(this,user,pass)">${detalles[n].nombre}</h2>
      
        <p class="product-short-description">${detalles[n].autor}</p>
        <span class="price">${detalles[n].precio}</span>
    </div>
  </div>
  `;
    }
  }
  document.getElementById("caja-libro-recomendacion").innerHTML = html2;
  }