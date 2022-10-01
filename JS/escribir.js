async function escribir(){
    const response = await fetch("prueba.json");
    const json = await response.json();
    for(var n in json){
        id = parseInt(json[n].id);
        //console.log(json[n].id);
    }
    id=id+1;
    //console.log(id);
    id = id.toString();
    //console.log(id);
    const response2 = await fetch("prueba2.json");
    const json2 = await response2.json();
    for (var n in json2){
        dentro = json2[n];
        for (var m in dentro){
            //console.log(m);
            console.log(dentro[m].id);
            pedido = parseInt(dentro[m].id);
        }
        //pedido = parseInt(json2[n].id);
        //console.log(n);
        //console.log(json2[n]);
    }
    pedido=pedido+1;
    pedido = pedido.toString();
    console.log(pedido);
    $.ajax({
        url: "escribir.php",
        type: "POST",
        data: {pedido: pedido, id: id, user: "Franco2", pass: "1234"}

    });
}