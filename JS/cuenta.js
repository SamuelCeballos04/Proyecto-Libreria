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
        data: {user: user, pass: pass, direccion:direccion, telefono:telefono}

    });
}
function onloadC(user, pass){
    console.log(user);
    html=`${user}`;
    document.getElementById("nombre-cuenta").innerHTML = html;
    const btn = document.getElementById("btn-usuario");
    btn.setAttribute("onclick", `validar(user,pass)`);
}

function pedir2(){
    $.ajax({
        url: "pedidos.php",
        type: "POST",
        data: {user: "Franco", id: "1", libros: "1,2,3"}
    });
}

function onloadDC(user,pass,direccion,telefono){
    html=`${user}`;
    document.getElementById("nombre-cuenta").innerHTML = html;
    html= `<h1>Bienvenido!</h1>
    <p id="nombre-c">Nombre: ${user}</p>
    <p id="direccion-c">Direccion: ${direccion}</p>
    <p id="telefono-c">Telefono: ${telefono}</p>
    <a href="index.html">
    <button type="button" class="btn btn-primary">Salir</button>
    </a>`;
    document.getElementById("datos-usuario").innerHTML=html;
    const btn = document.getElementById("btn-usuario");
    btn.setAttribute("onclick", `validar(user,pass)`);
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

