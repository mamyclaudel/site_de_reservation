<?php
session_start();
require ("../models/database.php");
echo "bjr 1</br>";
if('submit'){
    echo "bjr btn 2</br>";
    if(isset($_POST["raison_social"]) && isset($_POST["etoile"]) && isset($_POST["adresse"]) && isset($_POST["ville"]) && isset($_POST["distance"]) && isset($_POST["description"]) && isset($_POST["email"]) && isset($_POST["cin"]) && isset($_POST["password"]) && isset($_POST["tel"])){
        $raison_social = htmlspecialchars($_POST["raison_social"]);
        $etoile = htmlspecialchars($_POST["etoile"]);
        $adresse = htmlspecialchars($_POST["adresse"]);
        $ville = htmlspecialchars($_POST["ville"]);
        $distance = htmlspecialchars($_POST["distance"]);
        $description = htmlspecialchars($_POST["description"]);
        $mail = htmlspecialchars($_POST["email"]);
        $cin = intval($_POST["cin"]);
        $password = htmlspecialchars(sha1($_POST["password"]));
        $tel =intval($_POST["tel"]);

        var_dump($raison_social, $etoile, $adresse, $ville, $distance, $description, $mail, $cin, $password, $tel);

        if(isset($_FILES["logo"]) AND $_FILES["logo"]["error"]==0){
            if($_FILES["logo"]["size"] <= 1000000){
                $infosfichier = pathinfo($_FILES["logo"]["name"]);
                $extension_upload = $infosfichier["extension"];
                $extension_autorisees = array("jpg", "jpeg", "png");
                if(in_array($extension_upload, $extension_autorisees)){
                    move_uploaded_file($_FILES["logo"]["tmp_name"], "../publics/images/" . $raison_social . $password."." . $extension_upload);
                    echo "bjr image</br>";
                    $image = $raison_social . $password."." . $extension_upload;
                    var_dump($image);

                    // $select = $conn->prepare("SELECT * FROM `membre_restaurant` WHERE `raison_social`=? AND `mot_de_passe`=?");
                    // $result_select = $select->execute([$raison_social, $password]);
                    // $donnee = $select->fetchAll(PDO::FETCH_OBJ);
                    // $row = $select->rowCount();
                    $select_membre = new Database();
                    $select_membre->connect("localhost", "site_de_reservation", "root", "");
                    $row = $select_membre->select("`membre_restaurant`", "`raison_social`=? AND `mot_de_passe`=?", [$raison_social, $password]);
                    var_dump($row);

                    if($row <= 0){
                        $insert_membre = new Database();
                        $insert_membre->connect("localhost", "site_de_reservation", "root", "");
                        $donnee_insert = $insert_membre->insert("`membre_restaurant`", "`raison_social`, `nombre_etoile`, `adresse`, `ville`, `distance_ville`,`logo`, `description`, `mail`, `telephone`, `cin`, `mot_de_passe`", "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?", [$raison_social, $etoile, $adresse, $ville, $distance, $image, $description, $mail, $tel, $cin, $password]);
                        var_dump($insert_membre);
                        var_dump($donnee_insert);
                        // $insert_membre = $conn->prepare("INSERT INTO `membre_restaurant`(`raison_social`, `nombre_etoile`, `adresse`, `ville`, `distance_ville`,`logo`, `description`, `mail`, `telephone`, cin, `mot_de_passe`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                        // $result_insert = $insert_membre->execute([$raison_social, $etoile, $adresse, $ville, $distance, $image, $description, $mail, $tel, $cin, $password]); 
                        // var_dump($result_insert);
                        $_SESSION['raison_social'] = $raison_social;
                        $_SESSION['logo'] = $image; 
                        $_SESSION["telephone"] = $tel;
                        $_SESSION["nombre_etoile"] = $etoile;
                        $_SESSION["adresse"] = $adresse;
                        $_SESSION["ville"] = $ville;
                        $_SESSION["distance_ville"] = $distance;
                        $_SESSION["description"] = $description;
                        $_SESSION["mail"] = $mail;
                        $_SESSION["cin"] = $cin;
                        $_SESSION["mot_de_passe"] = $password;
                        var_dump($_SESSION);

                        header("Location: ../views/compteRestau.php");
                    }
                }
            }
        }
    }
}


