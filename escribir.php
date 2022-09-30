<?php
        $user = $_POST["user"];
        $pass = $_POST["pass"];
        $id = $_POST["id"];
        $file = "prueba.json";
        $current = file_get_contents($file);
        $array_data = json_decode($current, true);
        $objeto = ["id"=>$id,"user"=>$user,"pass"=>$pass];
        $array_data[]=$objeto;
        $final_data = json_encode($array_data);
        file_put_contents($file, $final_data); 

        $pedido = $_POST["pedido"];
        $file="prueba2.json";
        $current2 = file_get_contents($file);
        $array_data2 = json_decode($current2, true);
        $objeto2 = [$pedido=>["id"=>$pedido]];
        $array_data2[]=$objeto2;
        $final_data2 = json_encode($array_data2);
        file_put_contents($file, $final_data2); 
?>