function buscar(){
    dato = document.getElementById("busc").value;
    dato.toLowerCase();
    var w=window.open("busqueda.html");
    w.dato=dato;
}

async function onloadB(dato){
    const response = await fetch("JSON/catalogo2.json");
    const json = await response.json();
    console.log(json.libros);
    texto = JSON.stringify(json.libros);
    console.log("text");
    console.log(texto);
    let expresion = new RegExp(`${dato}.*`, "i");
    let filtro = json.libros.filter(libro =>expresion.test(libro.nombre));
    console.log("filtro");
    console.log(filtro);
    var html = "";
    for (var n in filtro){
        console.log("AAA")
        console.log(filtro[n].nombre);
        html+=`
        <div class="product-card">
        <div class="product-image">
                <img src=${filtro[n].img} class="product-thumb" alt="" id="${filtro[n].id}" onclick="abrir(this)">
            <button class="card-btn">Agregar al carrito</button>
        </div>
        <div class="product-info">
            
                <h2 class="product-brand" id="${filtro[n].id}" onclick="abrir(this)">${filtro[n].nombre}</h2>
        
            <p class="product-short-description">${filtro[n].autor}</p>
            <span class="price">${filtro[n].precio}</span>
        </div>
        </div>
    `;
    }
    document.getElementById("caja-resultado").innerHTML = html;
}
