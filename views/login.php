<?php session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="#">
    <title>Connexion</title>
</head>
<body>

    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <h1 class="text-center" style="margin-top: 20%;">Bienvenu</h1>
            </div>
            <div class="col-md-4">
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-muted text-center mt-4 ">Connexion</h4>
                    </div>
                </div><hr/>
                
                <div class="row shadow">
                    <?php
                    if(isset($_GET['action'])){ 
                        $erreur = "Veuillez vérifier vos informations !";?>
                        <div class="erreur">
                        <p class="p-2" style="background-color: rgb(0, 255, 255); position:absolute; border-radius:10px; margin-left: 4%;";><?php echo $erreur; ?></p>
                    </div>
                    <?php
                    } ?>
                    <form action="../controls/connexion.php" class="form-group mt-4" method="POST" autocomplete ="off">
                        <input class="form-control mb-2 mt-4" type="text" name="email" id="email" placeholder="E-mail..."  autofocus>
                        <input class="form-control mb-2" type="password" name="mdp" id="mdp" placeholder="mot de passe"><br/>
                        <input class="mb-4" type="checkbox" name="checkbox" id="checkbox"><label for="checkbox" style="cursor:pointer;">Montrer le mot de passe</label>
                        <div class="row ">
                            <div class="col-md-5"></div>
                            <div class="col-md-3">
                                <input class="btn btn-outline-primary btn-block mb-4" type="submit" value="Connecter" style="padding-left: 5px;">
                            </div>
                            <div class="col-md-3">
                                <a href="../index.html">
                                    <input class="btn btn-outline-secondary btn-block mb-4" type="button" value="annuler">
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div>
    </div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="http://127.0.0.1/site_de-reservation/publics/connexion.js"></script>
</body>
</html>