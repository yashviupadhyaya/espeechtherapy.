firebase.auth().onAuthStateChanged(function(user) {
if (user) {
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var name = getUrlVars()["name"];
name = name.replace("%20"," ");
const id = getUrlVars()["id"];
var gender = getUrlVars()["gender"];
var prob = getUrlVars()["prob"];
prob = prob.replace("%20"," ");
var age = getUrlVars()["age"];
var qs="?name="+name+"&gender="+gender+"&prob="+prob+"&age="+age;
const uid = user.uid;
console.log(id);
console.log(name);
        // ########################Audio recorder###############
        navigator.mediaDevices.getUserMedia({audio:true})
        .then(stream => {handlerFunction(stream)})
 
 
             function handlerFunction(stream) {
             rec = new MediaRecorder(stream);
             rec.ondataavailable = e => {
               audioChunks.push(e.data);
               if (rec.state == "inactive"){
                 let blob = new Blob(audioChunks,{type:'audio/wav'});
                 recordedAudio.src = URL.createObjectURL(blob);
                 recordedAudio.controls=true;
                 recordedAudio.autoplay=false;
                 sendData(blob)
               }
             }
           }
                 
 
         record.onclick = e => {
           console.log('I was clicked')
           record.disabled = true;
           record.style.backgroundColor = "red"
           stopRecord.disabled=false;
           audioChunks = [];
           rec.start();
         }
         stopRecord.onclick = e => {
           console.log("I was clicked")
           record.disabled = false;
           fileButton.disabled = false;
           stop.disabled=true;
           record.style.backgroundColor = ""
           rec.stop();
         }
         var cancel = document.getElementById("cancel");
         cancel.onclick = e => {
          console.log("cancel");
          window.location.replace("cards.html"+qs);
         }
        // ########################Audio recorder###############
        //Get elements
        var uploader = document.getElementById("uploader");
        var fileButton = document.getElementById("fileButton");
        var d = Date();
        d = d.toString().substr(0,24);
        var rate_value=0;
        if (document.getElementById('star1').checked) {
          rate_value = document.getElementById('star1').value;
        }
        if (document.getElementById('star2').checked) {
          rate_value = document.getElementById('star2').value;
        }
        if (document.getElementById('star3').checked) {
          rate_value = document.getElementById('star3').value;
        }
        if (document.getElementById('star4').checked) {
          rate_value = document.getElementById('star4').value;
        }
        if (document.getElementById('star5').checked) {
          rate_value = document.getElementById('star5').value;
        }
        var comment = document.getElementById('comment').value;  
        var text = '{"rating":"'+rate_value+'","comment":"'+comment+'"}' ;
        
        makeTextFile = function (text) {  
        var data = new Blob([text], {type: 'text/plain'});  
        // textFile = window.URL.createObjectURL(data);  
        return data;  
      };  
      var textFile= makeTextFile(text);
        //Listen for file selection
        //fileButton.addEventListener("change", function(e) {
          function sendData(data) {
          fileButton.onclick = e => {
              console.log("submit")
        //Get file
        //var file = e.target.files[0];
            var file = data;
        //Create a storage reference
        var storageRef = firebase.storage().ref("audios/"+id+"/"+gender+"_"+age+"_"+name+"_"+d+"/sound");

        //Upload files
        var task = storageRef.put(file);
        storageRef = firebase.storage().ref("audios/"+ id+"/"+gender+"_"+age+"_"+name+"_"+d+"/rating_comment");
        task = storageRef.put(textFile);
        //Update progress bar
        task.on("state_changed",
        
          function progress(snapshot){
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
          },

          function error(err){

          },

          function complete(){
            //setTimeout(function(){
              window.location.reload();
          //},5000);
          }

        );
      }}
  }
});