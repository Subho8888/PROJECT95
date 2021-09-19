//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAClOtDewt4wZ8GQL0Ut3qg0ZLzvd_Jhsw",
  authDomain: "kwitter-3f37e.firebaseapp.com",
  databaseURL: "https://kwitter-3f37e-default-rtdb.firebaseio.com",
  projectId: "kwitter-3f37e",
  storageBucket: "kwitter-3f37e.appspot.com",
  messagingSenderId: "493950627811",
  appId: "1:493950627811:web:95d7c2c1e2b026ec003ad6"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function addroom() {
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });

      localStorage.setItem("Roomname",room_name);
  
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToroomname(name){
console.log(name);
localStorage.setItem("Roomname",name);
window.location = "kwitter_page.html";
}