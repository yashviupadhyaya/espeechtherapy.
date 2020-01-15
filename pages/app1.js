//Get Elements
const txtEmail = document.getElementById('username');
const txtPass = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
//const btnLogout = document.getElementById('btnLogout');
// Add login
btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPass.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    //setTimeout(function(){ 
        promise.catch(e => console.log(e.message));
    //},10000);
});

/* btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
}); */
 
    firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        window.location.replace("Myusers.html");
    } else {
        console.log("not logged in");
    }
    });
