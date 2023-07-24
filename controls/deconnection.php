<?php
if(isset($_GET["action"])){
    if($_GET["action"]=="deconnecter"){
        header("Location: ../index.html");
        session_destroy();

    }
}