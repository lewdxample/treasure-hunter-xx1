// var database = firebase.database();
// var winRef = database.ref('/win/');

console.log(navigator.onLine);
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;


function winCount(){
    // var checkWin = database.ref("win");

    // checkWin.once("value").then(function(snapshot){
        // if(snapshot.hasChild('counter')){
            // checkWin.once("value", snapshot => {
                // var counterJs = snapshot.child("counter").val();
                // if(counterJs >= 3){
                //     console.log("Yang menang sudah 3 orang!");
                    document.getElementById("gif").src = "gagal.gif";
                    document.getElementById("gif").addEventListener("click", setTextZonk); 
                    // setTimeout(setTextZonk, 1200);
                // }else{
                //     counterJs += 1;
                //     console.log(counterJs);
                //     database.ref('win').set({
                //         counter: counterJs
                //     });
                //     document.getElementById("gif").src = 'win.gif';
                //     setTimeout(setTextWin, 1200);
                // }
            // })
        // }
        
    // })
}

function setTextWin(){
    document.getElementById("editText").innerHTML = "Selamat anda mendapatkan Grand Prize!!!";
}

function setTextZonk(){
    vibrate(1200);
    document.getElementById("editText").innerHTML = "Maaf, Anda belum Beruntung~";
}

function vibrate(ms){
    navigator.vibrate(ms);
}