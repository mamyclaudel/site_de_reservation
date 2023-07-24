<?php
$erreur="";
session_start();
require ("../models/database.php");
if('submit'){
    echo "bjr1";
    if(isset($_POST["email"]) && isset($_POST["mdp"])){
        if(!empty($_POST["email"]) && !empty($_POST["mdp"])){
            $email = htmlspecialchars($_POST["email"]);
            $mot_de_passe = htmlspecialchars(sha1($_POST["mdp"]));
            var_dump($email, $mot_de_passe);

            $select = new Database;
            $select->connect("localhost", "site_de_reservation", "root", "");
            $data = $select->select("`membre_restaurant`", "`mail`=? AND `mot_de_passe`=?", [$email, $mot_de_passe]);
            // var_dump($data);
            var_dump($data[1]);
            if($data[1]>=1){
                $_SESSION["raison_social"] = $data[0][0]['raison_social'];
                $_SESSION["id"] = $data["0"]["0"]["id"];
                $_SESSION["telephone"] = $data["0"]["0"]["telephone"];
                $_SESSION["nombre_etoile"] = $data["0"]["0"]["nombre_etoile"];
                $_SESSION["adresse"] = $data["0"]["0"]["adresse"];
                $_SESSION["ville"] = $data["0"]["0"]["ville"];
                $_SESSION["distance_ville"] = $data["0"]["0"]["distance_ville"];
                $_SESSION["description"] = $data["0"]["0"]["description"];
                $_SESSION["mail"] = $data["0"]["0"]["mail"];
                $_SESSION["cin"] = $data["0"]["0"]["cin"];
                $_SESSION["mot_de_passe"] = $data["0"]["0"]["mot_de_passe"];
                $_SESSION["logo"] = $data[0][0]['logo'];
                var_dump($_SESSION);
                header("Location: ../views/compteRestau.php");
            }else{

                header("Location: http://127.0.0.1/site_de-reservation/views/login.php?action=erreur");
            }
        }
    }
}

?>
