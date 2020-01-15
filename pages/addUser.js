const btnSubmit = document.getElementById('btnSubmit');
const caseName = document.getElementById('caseName');
const prob = document.getElementById('problem');
//var strdate = date.toString();
//const uid = firebase.auth().currentUser.uid;
//console.log(uid);
console.log(caseName);
var firestore = firebase.firestore();
btnSubmit.addEventListener('click', e => {
    var date = document.getElementById('caseDoB').value;
    const docRef = firestore.doc('therapists/'+firebase.auth().currentUser.uid+'/cases/'+caseName.value);
    var gen = "";
    var ele = document.getElementsByName('radio-inline');
    if (ele[0].checked){
        gen = ele[0].value;
    } else {
        gen = ele[1].value;
    }
   
    docRef.set({
        name: caseName.value,
        dob: date,
        gender: gen,
        problem: prob.value 
    });
    setTimeout(function(){
        window.location.replace('Myusers.html');
    },5000);

    console.log(date);
});