async function validar(){
    const response = await fetch("../JSON/cuentas.json");
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
            if(json.cuentas[n].pass==pass){
                //acceso
                console.log("si sos");
                document.cookie = obj;
                console.log("cookie");
                console.log(obj);
                if(user=="Franco")
                {
                var w=window.open("usuario.html");
                w.user=user;
                w.pass=pass;
                }
                else{
                    var w=window.open("admin.html");
                    w.user=user;
                    w.pass=pass;
                }
            }
        }
    }
    
}
function onloadC(user){
    html=`${user}`;
    document.getElementById("nombre-cuenta").innerHTML = html;
}