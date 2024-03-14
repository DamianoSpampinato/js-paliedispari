//registro email
const emailRegistry = ['example1@email.com', 'example2@email.com', 'mariourbani@gmail.com'];
console.log(emailRegistry);
const newDiv = document.createElement('div')
let outputMessage;

//button funzion
const summitButton = document.querySelector('#summit');
summitButton.addEventListener('click', function(){
    let emailFound = false;
    //chidere email utente
    let userEmail = document.querySelector('#user-email').value;
    // controllare se è presente nel registro
    for(let i = 0; i < emailRegistry.length; i++) {
        const thisEmail = emailRegistry[i];
        
        //se trovo l'email la salvo
        if(thisEmail === userEmail){
            emailFound = true;
        }
        if(emailFound === true) {
            let outputMessage = 'Attendi! log- in incorso';
            
            newDiv.innerHTML = (outputMessage);
        } else {
            let outputMessage = 'Utente non registrato! Signuppa';
            newDiv.innerHTML = (outputMessage);
          
    }
    
    
    }
})

document.querySelector('#container').append(newDiv)

//stampare messaggio appropriato