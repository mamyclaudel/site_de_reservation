
var btnfiltre = document.getElementById('filtre');
var filtreIsVisible = false;
btnfiltre.addEventListener("click", function(){
    filtreIsVisible = !filtreIsVisible;
    console.log(filtreIsVisible);
    var espaceFiltre = document.getElementById('espacefiltre');
    var espaceChambre = document.getElementById('contenuChambre');

    var contenu = `
    <div class="col-md-2 border" style = "height:500px;">
        <label for="ville">Ville : </label><select class="text-center text-muted  form-control" id="ville" style="cursor:pointer;">
            <option value="antananarivo">Antananarivo</option>
            <option value="antsitanana">Antsiranana</option>
            <option value="fianarantsoa">Fianarantsoa</option>
            <option value="toliara">Toliara</option>
            <option value="toamasina">Toamasina</option>
            <option value="mahajanga">Mahajanga</option>
        </select><br/>
        <label for="budget">Budget en ariary/nuit : </label><select class="text-center text-muted form-control" id="budget" style="cursor:pointer;">
            <option value="20000-40000">20 000 - 40 000 </option>
            <option value="50000-70000">50 000 - 70 000 </option>
            <option value="80000 et plus">80 000 et plus</option>
        </select><br/>
        <label for="distance">Distance du centre ville : </label><select class="text-center text-muted  form-control" id="distance" style="cursor:pointer;">
            <option value="20000-40000"> moins de 1km </option>
            <option value="50000-70000">1km - 5km</option>
            <option value="80000 et plus">Plus de 5km</option>
        </select><br/>
        <label for="nbr">Nombre du personne : </label><select class="text-center text-muted  form-control " id="nbr" style="cursor:pointer;">
            <option value="20000-40000"> 1 à 4 </option>
            <option value="50000-70000">5 à 8 </option>
            <option value="80000 et plus">Plus de 8</option>
        </select><br/>
        <label for="etoile">Nombre d'étoile :</label><br/>
        <input type="radio" name="etoile" id="etoile" value="aucune" style="margin-right:5px; cursor:pointer;"><label for="etoile" style="cursor:pointer;">Aucune</label><br/>
        <input type="radio" name="etoile" id="etoile1" value="1" style="cursor:pointer;"><label for="etoile1"><img style="height:15px; margin-left:5px; cursor:pointer;" class="mb-2" src="../publics/images/etoile.png" alt="1"></label><br/>
        <input type="radio" name="etoile" id="etoile2" value="2" style="cursor:pointer;"><label for="etoile2"><img style="height:15px; margin-left:5px; cursor:pointer;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px; cursor:pointer;" class="mb-2" src="../publics/images/etoile.png" alt="1"></label><br/>
        <input type="radio" name="etoile" id="etoile3" value="3" style="cursor:pointer;"><label for="etoile3"><img style="height:15px; margin-left:5px; cursor:pointer;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px; cursor:pointer;" class="mb-2" src="../publics/images/etoile.png" alt="1"><img style="height:15px; margin-left:5px; cursor:pointer;" class="mb-2" src="../publics/images/etoile.png" alt="1"></label><br/>
        <input type="radio" name="etoile" id="etoileplus" value="+3" style="margin-right:5px; cursor:pointer;"><label for="etoileplus">+ de 3 <img style="height:15px; margin-left:5px; cursor:pointer;" class="mb-2" src="../publics/images/etoile.png" alt="1"></label><br/>
    </div>
<div class="col-md-10 publication" style =" height :500px; overflow-y: auto;">
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
                                        <div class="col-5"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-4">
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
                                        <div class="col-5"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-4">
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
                                        <div class="col-5"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-4">
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
                                        <div class="col-5"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-4">
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
                                        <div class="col-5"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-4">
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
                                        <div class="col-5"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-4">
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
                                        <div class="col-5"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-4">
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
                                        <div class="col-5"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-4">
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
                                        <div class="col-5"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-4">
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
                                        <div class="col-5"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-4">
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
                                        <div class="col-5"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-4">
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
                                        <div class="col-5"></div>
                                        <div class="col-md-3">
                                        <button class="btn  btn-block" title="commentaires"><img src="../publics/images/commentaire.png" alt="commentaires" style=" padding-bottom: 10px;height:30px; border:none;" id="commentaires"></button>
                                        </div>
                                        <div class="col-4">
                                            <button class='btn-primary' style ="border :none;">Réserver</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</div>
    `;
    
    filtreIsVisible ? espaceChambre.style.display = "none" : espaceChambre.style.display = "block";
    filtreIsVisible ? espaceFiltre.innerHTML = contenu  : espaceFiltre.innerHTML = "";
    var focus= document.getElementById('ville');
    focus.focus();
});