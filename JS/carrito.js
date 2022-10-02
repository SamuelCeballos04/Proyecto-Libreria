cont=0;
let librosID = []
idPedidoInt = 0;
idPedidoInt.parseInt();
prueba = 1

async function seleccionar(element){
    console.log("Holaaaaaaa");
    respaldo = document.getElementById("caja-libro-seleccionados").innerHTML;
    console.log(respaldo);
    id = element.id;
    precio = element.precio;
    console.log(id);
    id2= document.getElementsByName(id).id;
    //console.log('Valor de ID2', id2);
    
    console.log("id2222");
    //console.log(id2);
    const response = await fetch("JSON/catalogo2.json");
    const json = await response.json();

    var html = "";
    html = respaldo;
    for (var n in json.libros){
        //costo = costo + (json.libros[n].precio);
        //console.log(json.libros[n].id)
        if (id == json.libros[n].id){
    
        console.log("AAA");
        costo = parseInt(json.libros[n].precio);
        console.log(costo);
        preciototal = parseInt(document.getElementById("caja-precio").innerHTML);
        console.log("Precio Total: ", preciototal);
        preciototal = preciototal + costo;
        console.log("Precio actualizado: ", preciototal)
        document.getElementById("caja-precio").innerHTML = preciototal;
        
        librosID.push(json.libros[n].id);
        console.log(librosID)
        
        
       /*idIngresar = json.libros[n].id;
        librosIngresar = document.getElementById("tomar-id").innerHTML;
        librosIngresar = librosIngresar + idIngresar;
        document.getElementById("tomar-id").innerHTML = librosIngresar;*/
        
        
        //console.log(json.libros[n].nombre);
        //costo = console.log("Precio:", json.libros[n].precio)
        html+=`

        <div class="product-card">
        <div class="product-image">
                <img name="${json.libros[n].id}"src=${json.libros[n].img} class="product-thumb" alt="" id="${json.libros[n].id}" onclick="abrir(this)">
        </div>
        <div class="product-info">
            
                <h2 class="product-brand" id="${json.libros[n].id}" onclick="abrir(this)">${json.libros[n].nombre}</h2>
        
            <p class="product-short-description">${json.libros[n].autor}</p>
            <span class="price">${json.libros[n].precio}</span>
        </div>
        </div>
        
    `
    ;
    document.getElementById("caja-libro-seleccionados").innerHTML = html;} 
    //document.getElementById("caja-libro-seleccionados").innerHTML = html; 
    }
    document.getElementById("libros-invisible").innerHTML = librosID;
    //document.getElementById("caja-libro-seleccionados").innerHTML = html;
  }

  
  async function pedir(){

    user = document.getElementById("nombre-cuenta").innerHTML;
    //const response = await fetch("prueba3.json");
    //const json = await response.json();
    //console.log(id);
    idPedidoInt = idPedidoInt + 1;
    idPedido = idPedidoInt.toString();
    console.log("Usuario Pedido: ", user);
    console.log("ID del pedido: ", idPedido);
    console.log("ID de los libros pedidos: ", librosID);

    $.ajax({
        url: "pedidos.php",
        type: "POST",
        data: {user: user, id: idPedido, libros: prueba}
    });
}



async function calcular(element){
    console.log("Elemento caja-precio");
    respaldo = document.getElementById("caja-precio").innerHTML;
    console.log(respaldo);
    id = element.id;
    console.log(id);
    id2= document.getElementsByName(id).id;
    console.log("id2222");
    console.log(id2);
    const response = await fetch("JSON/catalogo2.json");
    const json = await response.json();
    var html = "";
    html = respaldo;
    for (var n in json.libros){
        console.log(json.libros[n].id)
        if (id == json.libros[n].id){
        console.log("AAA")
        console.log(json.libros[n].nombre);
        preciototal = (json.libros[n].precio);
        //precio += (json.libros[n].precio);
        //html+=`
        //<div class="product-info">
            //<span class="price">${json.libros[n].precio}</span>
        //</div>  
    //`
    ;
    document.getElementById("caja-precio").innerHTML = html;} 
    //document.getElementById("caja-libro-seleccionados").innerHTML = html; 
    }
    //document.getElementById("caja-libro-seleccionados").innerHTML = html;
  }

  async function tomarID(element){
    //console.log("Elemento caja-precio");
    respaldo = document.getElementById("tomar-id").innerHTML;
    //console.log(respaldo);
    id = element.id;
    //console.log(id);
    id2= document.getElementsByName(id).id;
    //console.log("id2222");
    //console.log(id2);
    const response = await fetch("JSON/catalogo2.json");
    const json = await response.json();
    var html = "";
    html = respaldo;
    for (var n in json.libros){
        //console.log(json.libros[n].id)
        if (id == json.libros[n].id){
        //console.log("AAA")
        //console.log(json.libros[n].nombre);
        librosIngresar = (json.libros[n].id);
        //precio += (json.libros[n].precio);
        //html+=`
        //<div class="product-info">
            //<span class="price">${json.libros[n].precio}</span>
        //</div>  
    //`
    ;
    document.getElementById("tomar-id").innerHTML;} 
    //document.getElementById("caja-libro-seleccionados").innerHTML = html; 
    }
    //document.getElementById("caja-libro-seleccionados").innerHTML = html;
  }

async function onloadCA(user,pass){
    html=`${user}`;
    document.getElementById("nombre-cuenta").innerHTML = html;
const response = await fetch("JSON/catalogo2.json");
const json = await response.json();
var html = "";
console.log(json.libros[1].nombre);
for (var n in json.libros){
    console.log("AAA")
    console.log(json.libros[n].nombre);
    html+=`
    <div class="product-card">
    <div class="product-image">
            <img src=${json.libros[n].img} class="product-thumb" alt="" id="${json.libros[n].id}" onclick="abrir(this)">
        <button class="card-btn" id="${json.libros[n].id}" onclick ="seleccionar(this)" onclick ="calcular(this)">Agregar al carrito</button>
    </div>
    <div class="product-info">
        
            <h2 class="product-brand" id="${json.libros[n].id}" onclick="abrir(this)">${json.libros[n].nombre}</h2>
    
        <p class="product-short-description">${json.libros[n].autor}</p>
        <span class="price">${json.libros[n].precio}</span>
    </div>
    </div>
`;  
}
document.getElementById("caja-libro-todos").innerHTML = html;
}



async function onloadS(){
    const response = await fetch("JSON/catalogo2.json");
    const json = await response.json();
    var html = "";
    console.log(json.libros[1].nombre);
    for (var n in json.libros){
        console.log("AAA")
        console.log(json.libros[n].nombre);
        html+=`

        <div class="product-card">
        <div class="product-image">
                <img src=${json.libros[n].img} class="product-thumb" alt="" id="${json.libros[n].id}" onclick="abrir(this)">
        </div>
        <div class="product-info">
            
                <h2 class="product-brand" id="${json.libros[n].id}" onclick="abrir(this)">${json.libros[n].nombre}</h2>
        
            <p class="product-short-description">${json.libros[n].autor}</p>
            <span class="price">${json.libros[n].precio}</span>
        </div>
        </div>
    `;  
    }
    document.getElementById("caja-libro-seleccionados").innerHTML = html;
    }