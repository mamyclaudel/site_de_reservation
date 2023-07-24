
var etablissement = document.getElementById('etablissement');

etablissement.addEventListener("change", function(){
    var contenu_inscription = document.getElementById('contenu_Inscription_Restaurant');
    console.log(this.value);

    if(this.value==="restaurant" || this.value==="hotel"){
        var contenu = `
        <div class="row">
        <div class="col-md-12 m-4">
            <form action="../controls/inscription.php" method="POST" class="form-group" enctype = "multipart/form-data">
                <div class="row">
                    <div class="col-md-4">
                        <label for="raison_socia">Raison social : </label><input class="form-control" type="text" name="raison_social" id="raison_social" autofocus><br/>
                        <label for="etoile">Nombre d'étoile : </label><input class="form-control" type="number" name="etoile" id="etoile"><br/>
                        <label for="adresse">Adresse : </label><input  class="form-control" type="text" name="adresse" id="adresse"><br/>
                        <label for="ville">Ville : </label><select class="text-center text-muted form-control" name = "ville" id="ville" style="cursor:pointer;">
                            <option value="antananarivo">Antananarivo</option>
                            <option value="antsitanana">Antsiranana</option>
                            <option value="fianarantsoa">Fianarantsoa</option>
                            <option value="toliara">Toliara</option>
                            <option value="toamasina">Toamasina</option>
                            <option value="mahajanga">Mahajanga</option>
                        </select><br/>
                    </div>
                    <div class="col-md-4">
                        <label for="distance">Distance du centre ville:</label><input class="form-control" type="number" name="distance" id="distance" ><br/>
                        <label for="logo">Logo : </label><input class="form-control" type="file" name="logo" id="logo"><br/>
                        <label for="description">Description : </label><textarea class="form-control description" name="description" id="description"></textarea><br/>
                    </div>
                    <div class="col-md-4">
                        <label for="email">E-mail : </label><input class="form-control" type="email" name="email" id="email"><br/>
                        <label for="cin">CIN : </label><input class="form-control" type="text" name="cin" id="cin" placeholder="Ex : 220120003201"><br/>
                        <label for="password">Mot de passe</label><input class="form-control" type="password" name="password" id="password"><br/>
                        <label for="tel">Numéro téléphone : </label><input class="form-control" type="tel" name="tel" id="tel" placeholder="Numéro téléphone">
                        <div class="row mt-4">
                            <div class="col-md-4"></div>
                            <di class="col-md-4">
                                <input class="btn btn-outline-primary name="enregister" btn-block" type="submit" value="Enregistrer">
                            </di>
                            <di class="col-md-4">
                                <input class="btn btn-outline-secondary btn-block"  type="button" value="Annuler">
                            </di>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        
        </div>
        `

        contenu_inscription.innerHTML =  contenu;
        var focus = document.getElementById('raison_social');
        focus.focus();
    }
    else if(this.value==="taxi"){
        var contenu = `
        <div class="row m-4">
            <div class="col-md-12">
                <form action="#" method="POST" class="form-group">
                    <div class="row">
                        <div class="col-md-4">
                            <label for="nom">Nom : </label><input class="form-control" type="text" name="nom" id="nom" placeholder="votre nom"><br/>
                            <label for="prenom">Prénom : </label><input class="form-control" type="text" name="prenom" id="prenom" placeholder="votre prénom"><br/>
                            <label for="ville">Ville : </label><select class="text-center text-muted form-control" id="ville" style="cursor:pointer;">
                                <option value="antananarivo">Antananarivo</option>
                                <option value="antsitanana">Antsiranana</option>
                                <option value="fianarantsoa">Fianarantsoa</option>
                                <option value="toliara">Toliara</option>
                                <option value="toamasina">Toamasina</option>
                                <option value="mahajanga">Mahajanga</option>
                            </select><br/>
                            <label for="stationnement">Lieu de stationnement : </label><input class="form-control" type="text" name="stationnement" id="stationnement">
                        </div>
                        <div class="col-md-4">
                            <label for="tel">Numéro téléphone : </label><input class="form-control"  type="tel" name="tel" id="tel" placeholder="Numéro téléphone"><br/>
                            <label for="mail">E-mail : </label><input class="form-control" type="email" name="mail" id="mail" placeholder="Votre adresse E-mail"><br/>
                            <label for="matricule">Numéro matricule : </label><input class="form-control" type="text" name="matricule"   id="matricule" placeholder = "Ex: 1232TAF"><br/>
                            <label for="photo">Photo : </label><input class="form-control" type="file" name="photo" id="photo"><br/>
                        </div>
                        <div class="col-md-4">
                            <label for="cin">CIN : </label><input class="form-control" type="text" name="cin" id="cin" placeholder ="Ex : 220001231225"><br/>
                            <label for="password">Mot de passe : </label><input class="form-control " type="password" name="password" id="password"><br/>
                            <div class="row mt-4">
                            <div class="col-md-4"></div>
                            <di class="col-md-4">
                                <input class="btn btn-outline-primary btn-block" type="submit" value="Enregistrer">
                            </di>
                            <di class="col-md-4">
                                <input class="btn btn-outline-secondary btn-block"  type="button" value="Annuler">
                            </di>
                        </div> 
                        </div>
                    </div>
                </form>
            </div>
        </div>
        `
        contenu_inscription.innerHTML =  contenu;
        var focus = document.getElementById('nom');
        focus.focus();
    }
    else if(this.value==="voiture de location"){
        var contenu = `
        <div class="row m-4">
            <div class="col-md-12">
                <form action="#" method="POST" class="form-group">
                    <div class="row">
                        <div class="col-md-4">
                            <label for="nom">Nom : </label><input class="form-control" type="text" name="nom" id="nom" placeholder="votre nom"><br/>
                            <label for="prenom">Prénom : </label><input class="form-control" type="text" name="prenom" id="prenom" placeholder="votre prénom"><br/>
                            <label for="ville">Ville : </label><select class="text-center text-muted form-control" id="ville" style="cursor:pointer;">
                                <option value="antananarivo">Antananarivo</option>
                                <option value="antsitanana">Antsiranana</option>
                                <option value="fianarantsoa">Fianarantsoa</option>
                                <option value="toliara">Toliara</option>
                                <option value="toamasina">Toamasina</option>
                                <option value="mahajanga">Mahajanga</option>
                            </select><br/>
                            <label for="tel">Numéro téléphone : </label><input class="form-control"  type="tel" name="tel" id="tel" placeholder="Numéro téléphone"><br/>
                            </div>
                        <div class="col-md-4">
                            <label for="cin">CIN : </label><input class="form-control" type="text" name="cin" id="cin" placeholder ="Ex : 220001231225"><br/>
                            <label for="stationnement">Lieu de stationnement : </label><input class="form-control" type="text" name="stationnement" id="stationnement"><br/>
                            <label for="matricule">Numéro matricule : </label><input class="form-control" type="text" name="matricule"   id="matricule" placeholder = "Ex: 1232TAF"><br/>
                            <label for="photo">Photo : </label><input class="form-control" type="file" name="photo" id="photo"><br/>

                        </div>
                        <div class="col-md-4">
                        <label for="mail">E-mail : </label><input class="form-control" type="email" name="mail" id="mail" placeholder="Votre adresse E-mail"><br/>
                        <label for="password">Mot de passe : </label><input class="form-control " type="password" name="password" id="password"><br/>
                            <div class="row mt-4">
                            <div class="col-md-4"></div>
                            <di class="col-md-4">
                                <input class="btn btn-outline-primary btn-block" type="submit" value="Enregistrer">
                            </di>
                            <di class="col-md-4">
                                <input class="btn btn-outline-secondary btn-block"  type="button" value="Annuler">
                            </di>

                        </div>
                    </div>
                </form>
            </div>
        </div>
        `
        contenu_inscription.innerHTML = contenu;
        var focus = document.getElementById('nom');
        focus.focus();
    }else{
        contenu_inscription.innerHTML = "";
    }
});