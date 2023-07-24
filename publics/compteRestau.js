var button_parametre = document.getElementById('select_button_parametre');
var button_publication = document.getElementById('button_publication');
var button_agenda = document.getElementById('button_agenda');
var button_notification = document.getElementById('button_notification');

//Profil
var profil = document.getElementById("profil");
profil.addEventListener("click", function(){
    var contenu_compte = document.getElementById('contenu_compte');
    var contenu_profil = `
        <div class="row">
            <div class ="col-md-4"></div>
            <div class ="col-md-4 ">
                <div class ="row">
                    <div class ="col-md-10 text-center">
                        <h4 class="text-center">Mon profil : </h4>
                    </div>
                    <div class ="col-md-2">
                        <img src="../publics/images/modifier.png" alt="Modifier" style="height:20px; cursor: pointer" id="">
                    </div>
                </div>
            </div>
            <div class ="col-md-4"></div>
        </div>
        <div class="row">
            <div class ="col-md-4"></div>
            <div class ="col-md-4 border shadow p-4">
                <p><strong>Raison social :</strong> ${raison_social} </p>
                <p><strong>Nombre d'étoile :</strong> ${nombre_etoile} <img style="height:15px;" class="" src="../publics/images/etoile.png" alt="etoile"></p>
                <p><strong>Adresse :</strong> ${adresse}</p>
                <p><strong>Ville :</strong> ${ville}</p>
                <p><strong>Distance du centre ville :</strong> ${distance_ville} Km</p>
                <p><strong>E-mail :</strong> ${mail} </p>
                <p><strong>Téléphone :</strong> ${telephone} </p>
                <p><strong>CIN :</strong> ${cin} </p>
                <p><strong>Description :</strong> ${description} </p>
                <p><strong>mot de passe :</strong> ${mot_de_passe} </p>
            </div>
            <div class ="col-md-4"></div>
        </div>
    `;
    contenu_compte.innerHTML = contenu_profil;
}, false);


//Button paramètre
button_parametre.addEventListener("change", function(e){
    console.log(this.value);
    if(this.value == "deconnecter"){
        confirm("Vous êtes sûre de se déconnecter?" );
        document.location.href="../controls/deconnection?action=deconnecter";
    }
}, false);


//button publication
button_publication.addEventListener("click", function(){
    var contenu_compte = document.getElementById("contenu_compte");
    var contenu_publication = `
    
    <div class = "sous_menu col-md-1">
        <p class="text-center text-muted btn" style="cursor:pointer; margin-bottom : -2px;" id="publiee">Publiée</p>
    </div>
    <div class = "sous_menu  col-md-1">
        <p class="text-center text-muted btn" style="cursor:pointer; margin-bottom : -2px;" id="brouillon">Brouillon</p>
    </div>
    <div class = "sous_menu col-md-1">
        <p class="text-center text-muted btn" style="cursor:pointer; margin-bottom : -2px;" id="corbeille">Corbeille</p>
    </div><hr/>
    <div class = "col-md-9"></div>
    <div class="row" id="chambre_publiee">
    
    <div class="col-md-12 publication" id = "contenuChambre" style =" height :550px; overflow-y: auto;">
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
                            <div class="col-6">
                                <p class="text-muted">01-05-2023</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                            </div>
                            <div class="col-md-3">
                                <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                            <div class="col-6">
                                <p class="text-muted">01-05-2023</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                            </div>
                            <div class="col-md-3">
                                <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                            <div class="col-6">
                                <p class="text-muted">01-05-2023</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                            </div>
                            <div class="col-md-3">
                                <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                            <div class="col-6">
                                <p class="text-muted">01-05-2023</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                            </div>
                            <div class="col-md-3">
                                <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                            <div class="col-6">
                                <p class="text-muted">01-05-2023</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                            </div>
                            <div class="col-md-3">
                                <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                            <div class="col-6">
                                <p class="text-muted">01-05-2023</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                            </div>
                            <div class="col-md-3">
                                <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                            <div class="col-6">
                                <p class="text-muted">01-05-2023</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                            </div>
                            <div class="col-md-3">
                                <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                            <div class="col-6">
                                <p class="text-muted">01-05-2023</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                            </div>
                            <div class="col-md-3">
                                <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                            <div class="col-6">
                                <p class="text-muted">01-05-2023</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                            </div>
                            <div class="col-md-3">
                                <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </div>
    
    `;

    contenu_compte.innerHTML = contenu_publication;

    var btn_publiee = document.getElementById("publiee");
    var btn_brouillon = document.getElementById('brouillon');
    var btn_corbeille = document.getElementById('corbeille');
    //button bubliée
    btn_publiee.addEventListener("click", function(){
        var contenu_chambre = document.getElementById('chambre_publiee');
        var chambre = `
        <div class="col-md-12 publication" id = "contenuChambre" style =" height :460px; overflow-y: auto;">
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
                                <div class="col-6">
                                    <p class="text-muted">01-05-2023</p>
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                                <div class="col-6">
                                    <p class="text-muted">01-05-2023</p>
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                                <div class="col-6">
                                    <p class="text-muted">01-05-2023</p>
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                                <div class="col-6">
                                    <p class="text-muted">01-05-2023</p>
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                                <div class="col-6">
                                    <p class="text-muted">01-05-2023</p>
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                                <div class="col-6">
                                    <p class="text-muted">01-05-2023</p>
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                                <div class="col-6">
                                    <p class="text-muted">01-05-2023</p>
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                                <div class="col-6">
                                    <p class="text-muted">01-05-2023</p>
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
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
                                <div class="col-6">
                                    <p class="text-muted">01-05-2023</p>
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-outline-dark btn-block"><img src="../publics/images/modifier.png" alt="Modifier" style="height:20px;" id=""></button>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-outline-dark btn-block" title="Supprimer"><img src="../publics/images/supprimer.png" alt="Supprimer" style="height:20px;" id=""></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
        contenu_chambre.innerHTML = chambre;
    }, false);
    //button brouillon
    btn_brouillon.addEventListener("click", function(){
        var contenu_chambre = document.getElementById('chambre_publiee');
        var brouillon = `
            <div class="col-md-2">
                <h5 class="text-center">Brouillon</h5>
            </div>
        `;
        contenu_chambre.innerHTML = brouillon;
    }, false);
    //button brouillon
    btn_corbeille.addEventListener("click", function(){
        var contenu_chambre = document.getElementById("chambre_publiee");
        var corbeille =  `
        <div class="col-md-2">
            <h5 class="text-center">Corbeille</h5>
        </div>
        `;
        contenu_chambre.innerHTML = corbeille;
    }, false);
}, false);


//Button agenda
button_agenda.addEventListener("click", function(){
    var contenu_compte = document.getElementById("contenu_compte");
    var contenu_agenda = `
        <h6>Calendrier</h6>
    `;
    contenu_compte.innerHTML = contenu_agenda;
},false);


//Button notification
button_notification.addEventListener("click", function(){
    var contenu_compte = document.getElementById("contenu_compte");
    var contenu_notification = `
    <div class = "sous_menu col-md-2">
    <p class="text-center text-muted btn" style="cursor:pointer; margin-bottom : -2px;" >Commentaires</p>
</div>
<div class = "sous_menu  col-md-1">
    <p class="text-center text-muted btn" style="cursor:pointer; margin-bottom : -2px;" >E-mail</p>
</div>
<hr/>
<div class = "col-md-9"></div>
<div class="row" id=""></div>

`;
    contenu_compte.innerHTML = contenu_notification;
}, false);