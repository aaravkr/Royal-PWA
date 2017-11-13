
$(document).ready(function(){  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA6ef_-Be_rpZtx5zyby-cUoTn8c4LbIzA",
    authDomain: "royalpwa.firebaseapp.com",
    databaseURL: "https://royalpwa.firebaseio.com",
    projectId: "royalpwa",
    storageBucket: "royalpwa.appspot.com",
    messagingSenderId: "242814667402"
  };
  firebase.initializeApp(config);

var FIREBASE_AUTH = firebase.auth();
var FIREBASE_MESSAGING = firebase.messaging();
var FIREBASE_DATABASE = firebase.database();

    
    
  var signinbutton = document.getElementById("sign-in");
    var signoutbutton = document.getElementById("sign-out");
    var subscribtion = document.getElementById("subscribe");
    
    
    /*=========
    
    event Listener
    
    ==========*/
    signinbutton.addEventListener('click',SignIn);
    signoutbutton.addEventListener('click',SignOut);
   subscribtion.addEventListener('click',SubscribeToNotification);
    FIREBASE_AUTH.onAuthStateChanged(handleonauthchanged);
    
    
    
     /*=========
    
    functions
    
    ==========*/
    
    
    function SignIn(){
      FIREBASE_AUTH.signInWithPopup(new firebase.auth.GoogleAuthProvider()); 
    }
    function SignOut(){
      FIREBASE_AUTH.signOut();
    }
    
    function handleonauthchanged(user){
        if(user)
            {
        console.log(user);
     signinbutton.setAttribute("hidden","true");
     signoutbutton.removeAttribute("hidden");         
            }
else{
    console.log("no iuser");
    signoutbutton.setAttribute("hidden","true");
     signinbutton.removeAttribute("hidden"); 
}
    }
    
    function SubscribeToNotification(){
      FIREBASE_MESSAGING.requestPermission()
      .then(()=> FIREBASE_MESSAGING.getToken())
      .then((token) => 
            {
          console.log(token)
        FIREBASE_DATABASE.ref('/tokens').push({
            token:token,
            uid:FIREBASE_AUTH.currentUser.uid
        });
      
      })
          
      
      .catch(()=>console.log("user didn't give permission: "));
        
    }
    
});