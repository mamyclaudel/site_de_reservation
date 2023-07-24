<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="#">
    <title>Inscriprion</title>
</head>
<body>

    <div class="container">
        <div class="row">
            <dic class="col-md-1 mt-4 border m-2 btn btn-outline-primary btn-block" onclick="history.back()" style="cursor:pointer; padding-top: 5px;border-radius: 50%; width: 40px; height: 35px;">&#x2B9C</dic>
            <div class="col-md-11">
                <h3 class="text-center text-muted mt-4"><img style="height: 40px;" src="../publics/images/enregistrement-en-ligne.png" alt="">Inscription</h3>
            </div>
        </div><hr/>
        <div class="row shadow">
            <div class="col-md-4 ">
                    <option value=""></option>
                <p> Quel est le type de votre établissement ?</p>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-2 mt-2 mb-2">
                <form action="" method = "POST" class="form-group">
                    <select class="text-center form-control" name="etablissement" id="etablissement" style="cursor:pointer;" autofocus>
                        <option value="">	Click pour choisir &#11206</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="hotel">Hôtel</option>
                        <option value="taxi">Taxi</option>
                        <option value="voiture de location">Voiture de location</option>
                    </select>
                </form>
            </div>
        </div>
    </div>

    <div class="container" id="contenu_Inscription_Restaurant"></div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="../publics/inscription.js?<?= rand(1, 1000); ?>"></script>
</body>
</html>