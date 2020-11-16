//FIREBASE CONTACT FORM 


  // 3. Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAa94BejaAq2uJUdNYZCXTreX0uEm5ehKM",
    authDomain: "porftoliocontactform.firebaseapp.com",
    databaseURL: "https://porftoliocontactform.firebaseio.com",
    projectId: "porftoliocontactform",
    storageBucket: "porftoliocontactform.appspot.com",
    messagingSenderId: "886981364317",
    appId: "1:886981364317:web:0c0edc1f5104f823f79bb4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//reference the collection ("messages")

var messagesRef = firebase.database().ref('messages'); 


//1. listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// 5. Submit form 
function submitForm(e){
    e.preventDefault(); 

    //get values 

    var name = getInputContent('name'); 
    var mail = getInputContent('mail'); 
    var message = getInputContent('message'); 

    /* console.log(name);  */
    // 6. Save message 
    saveMessage(name, mail, message); 
    // for now, it will send back this error message: PERMISSION_DENIED: Permission denied so rules have to set to read: auth != null and write: true 


    // 8. show alert: created div class="alert" 
    document.querySelector('.alert').style.display = 'block'; 
    // hide alert after 2.5 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none'; 
    }, 2500);

    // 9. clearing data after sending it
    document.getElementById('contactForm').reset(); 
}

console.log('test'); 

// 2. Function to get form values 
function getInputContent(id){
    return document.getElementById(id).value; 
}

// 4. saving messages to firebase
function saveMessage(name, mail, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        mail: mail,
        message: message 
    }); 
}

//ADDENDUM: smooth navigation

const makeNavLinksSmooth = () => { //smoothCrolling
    const navLinks = document.querySelectorAll('.navLinks'); 

    for(let n in navLinks) {
        if(navLinks.hasOwnProperty(n)) {
            navLinks[n].addEventListener('click', e => {
                e.preventDefault(); 
                document.querySelector(navLinks[n].hash).scrollIntoView({
                    behavior: 'smooth'
                });
            })
        }
    }
}

const spyScrolling = () => {
    const sections = document.querySelectorAll('sections');

    window.onscroll = () => {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop; 

        for(let s in sections) {
            if(sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPosition) {
                const id = sections[s].id;
                document.querySelector('.navLinks--active').classList.remove('navLinks--active');

                document.querySelector('a[href*=${id}]').parentNode.classList.add('navLinks--active'); 
            }
        }
    }
}

makeNavLinksSmooth(); 

spyScrolling(); 