<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../publics/compteRestau.css">
    <title>CompteRestau</title>
</head>
<style>
    .publication::-webkit-scrollbar{
        width: 0px;
    }
</style>
<body>
<div class="container-fluid border shadow">
    <div class="row">
        <div class="col-sm-1">
            <dic class="col-md-1 mt-2 border m-2 btn btn-outline-primary btn-block" onclick="history.back()" style="cursor:pointer; padding-top: 5px;border-radius: 50%; width: 40px; height: 35px;">&#x2B9C</dic>
        </div>
        <div class="col-sm-3 mt-2">
            <a href="../publics/images/<?= $_SESSION['logo'] ; ?>" ><img style="height:30px; width: 30px; border-radius:50%; object-fit: cover;" src="../publics/images/<?= $_SESSION['logo'] ; ?>" alt=""></a>
            <a href="#" id="profil"><h6 style=" display: inline-block;"><?= $_SESSION['raison_social'] ; ?></h6></a>
        </div>
        <div class="col-sm-2"></div>
        <div class="col-sm-1 text-center mt-2">
            <a href="http://127.0.0.1/site_de-reservation/views/compteRestau.php"><img src="../publics/images/maison.png" alt="Accueil" style="height:20px;" id="imgpublication">Accueil</a>
        </div>

        <div class="col-sm-1 mt-2 menu_compte" id="button_agenda" title="Agenda"style="display:flex; cursor:pointer;">
            <div class="col-sm-1">
                <img src="../publics/images/calendrier1.png" alt="agenda" style="height:15px;" id="agenda">            </div>
            <div class="col-sm-11">
                <p style="margin-left:15px;" class ="text_menu">Agenda</p>
            </div>
        </div>

        <div class="col-sm-1 mt-2" id="button_publication" title="Publication" style="display:flex; cursor:pointer;">
            <div class="col-sm-1">
                <img src="../publics/images/publication.png" alt="Publication" style="height:20px;" id="imgpublication">            </div>
            <div class="col-sm-11">
                <p style="margin-left:15px;">Publication</p>
            </div>
        </div>

        <div class="col-sm-1 mt-2" id="button_notification" title="Notification" style="display:flex; cursor:pointer;">
            <div class="col-sm-1">
                <img  src="../publics/images/notification.png" alt="Notification" style="height:15px;" id="imgpublication">
            </div>
            <div class="col-sm-11">
                <p style="margin-left:15px;">Notification</p>
            </div>
        </div>

        <div class="col-sm-1 mt-2" id="button_notification" title="Notification" style="display:flex; cursor:pointer;">
            <div class="col-sm-1">
                <label for="select_button_parametre"><img class="" src="../publics/images/parametres.png" alt="Parametres" style="height:20px;" id="imgpublication"></label>
            </div>
            <div class="col-sm-11">
                <select class="text-center " id="select_button_parametre" style="cursor:pointer;border:none; margin-left:15px;" >
                    <option value="parametre">Paramètre</option>
                    <option value="abonnement">Abonnement</option>
                    <option value="organisme">Organisme</option>
                    <option value="deconnecter">Déconnecter</option>
                </select>
            </div>
        </div>
    </div>
</div><hr/>
<div class="container-fluid publication" style =" height :550px; overflow-y: auto;">
    <div class="row m-1" id="contenu_compte">
        <div class="col-md-12">
            <h3 class="text-center">Tableau de bord</h3>
        </div>
    </div>
</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src = "../publics/compteRestau.js?<?= rand(1, 1000) ?>"></script>
    <script>
        var raison_social = "<?php echo $_SESSION['raison_social']; ?>" ;
        var id = "<?= $_SESSION["id"] ; ?>";
        var nombre_etoile = "<?= $_SESSION["nombre_etoile"] ; ?>";
        var adresse = "<?= $_SESSION["adresse"] ; ?>";
        var ville = "<?= $_SESSION["ville"] ; ?>";
        var distance_ville = "<?= $_SESSION["distance_ville"]; ?>";
        var description = "<?= $_SESSION["description"] ; ?> ";
        var mail = "<?= $_SESSION["mail"] ; ?>";
        var cin ="<?= $_SESSION["cin"] ; ?>";
        var mot_de_passe = "<?= $_SESSION["mot_de_passe"] ; ?>";
        var logo = "<?= $_SESSION["logo"] ; ?>";
        var telephone = "<?= $_SESSION["telephone"] ; ?>";
    </script>
</body>
</html>