var app ={};
var catalogo = datos =>{
    console.log(datos);
    app.libros=datos;
    var html = ""
    app.libros.map(libro=>{
        html+=`
        <div class="product-card" >
        <div class="product-image">
            <img src=${libro.img} class="product-thumb" alt="">
            <button class="card-btn">Agregar al carrito</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">${libro.nombre}</h2>
            <p class="product-short-description">${libro.autor}</p>
            <span class="price">${libro.precio}</span>
        </div>
    </div>
    `;
    console.log(libro.img)
    })
document.getElementById("caja-libro").innerHTML = html;
}

var app ={};
var vendidos = datos =>{
    console.log(datos);
    app.libros=datos;
    var html = ""
    app.libros.map(libro=>{
        html+=`
        <div class="product-card" >
        <div class="product-image">
            <img src=${libro.img} class="product-thumb" alt="">
            <button class="card-btn">Agregar al carrito</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">${libro.nombre}</h2>
            <p class="product-short-description">${libro.autor}</p>
            <span class="price">${libro.precio}</span>
        </div>
    </div>
    `;
    console.log(libro.img)
    })
document.getElementById("caja-libro-vendido").innerHTML = html;
}