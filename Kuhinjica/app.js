const firebaseConfig = {
    apiKey: "AIzaSyDL2ipp7p7s39YuNPl9O6VJR69toMI8Zaw",
    authDomain: "login-47014.firebaseapp.com",
    databaseURL: "https://login-47014-default-rtdb.firebaseio.com",
    projectId: "login-47014",
    storageBucket: "login-47014.appspot.com",
    messagingSenderId: "175718280509",
    appId: "1:175718280509:web:15841c2b37b7afde76e954"
  };
  

firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()


  //Signup Function
  let signUpButton = document.getElementById('signup')
  signUpButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")
    
    auth.createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      location.reload();
      // Signed in 
      var user = userCredential.user;
      console.log("user",user.email)
      window.location = "home.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error code", errorCode)
      console.log("error Message", errorMessage)
    });
  })

  let signInButton = document.getElementById('signin')
  signInButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")

    auth.signInWithEmailAndPassword(email.value, password.value) 
    .then((userCredential) => {
      // location.reload();
      // Signed in 
      var user = userCredential.user;
      console.log("user",user.email)
      window.location = "home.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // alert("error code", errorCode)
      alert( errorMessage)
    });
   })
auth.onAuthStateChanged(function(user) {
  if (user) {

    var email = user.email
  
    var users = document.getElementById("user")
    var text = document.createTextNode(email);

    users.appendChild(text);

    console.log(users)
   
  } else {
    
  }
})