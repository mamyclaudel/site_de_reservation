var check = document.getElementById('checkbox');

check.addEventListener("change", function(){
    var password = document.getElementById('mdp');
    if(check.checked){
        password.setAttribute("type", "text");
    }else{
        password.setAttribute("type", "password");
    }
})