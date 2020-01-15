firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var firestore = firebase.firestore();
        function getAge(dateString) 
        {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
            {
                age--;
            }
            return age;
        }
//var ret = firebase.database().ref("therapists/"+firebase.auth().currentUser.uid).child('cases');
var caseRef = firestore.collection("therapists/"+user.uid+"/cases");
caseRef.get().then(function(snapshot){
    //if(snapshot.exists()){
        var content = '';

        snapshot.forEach(function(doc){
            var name = doc.data().name;
            var dob= doc.data().dob;
            var age= getAge(dob);
            var gender= doc.data().gender;
            var prob= doc.data().problem;
            var qs="?name="+name+"&gender="+gender+"&prob="+prob+"&age="+age;
            console.log(age);
            console.log(dob);
            content += '<tr>';
            content += '<th>1</th>'; 
            content += '<td>' + name + '</td>'; 
            content += '<td>' + dob + '</td>'; 
            content += '<td>' + gender + '</td>'; 
            content += '<td>' + prob + '</td>';
            content += '<td scope="col"><a href="cards.html'+qs+'" class="btn btn-outline-light">View</a></td>';
            content += '</tr>';
        });

        $('#userTable').append(content);
    //}
});
}});
/* firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var db = firebase.firestore();
        var docRef = db.collection("deyaPayusers").doc(user.uid);
        docRef.get().then(function(doc) {
           if(doc && doc.exists) {
           const myData = doc.data();
           const ffname = myData.FirstName;
           const llname = myData.LastName;
           const phonen = myData.PhoneNumber;
           document.getElementById("fname").value = ffname;
           document.getElementById("lname").value = llname;
           document.getElementById("phone").value = phonen;
  
      }
      }).catch(function(error) {
      console.log("Got an error: ",error);
      });
    } else {
      // No user is signed in.
    }
  }); */
  