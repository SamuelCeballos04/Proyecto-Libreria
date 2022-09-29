var app ={};
var fantasia = datos =>{
    console.log(datos);
    app.libros=datos;
    var html = ""
    app.libros.map(libro=>{
        html+=`
        <div class="product-card">
        <div class="product-image">
                <img src=${libro.img} class="product-thumb" alt="" id="${libro.id}" onclick="abrir(this)">
            <button class="card-btn">Agregar al carrito</button>
    </div>
    <div class="product-info">
        
            <h2 class="product-brand" id="${libro.id}" onclick="abrir(this)">${libro.nombre}</h2>
      
        <p class="product-short-description">${libro.autor}</p>
        <span class="price">${libro.precio}</span>
    </div>
</div>
    `;
    console.log(libro.img)
    })
document.getElementById("caja-libro-fantasia").innerHTML = html;
}

var app ={};
var infantil = datos =>{
    app.libros=datos;
    var html = ""
    app.libros.map(libro=>{
        html+=`
        <div class="product-card">
            <div class="product-image">
                    <img src=${libro.img} class="product-thumb" alt="" id="${libro.id}" onclick="abrir(this)">
                <button class="card-btn">Agregar al carrito</button>
        </div>
        <div class="product-info">
            
                <h2 class="product-brand" id="${libro.id}" onclick="abrir(this)">${libro.nombre}</h2>
          
            <p class="product-short-description">${libro.autor}</p>
            <span class="price">${libro.precio}</span>
        </div>
    </div>
    `;
    })
document.getElementById("caja-libro-infantil").innerHTML = html;
}


var libros = datos =>{
    console.log(datos);
    app.libros=datos;
    var html = ""
    app.libros.map(libro=>{
        html+=`
        <div class="product-card">
        <div class="product-image">
                <img src=${libro.img} class="product-thumb" alt="" id="${libro.id}" onclick="abrir(this)">
            <button class="card-btn" id="${libro.id}" onclick="seleccionar(this)">Agregar al carrito</button>
    </div>
    <div class="product-info">
        
            <h2 class="product-brand" id="${libro.id}" onclick="abrir(this)">${libro.nombre}</h2>
      
        <p class="product-short-description">${libro.autor}</p>
        <span class="price">${libro.precio}</span>
    </div>
</div>
    `;
    console.log(libro.img)
    })
document.getElementById("caja-libro-carrito").innerHTML = html;
}


