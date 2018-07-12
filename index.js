var mainapp = {};
(function () {
    var uid= null;
    var firebase = app_firebase;
    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {
            // User is signed in.
            uid = user.uid;

        }
        else {
            //if login was failed
            prompt("login-failed");
            uid=null;
            window.location.replace('login.html')
        }
    });
    function logOut() {
        firebase.auth().signOut();

    }
    mainapp.logOut=logOut;
})()