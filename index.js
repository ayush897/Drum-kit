// document.querySelectorAll("button")[].addEventListener("click", handleclick);

// function handleclick(){
//     alert(" i got clicked");
// }

//SECOND OPTION


// document.querySelectorAll("button")[0].addEventListener("click", function (){
//     alert(" i got clicked");
// });

// document.querySelectorAll("button")[1].addEventListener("click", function (){
//     alert(" i got clicked");
// });


// document.querySelectorAll("button")[2].addEventListener("click", function (){
//     alert(" i got clicked");
// });


// document.querySelectorAll("button")[3].addEventListener("click", function (){
//     alert(" i got clicked");
// });


// document.querySelectorAll("button")[4].addEventListener("click", function (){
//     alert(" i got clicked");
// });
var n = document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++ ){
    
document.querySelectorAll("button")[i].addEventListener("click", function (){
    // alert(" i got clicked");
    // this.style.color="white";
    var buttoninnerhtml = this.innerHTML;
    makesound(buttoninnerhtml);
    
});
}
document.addEventListener("keypress" , function (event) {
    makesound(event.key);
    
});

function makesound(key){
   
    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
               crash.play();

            break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();

         break;
         case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
         case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
         case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
         case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default: console.log(buttoninnerhtml);
            break;
    }
}
