cont=0;
async function seleccionar(element){
    console.log("Holaaaaaaa");
    respaldo = document.getElementById("caja-libro-seleccionados").innerHTML;
    console.log(respaldo);
    id = element.id;
    console.log(id);
    id2= document.getElementsByName(id).id;
    //console.log('Valor de ID2', id2);
    
    console.log("id2222");
    console.log(id2);
    const response = await fetch("../JSON/catalogo2.json");
    const json = await response.json();
    var html = "";
    html = respaldo;
    if (id )
    for (var n in json.libros){
        console.log(json.libros[n].id)
        if (id == json.libros[n].id){
        console.log("AAA")
        console.log(json.libros[n].nombre);
        html+=`

        <div class="product-card">
        <div class="product-image">
                <img name="${json.libros[n].id}"src=${json.libros[n].img} class="product-thumb" alt="" id="${json.libros[n].id}" onclick="abrir(this)">
            <button class="card-btn">Agregar al carrito</button>
        </div>
        <div class="product-info">
            
                <h2 class="product-brand" id="${json.libros[n].id}" onclick="abrir(this)">${json.libros[n].nombre}</h2>
        
            <p class="product-short-description">${json.libros[n].autor}</p>
            <span class="price">${json.libros[n].precio}</span>
        </div>
        </div>
        
    `;
    document.getElementById("caja-libro-seleccionados").innerHTML = html;} 
    //document.getElementById("caja-libro-seleccionados").innerHTML = html; 
    }
    //document.getElementById("caja-libro-seleccionados").innerHTML = html;
  }

async function onloadC(){
const response = await fetch("../JSON/catalogo2.json");
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
        <button class="card-btn" id="${json.libros[n].id}" onclick ="seleccionar(this)">Agregar al carrito</button>
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
    const response = await fetch("../JSON/catalogo2.json");
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
            <button class="card-btn">Agregar al carrito</button>
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
