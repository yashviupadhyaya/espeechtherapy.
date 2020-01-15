//firebase.auth().onAuthStateChanged(function(user) {
//    if (user) {
//    var firestore = firebase.firestore();
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }
    var name = getUrlVars()["name"];
    name = name.replace("%20"," ");
    var gender = getUrlVars()["gender"];
    var prob = getUrlVars()["prob"];
    prob = prob.replace("%20"," ");
    var age = getUrlVars()["age"];
    var qs="?name="+name+"&gender="+gender+"&prob="+prob+"&age="+age;
    console.log(name);
    document.getElementById("headName").innerHTML = name;
    document.getElementById("prob").innerHTML = prob;
    document.getElementById("gender").innerHTML = gender;
    document.getElementById("age").innerHTML = age;
    document.getElementById("a").href = "uploadfile.html"+qs+"&id=a";
    document.getElementById("aa").href = "uploadfile.html"+qs+"&id=aa";
    document.getElementById("i").href = "uploadfile.html"+qs+"&id=i";
    document.getElementById("ii").href = "uploadfile.html"+qs+"&id=ii";
    document.getElementById("u").href = "uploadfile.html"+qs+"&id=u";
    document.getElementById("uu").href = "uploadfile.html"+qs+"&id=uu";
    document.getElementById("e").href = "uploadfile.html"+qs+"&id=e";
    document.getElementById("ai").href = "uploadfile.html"+qs+"&id=ai";
    document.getElementById("o").href = "uploadfile.html"+qs+"&id=o";
    document.getElementById("au").href = "uploadfile.html"+qs+"&id=au";
    
//    }
//});