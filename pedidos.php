<?php
        
        $user = $_POST["user"];
        $id = $_POST["id"];
        $libros = $_POST["librosID"];
        //$file = "JSON/".$user.".json"
        $file = "JSON/pruebapedido.json";
        $current = file_get_contents($file);
        $array_data = json_decode($current, true);
        $objeto = ["id"=>$id,"libros"=>$libros];
        $array_data[]=$objeto;
        $final_data = json_encode($array_data);
        file_put_contents($file, $final_data); 

?>