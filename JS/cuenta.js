async function validar(){
    const response = await fetch("../JSON/cuentas.json");
    const json = await response.json();
    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;
    for (var n in json.cuentas){
        if (json.cuentas[n].user==user){
            if(json.cuentas[n].pass==pass){
                //acceso
                console.log("si sos");
            }
        }
    }
    
}