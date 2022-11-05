////////formulaire/////////////

const envoyer=document.querySelector('#envoyer');
const nom=document.querySelector('#nom');
const prenom=document.querySelector('#prenom');
const tel=document.querySelector('#tel');
const message=document.querySelector('#message');

envoyer.addEventListener("click", function() {
    let regexmail=/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
    if (regexmail.test(document.querySelector('#email').value)){
        alert('message envoyé');
        nom.value="";
        prenom.value="";
        email.value="";
        tel.value="";
        message.value="";


     } else {
        alert('veuillez entrer une adresse mail valide')
        }
    
  });


 