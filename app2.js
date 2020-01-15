//Get Elements
const btnSignUp = document.getElementById('btnSignUp');
const suEmail = document.getElementById('username');
const suPass = document.getElementById('password');
const name = document.getElementById('name');
var firestore = firebase.firestore();
// Add login
//firebase.auth().signOut();
btnSignUp.addEventListener('click', e => {
    const email = suEmail.value;
    const pass = suPass.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    setTimeout(function(){ 
        promise.catch(e => console.log(e.message));
    },5000);
});

//setTimeout(function(){ 
    firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser.uid);
        const docRef = firestore.doc("therapists/"+firebaseUser.uid);
        docRef.set({
            name: name.value,
            email: suEmail.value
        });
        setTimeout(function(){ 
            window.location.replace("Myusers.html");
        },5000);
    } else {
        console.log("not logged in");
    }
    });
//},15000);
//}());
