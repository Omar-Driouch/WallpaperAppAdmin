// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCIw0v4g7IsQe-12a6RJR9Sd8kjF3zUfto",
  authDomain: "wallpaperapp-b16b9.firebaseapp.com",
  projectId: "wallpaperapp-b16b9",
  storageBucket: "wallpaperapp-b16b9.appspot.com",
  messagingSenderId: "714925262199",
  appId: "1:714925262199:web:9072e688a72ffdf91bcd72",
  measurementId: "G-F8W80P3CRW"
};

firebase.initializeApp(firebaseConfig);
$("#btnlogout").click(function() {
   
  alert(" fewfe ")
});


$("#btnprimary").click(function() {
  var email = $("#email").val();
  var password = $("#password").val();

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // Redirect to another page or update UI
      window.location.href = "admin.html";
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
       
    });
});


