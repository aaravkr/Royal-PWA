
$(document).ready(function() {
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

var signInButton = document.getElementById("sign-in");
var signOutButton = document.getElementById("sign-out");
var subscribeButton = document.getElementById("subscribe");
    
    
    /*=========
    
    event Listener
    
    ==========*/
    signInButton.addEventListener('click', signIn);
    signOutButton.addEventListener('click', signOut);
    subscribeButton.addEventListener('click', subscribeToNotifications);
    FIREBASE_AUTH.onAuthStateChanged(handleAuthStateChanged);
    FIREBASE_MESSAGING.onTokenRefresh(handleTokenRefresh);
    
     /*=========
    
    functions
    
    ==========*/
    
    
    function signIn() {
      FIREBASE_AUTH.signInWithPopup(new firebase.auth.GoogleAuthProvider()); 
    }
    function signOut() {
      FIREBASE_AUTH.signOut();
    }
    
    function handleAuthStateChanged(user) {
        if(user) {
            console.log(user);
            signInButton.setAttribute("hidden", "true");
            signOutButton.removeAttribute("hidden");
            checkSubscription();
        }
        else {
            console.log("no user");
            signOutButton.setAttribute("hidden", "true");
            signInButton.removeAttribute("hidden");
        }
    }
    
    function subscribeToNotifications() {
      FIREBASE_MESSAGING.requestPermission()
          .then(() => handleTokenRefresh())
          .then(() => checkSubscription())
          .catch(() => console.log("user didn't give permission :("));
    }
    
    function handleTokenRefresh() {
        return FIREBASE_MESSAGING.getToken()
            .then((token) => {
                    FIREBASE_DATABASE.ref('/tokens').push({
                        token: token,
                        uid: FIREBASE_AUTH.currentUser.uid
                });
        });
    }
    
    function checkSubscription() {
        FIREBASE_DATABASE.ref('/tokens').orderByChild('uid').equalTo(FIREBASE_AUTH.currentUser.uid).once('value')
            .then((snapshot) => {
                if(snapshot.val()) {
                    subscribeButton.setAttribute("hidden", "true");
                }
                else {
                    subscribeButton.removeAttribute("hidden");
                }
            })
    }
    
});