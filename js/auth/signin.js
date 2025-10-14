const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD

    //données factif pour le moment

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){

        //Il faudra récupérer le vrai token
        const token = "jghfghghlghkghghkghkghfgdffdfdfd";
        setToken(token);

        //placer ce token en cookie

        setCookie("role", "admin", 7);

        //Retour à la page d'acceuil
        window.location.replace("/")
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}