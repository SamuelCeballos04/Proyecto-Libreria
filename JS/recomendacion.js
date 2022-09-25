var app ={};

var catalogo = datos =>{
    console.log(datos);
    app.libros=datos;
    var html = ""
    app.libros.map(libro=>{
        html+=`
    <div class="product-card">
        <div class="product-image">
            <a href="../detalles.html">
                <img src=${libro.img} class="product-thumb" alt="" id="${libro.id}" onclick="prueba(this)">
            </a>
            <button class="card-btn">Agregar al carrito</button>
        </div>
        <div class="product-info">
            <a href="../detalles.html">
                <h2 class="product-brand" id="${libro.id}" onclick="prueba(this)">${libro.nombre}</h2>
            </a>
            <p class="product-short-description">${libro.autor}</p>
            <span class="price">${libro.precio}</span>
        </div>
    </div>
    `;
    console.log(libro.img)
    })
document.getElementById("caja-libro").innerHTML = html;
}