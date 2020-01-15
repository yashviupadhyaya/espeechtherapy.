const btnLogout = document.getElementById('btnLogout');
btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    setTimeout(function(){
        window.location.replace('login.html');
    },5000);
});