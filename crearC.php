<?php
        $user = $_POST["user"];
        $pass = $_POST["pass"];
        $libros = $_POST["libros"];
        $direccion = $_POST["direccion"];
        $telefono = $_POST["telefono"];
        $file = "JSON/cuentas.json";
        $current = file_get_contents($file);
        $array_data = json_decode($current, true);
        $objeto = ["user"=>$user,"pass"=>$pass, "direccion"=>$direccion, "telefono"=>$telefono];
        $array_data[]=$objeto;
        $final_data = json_encode($array_data);
        file_put_contents($file, $final_data); 
        $file2 = "JSON/".$user.".json";
        $current2 = file_get_contents($file2);
        $array_data2 = json_decode($current2, true);
        $objeto2 =  ["id"=>"0","libros"=>["1","2"], "envio"=>"DHL"];
        $array_data2[]=$objeto2;
        $final_data2 = json_encode($array_data2);
        file_put_contents($file2,$final_data2);
?>