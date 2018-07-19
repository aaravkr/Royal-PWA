//
//$(document).ready(function(){  
//  // Initialize Firebase
//  var config = {
//    apiKey: "AIzaSyA6ef_-Be_rpZtx5zyby-cUoTn8c4LbIzA",
//    authDomain: "royalpwa.firebaseapp.com",
//    databaseURL: "https://royalpwa.firebaseio.com",
//    projectId: "royalpwa",
//    storageBucket: "royalpwa.appspot.com",
//    messagingSenderId: "242814667402"
//  };
//  firebase.initializeApp(config);
//
//var FIREBASE_AUTH = firebase.auth();
//var FIREBASE_MESSAGING = firebase.messaging();
//var FIREBASE_DATABASE = firebase.database();
//    
//  var signinbutton = document.getElementById("sign-in");
//    var signoutbutton = document.getElementById("sign-out");
//    var subscribtion = document.getElementById("subscribe");
//    var unsubscribtion = document.getElementById("unsubscribe");
//    
//    
//    /*=========
//    
//    event Listener
//    
//    ==========*/
//    signinbutton.addEventListener('click',SignIn);
//    signoutbutton.addEventListener('click',SignOut);
//   subscribtion.addEventListener('click',SubscribeToNotification);
//    FIREBASE_AUTH.onAuthStateChanged(handleonauthchanged);
//    FIREBASE_MESSAGING.onTokenRefresh(handleTokenRefresh);
//    unsubscribtion.addEventListener('click',UnsubscribefromNotification);
//     /*=========
//    
//    functions
//    
//    ==========*/
//    
//    
//    function UnsubscribefromNotification(){
//        console.log("unsubscribe");
//    }
//    
//    function SignIn(){
//      FIREBASE_AUTH.signInWithPopup(new firebase.auth.GoogleAuthProvider()); 
//    }
//    function SignOut(){
//      FIREBASE_AUTH.signOut();
//    }
//    
//    function handleonauthchanged(user){
//        if(user)
//            {
//        console.log(user);
//     signinbutton.setAttribute("hidden","true");
//     signoutbutton.removeAttribute("hidden");         
//            }
//else{
//    console.log("no iuser");
//    signoutbutton.setAttribute("hidden","true");
//     signinbutton.removeAttribute("hidden"); 
//}
//    }
//    
//function handleTokenRefresh(){
//   return FIREBASE_MESSAGING.getToken()
//    .then((token) =>{ 
//             FIREBASE_DATABASE.ref('/pushchecktokens').push({
//            token:token,
//            uid:FIREBASE_AUTH.currentUser.uid
//           
//        });
//      
//      })  
//    
//}
//   
//    
//    function SubscribeToNotification(){
//      FIREBASE_MESSAGING.requestPermission()
//      .then(()=> handleTokenRefresh())
//        .catch(()=>console.log("user didn't give permission: "));
//         }
//    
//     function UnsubscribefromNotification(){
//        console.log("unsubscribe");
//        FIREBASE_MESSAGING.getToken()
//        .then((token) => FIREBASE_MESSAGING.deleteToken(token))
//        .then(() => FIREBASE_DATABASE.ref('/tokens').orderByChild('uid').equalTo(FIREBASE_AUTH.currentUser.uid).once('value'))
//        .then((snapshot) => {
//            console.log(snapshot.val());
//            const key = Object.keys(snapshot.val())[0];
//            return FIREBASE_DATABASE.ref('/tokens').child(key).remove();
//        })
//    }
//
//});