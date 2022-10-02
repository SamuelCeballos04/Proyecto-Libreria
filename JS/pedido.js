async function pedir(){
    idSeleccionados = document.getElementById("libros-invisible").innerHTML;
    console.log(idSeleccionados);
    const response = await fetch("prueba3.json");
    const json = await response.json();
    idPedido = 0;
    
    for(var n in json){
        libro = (json[n].id);
        libros[n] = libro;
        //console.log(json[n].id);
    }
    id=id+1;
    //console.log(id);
    id = id.toString();

    $.ajax({
        url: "pedidos.php",
        type: "POST",
        data: {id: id, libros: libros}
    });
}