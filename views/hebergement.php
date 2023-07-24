<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../publics/hebergement.css">
    <title>Hebergements</title>
</head>
<style>
.publication::-webkit-scrollbar{
    width: 0px;
}
</style>
<body>
    
<nav class="navbar navbar-expand-sm navbar-dark bg-primary " >
    <div class="container-fluid" >
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <button class="btn btn-light btn-block m-2" ><a href="../index.html"><img style="height: 20px;" src="../publics/images/accueil.png" alt="Home"></a></button>
            </li>
            <li class="nav-item">
                <button class="btn btn-light btn-block m-2" ><a href="#"><img src="../publics/images/lit.png" alt="" style="height:20px; margin-right: 2px;">Hebergements</a></button>
            </li>
            <li class="nav-item">
                <button class="btn btn-light btn-block m-2" ><a href="./evenement.php"><img src="../publics/images/evenement.png" alt="" style="height:20px; margin-right: 2px;">Espace d'evenement</a></button>
            </li>
            <li class="nav-item">
                <button class="btn btn-light btn-block m-2"  style="padding-left:40px; padding-right: 40px;"><a href="./taxi.php"><img src="../publics/images/taxi.png" alt="" style="height:20px; margin-right: 2px;">Taxi</a></button>
            </li>
            <li class="nav-item">
                <button class="btn btn-light btn-block m-2" ><a href="./voiture_de_location.php"><img src="../publics/images/voiture-de-location.png" alt="" style="height:20px; margin-right: 2px;">Voiture de location</a></button>
            </li>
        </ul>
        </div>
    </div>
</nav>
<hr/>

    <div class="contairner-fluid" >
        <div class="row m-2">
            <div class="col-md-2">
                <button class="filtre form-control btn-block" id="filtre"><img style="height:25px;" src="../publics/images/filtre.png" alt="">Filtres</button>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-9">
                <div class="row">
                    <form action="#" method="POST" class="form-group search">
                        <div class="row">
                            <div class="col-md-4">
                                <label for="search" class="text-center">Cherchez votre Hôtel/Restaurant </label>
                            </div>
                            <div class="col-md-5">
                                <input class="search form- text-center" type="search" name="search" id="search" placeholder="Recherche..." >
                                <button class=""  type="submit"><i class="fa fa-search"></i></button>
                            </div>
                            <div class="col-md-3">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid publication" style =" height :450px; overflow-y: auto;">
        <div class="row" id="espacefiltre" ></div>
        <div class="row m-1">
            <div class="col-md-12" id = "contenuChambre" >
                <div class="row">
                    <div class="col-md-3 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3">
                                        <a href="../publics/images/logo.jpeg"><img style="height:30px; width: 30px; border-radius:50%; object-fit: cover;" src="../publics/images/logo.jpeg" alt=""></a>
                                    </div>
                                    <div class="col-md-9">
                                        <h6>Restaurant : <a href="#">Mandrosoa</a></h6>
                                        <p><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"></p>
                                    </div>
                                </div>
                                <a href="../publics/images/chambre.jpg" ><img class="form-control" style="object-fit: cover;" src="../publics/images/chambre.jpg" alt="chambre"style="height:120px;"></a>
                                <div class="row">
                                    <div class="col-md-9">
                                        <p>20000 Ar</p>
                                        <p>3 personnes</p>
                                        <p>Antananarivo</p>
                                    </div>
                                    <div class="col-md-3">2km</div>
                                    <div class="row">
                                        <div class="col-6"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-3">
                                            <button class='btn-primary' style ="border :none;">Réserver</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3">
                                        <a href="../publics/images/logo.jpeg"><img style="height:30px; width: 30px; border-radius:50%; object-fit: cover;" src="../publics/images/logo.jpeg" alt=""></a>
                                    </div>
                                    <div class="col-md-9">
                                        <h6>Restaurant : <a href="#">Mandrosoa</a></h6>
                                        <p><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"></p>
                                    </div>
                                </div>
                                <a href="../publics/images/chambre.jpg" ><img class="form-control" style="object-fit: cover;" src="../publics/images/chambre.jpg" alt="chambre"style="height:120px;"></a>
                                <div class="row">
                                    <div class="col-md-9">
                                        <p>20000 Ar</p>
                                        <p>3 personnes</p>
                                        <p>Antananarivo</p>
                                    </div>
                                    <div class="col-md-3">2km</div>
                                    <div class="row">
                                    <div class="col-6"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-3">
                                            <button class='btn-primary' style ="border :none;">Réserver</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3">
                                        <a href="../publics/images/logo.jpeg"><img style="height:30px; width: 30px; border-radius:50%; object-fit: cover;" src="../publics/images/logo.jpeg" alt=""></a>
                                    </div>
                                    <div class="col-md-9">
                                        <h6>Restaurant : <a href="#">Mandrosoa</a></h6>
                                        <p><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"></p>
                                    </div>
                                </div>
                                <a href="../publics/images/chambre.jpg" ><img class="form-control" style="object-fit: cover;" src="../publics/images/chambre.jpg" alt="chambre"style="height:120px;"></a>
                                <div class="row">
                                    <div class="col-md-9">
                                        <p>20000 Ar</p>
                                        <p>3 personnes</p>
                                        <p>Antananarivo</p>
                                    </div>
                                    <div class="col-md-3">2km</div>
                                    <div class="row">
                                    <div class="col-6"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-3">
                                            <button class='btn-primary' style ="border :none;">Réserver</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3">
                                        <a href="../publics/images/logo.jpeg"><img style="height:30px; width: 30px; border-radius:50%; object-fit: cover;" src="../publics/images/logo.jpeg" alt=""></a>
                                    </div>
                                    <div class="col-md-9">
                                        <h6>Restaurant : <a href="#">Mandrosoa</a></h6>
                                        <p><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"></p>
                                    </div>
                                </div>
                                <a href="../publics/images/chambre.jpg" ><img class="form-control" style="object-fit: cover;" src="../publics/images/chambre.jpg" alt="chambre"style="height:120px;"></a>
                                <div class="row">
                                    <div class="col-md-9">
                                        <p>20000 Ar</p>
                                        <p>3 personnes</p>
                                        <p>Antananarivo</p>
                                    </div>
                                    <div class="col-md-3">2km</div>
                                    <div class="row">
                                    <div class="col-6"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-3">
                                            <button class='btn-primary' style ="border :none;">Réserver</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3">
                                        <a href="../publics/images/logo.jpeg"><img style="height:30px; width: 30px; border-radius:50%; object-fit: cover;" src="../publics/images/logo.jpeg" alt=""></a>
                                    </div>
                                    <div class="col-md-9">
                                        <h6>Restaurant : <a href="#">Mandrosoa</a></h6>
                                        <p><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"></p>
                                    </div>
                                </div>
                                <a href="../publics/images/chambre.jpg" ><img class="form-control" style="object-fit: cover;" src="../publics/images/chambre.jpg" alt="chambre"style="height:120px;"></a>
                                <div class="row">
                                    <div class="col-md-9">
                                        <p>20000 Ar</p>
                                        <p>3 personnes</p>
                                        <p>Antananarivo</p>
                                    </div>
                                    <div class="col-md-3">2km</div>
                                    <div class="row">
                                        <div class="col-9"></div>
                                        <div class="col-3">
                                            <button class='btn-primary' style ="border :none;">Réserver</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3">
                                        <a href="../publics/images/logo.jpeg"><img style="height:30px; width: 30px; border-radius:50%; object-fit: cover;" src="../publics/images/logo.jpeg" alt=""></a>
                                    </div>
                                    <div class="col-md-9">
                                        <h6>Restaurant : <a href="#">Mandrosoa</a></h6>
                                        <p><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"></p>
                                    </div>
                                </div>
                                <a href="../publics/images/chambre.jpg" ><img class="form-control" style="object-fit: cover;" src="../publics/images/chambre.jpg" alt="chambre"style="height:120px;"></a>
                                <div class="row">
                                    <div class="col-md-9">
                                        <p>20000 Ar</p>
                                        <p>3 personnes</p>
                                        <p>Antananarivo</p>
                                    </div>
                                    <div class="col-md-3">2km</div>
                                    <div class="row">
                                        <div class="col-9"></div>
                                        <div class="col-3">
                                            <button class='btn-primary' style ="border :none;">Réserver</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3">
                                        <a href="../publics/images/logo.jpeg"><img style="height:30px; width: 30px; border-radius:50%; object-fit: cover;" src="../publics/images/logo.jpeg" alt=""></a>
                                    </div>
                                    <div class="col-md-9">
                                        <h6>Restaurant : <a href="#">Mandrosoa</a></h6>
                                        <p><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"></p>
                                    </div>
                                </div>
                                <a href="../publics/images/chambre.jpg" ><img class="form-control" style="object-fit: cover;" src="../publics/images/chambre.jpg" alt="chambre"style="height:120px;"></a>
                                <div class="row">
                                    <div class="col-md-9">
                                        <p>20000 Ar</p>
                                        <p>3 personnes</p>
                                        <p>Antananarivo</p>
                                    </div>
                                    <div class="col-md-3">2km</div>
                                    <div class="row">
                                        <div class="col-9"></div>
                                        <div class="col-3">
                                            <button class='btn-primary' style ="border :none;">Réserver</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3">
                                        <a href="../publics/images/logo.jpeg"><img style="height:30px; width: 30px; border-radius:50%; object-fit: cover;" src="../publics/images/logo.jpeg" alt=""></a>
                                    </div>
                                    <div class="col-md-9">
                                        <h6>Restaurant : <a href="#">Mandrosoa</a></h6>
                                        <p><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"></p>
                                    </div>
                                </div>
                                <a href="../publics/images/chambre.jpg" ><img class="form-control" style="object-fit: cover;" src="../publics/images/chambre.jpg" alt="chambre"style="height:120px;"></a>
                                <div class="row">
                                    <div class="col-md-9">
                                        <p>20000 Ar</p>
                                        <p>3 personnes</p>
                                        <p>Antananarivo</p>
                                    </div>
                                    <div class="col-md-3">2km</div>
                                    <div class="row">
                                        <div class="col-9"></div>
                                        <div class="col-3">
                                            <button class='btn-primary' style ="border :none;">Réserver</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3">
                                        <a href="../publics/images/logo.jpeg"><img style="height:30px; width: 30px; border-radius:50%; object-fit: cover;" src="../publics/images/logo.jpeg" alt=""></a>
                                    </div>
                                    <div class="col-md-9">
                                        <h6>Restaurant : <a href="#">Mandrosoa</a></h6>
                                        <p><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px;" class="mb-2" src="../publics/images/etoile.png" alt="1"></p>
                                    </div>
                                </div>
                                <a href="../publics/images/chambre.jpg" ><img class="form-control" style="object-fit: cover;" src="../publics/images/chambre.jpg" alt="chambre"style="height:120px;"></a>
                                <div class="row">
                                    <div class="col-md-9">
                                        <p>20000 Ar</p>
                                        <p>3 personnes</p>
                                        <p>Antananarivo</p>
                                    </div>
                                    <div class="col-md-3">2km</div>
                                    <div class="row">
                                        <div class="col-9"></div>
                                        <div class="col-3">
                                            <button class='btn-primary' style ="border :none;">Réserver</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="../publics/hebergement.js?<?php echo rand(0, 1000); ?>"></script>
</body>
</html>