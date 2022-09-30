async function validar(){
    const response = await fetch("JSON/cuentas.json");
    const json = await response.json();
    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;
    const object = `{
        "user" : "${user}",
        "pass" : "${pass}"
    }`;
    const obj = JSON.parse(object);
    console.log(obj);
    for (var n in json.cuentas){
        if (json.cuentas[n].user==user){
            console.log("si");
            if(json.cuentas[n].pass==pass){
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
function onloadC(user, pass){
    console.log(user);
    html=`${user}`;
    document.getElementById("nombre-cuenta").innerHTML = html;
    html= `<h1>Bienvenido!</h1>
    <p id="nombre-c">${user}</p>
    <p id="direccion-c">Direccion: direccion</p>
    <p id="telefono-c">Telefono: Telefono</p>
    <a href="index.html">
    <button type="button" class="btn btn-primary">Salir</button>
    </a>`;
    document.getElementById("datos-usuario").innerHTML=html;
}

