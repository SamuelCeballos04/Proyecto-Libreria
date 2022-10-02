<?php
        $user = $_POST["user"];
        $pass = $_POST["pass"];
        $direccion = $_POST["direccion"];
        $telefono = $_POST["telefono"];
        $file = "JSON/cuentas.json";
        $current = file_get_contents($file);
        $array_data = json_decode($current, true);
        $objeto = ["user"=>$user,"pass"=>$pass, "direccion"=>$direccion, "telefono"=>$telefono];
        $array_data[]=$objeto;
        $final_data = json_encode($array_data);
        file_put_contents($file, $final_data); 
?>