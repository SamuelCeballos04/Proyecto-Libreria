async function validar(user,pass){
    const response = await fetch("JSON/cuentas.json");
    const json = await response.json();
    console.log(user);
    console.log(pass);
    if(document.getElementById("username")){
        user = document.getElementById("username").value;
        pass = document.getElementById("password").value;
    }
    const object = `{
        "user" : "${user}",
        "pass" : "${pass}"
    }`;
    const obj = JSON.parse(object);
    console.log(obj);
    console.log("aaaa");
    for (var n in json){
        if (json[n].user==user){
            console.log("si");
            if(json[n].pass==pass){
                //acceso
                console.log("si sos");
                document.cookie = obj;
                console.log("cookie");
                console.log(obj);
                if(user=="admin")
                {
                var w=window.open("admin.html");
                w.user=user;
                w.pass=pass;
                }
                else{
                    var w=window.open("usuario.html");
                    w.user=user;
                    w.pass=pass;
                }
            }
        }
    }   
}

async function crear(){
    user = document.getElementById("usernameR").value;
    pass = document.getElementById("contraseñaR").value;
    direccion = document.getElementById("direccionR").value;
    telefono = document.getElementById("telefonoR").value;
    const response = await fetch("JSON/cuentas.json");
    const json = await response.json();
    $.ajax({
        url: "crearC.php",
        type: "POST",
        data: {user: user, pass: pass, direccion:direccion, telefono:telefono, libros:"1"}

    });
}
function onloadC(user, pass){
    console.log(user);
    html=`${user}`;
    document.getElementById("nombre-cuenta").innerHTML = html;
    const btn = document.getElementById("btn-usuario");
    btn.setAttribute("onclick", `validar(user,pass)`);
}



async function onloadDC(user,pass,direccion,telefono){
    html=`${user}`;
    document.getElementById("nombre-cuenta").innerHTML = html;
    html= `<h1>Bienvenido!</h1>
    <p id="nombre-c">Nombre: ${user}</p>
    <p id="direccion-c">Direccion: ${direccion}</p>
    <p id="telefono-c">Telefono: ${telefono}</p>
    <a href="index.html">
    <button type="button" class="btn btn-primary">Salir</button>
    </a>`;
    const response = await fetch("JSON/"+user+".json");
    const json = await response.json();
    const response2 = await fetch("JSON/catalogo2.json");
    const json2 = await response2.json();
    html2="";
    html3="";
    for (var n in json){
        console.log(json[n].id);
        dentro = json[n].libros;
        if(json[n].id=="0"){
            html2+=`<h1>Pedido de Ejemplo</h1>
        <section class="product"> 
            <h2 class="product-category">Pedido</h2>
            <button class="pre-btn"><img src="img/arrow.png" alt=""></button>
            <button class="nxt-btn"><img src="img/arrow.png" alt=""></button>
            <div id="caja-libro-pedido${json[n].id}" class="product-container">
            </div>
        </section>`;
        }
        else{
        html2+=`<h1>Pedido ${json[n].id}</h1>
        <h2>Envio ${json[n].envio}</h1>
        <section class="product"> 
            <h2 class="product-category">Pedido</h2>
            <button class="pre-btn"><img src="img/arrow.png" alt=""></button>
            <button class="nxt-btn"><img src="img/arrow.png" alt=""></button>
            <div id="caja-libro-pedido${json[n].id}" class="product-container">
            </div>
        </section>`;
        }

       
    }
    document.getElementById("pedidos").innerHTML=html2;
    document.getElementById("datos-usuario").innerHTML=html;
    const btn = document.getElementById("btn-usuario");
    btn.setAttribute("onclick", `validar(user,pass)`);
}

async function cargarP(){
    const response = await fetch("JSON/"+ user + ".json");
    const json = await response.json();
    const response2 = await fetch("JSON/catalogo2.json");
    const json2 = await response2.json();
    html2="";
    html3="";
    for (var n in json){
        console.log(json[n].id);
        dentro = json[n].libros;
        for(var m in dentro){
            for (x in json2.libros){
                if(dentro[m]==json2.libros[x].id){
                console.log(json2.libros[x]);

                    html3+=`

                    <div class="product-card">
                    <div class="product-image">
                            <img name="${json2.libros[x].id}"src=${json2.libros[x].img} class="product-thumb" alt="" id="${json2.libros[x].id}" onclick="abrir(this)">
                    </div>
                    <div class="product-info">
                        
                            <h2 class="product-brand" id="${json2.libros[x].id}" onclick="abrir(this)">${json2.libros[x].nombre}</h2>
                    
                        <p class="product-short-description">${json2.libros[x].autor}</p>
                        <span class="price">${json2.libros[x].precio}</span>
                    </div>
                    </div>
                    
                `;
                console.log(json[n].id);
                
                }

            } 
            console.log(dentro[m]);

        }
        var prueba=`caja-libro-pedido${json[n].id}`;
        var documento = document.getElementById(`caja-libro-pedido${json[n].id}`);
            documento.innerHTML = html3;
            html3="";
        console.log(prueba);
    }
}

async function detallesC(user,pass){
    const response = await fetch("JSON/cuentas.json");
    const json = await response.json();
    console.log(user);
    console.log(pass);
    for (var n in json){
        if (json[n].user==user){
            console.log("si");
            if(json[n].pass==pass){
                //acceso
                console.log("si sos");
                if(user=="admin")
                {
                var w=window.open("datosadmin.html");
                w.user=user;
                w.pass=pass;
                w.direccion = json[n].direccion;
                w.telefono = json[n].telefono;
                }
                else{
                    var w=window.open("datosuser.html");
                    w.user=user;
                    w.pass=pass;
                    w.direccion = json[n].direccion;
                    w.telefono = json[n].telefono;
                }
            }
        }
    }
}

