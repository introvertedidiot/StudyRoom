
$(".StyleB").on("click", updateStyle);
$(".WindowB").on("click", updateWindow);
$(".NightB").on("click", updateNight)
$(".WindowdB").on("click", updateNightWindow);
$(".MusicB").on("click", playMusic);


//Main switch sets
var style = ["<img src='images/Dynamicroom.jpg'>", "<img src='images/DynamicroomMocha01.jpg'>", "<img src='images/DynamicroomNoir01.jpg'>"]
console.log(style.length);

var Intensity = document.getElementById("songOne")
var Quiet = document.getElementById("songTwo")
var World = document.getElementById("songThree")
var Hardy = document.getElementById("songFour")
var Sun = document.getElementById("songFive")

var music = ["<a class='Button'>Music</a>", "<a class='Button'>Music</a>", "<a class='Button'>Music</a>", "<a class='Button'>Music</a>", "<a class='Button'>Music</a>"]

console.log(music.length);

var counter = 0

function updateStyle() {
    $(".grid-child-1").html(style[counter]);
    counter++
    if (counter == style.length) {
        counter = 0;
    }
    console.log("style is working")
}
function updateWindow() {
    counter++
    if (counter == style.length) {
        counter = 0;}
    if(counter == 0) {
        $(".WindowB").on("click", ogWindow);
    } else if (counter == 1){
        $(".WindowB").on("click", mochaWindow);
    } else if (counter == 2){
        $(".WindowB").on("click", noirWindow);
    }
    console.log("active")
}
function ogWindow(){
    $(".grid-child-1").html("<img src='images/Dynamicroom03.jpg'>")
}
function mochaWindow(){
    $(".grid-child-1").html("<img src='images/DynamicroomMocha03.jpg'>")
}
function noirWindow(){
    $(".grid-child-1").html("<img src='images/DynamicroomNoir03.jpg'>")
}
function updateNight(){
    counter++
    if (counter == style.length) {
        counter = 0;}
    if(counter == 0) {
        $(".NightB").on("click", ogNight);
    } else if (counter == 1){
        $(".NightB").on("click", mochaNight);
    } else if (counter == 2){
        $(".NightB").on("click", noirNight);
    }
    console.log("active")
}
function ogNight(){
    $(".grid-child-1").html("<img src='images/Dynamicroom02.jpg'>")
}
function mochaNight(){
    $(".grid-child-1").html("<img src='images/DynamicroomMocha02.jpg'>")
}
function noirNight(){
    $(".grid-child-1").html("<img src='images/DynamicroomNoir02.jpg'>")
}
function updateNightWindow(){
    counter++
    if (counter == style.length) {
        counter = 0;}
    if(counter == 0) {
        $(".WindowdB").on("click", ogNightWindow);
    } else if (counter == 1){
        $(".WindowdB").on("click", mochaNightWindow);
    } else if (counter == 2){
        $(".WindowdB").on("click", noirNightWindow);
    }
    console.log("active")
}
function ogNightWindow(){
    $(".grid-child-1").html("<img src='images/Dynamicroom04.jpg'>")
}
function mochaNightWindow(){
    $(".grid-child-1").html("<img src='images/DynamicroomMocha04.jpg'>")
}
function noirNightWindow(){
    $(".grid-child-1").html("<img src='images/DynamicroomNoir04.jpg'>")
}
function playMusic(){
    $(".grid-child-6").html(music[counter]);
    counter++
    if (counter == music.length) {
        counter = 0;
    }


        if(counter == 0){
            Sun.pause()
            console.log("Intensity")
            Intensity.play()
        } else if (counter == 1) {
            Intensity.pause()
            console.log("Quiet")
            Quiet.play()
        }else if (counter == 2) {
            Quiet.pause()
            console.log("World Peace")
            World.play()
        }else if (counter == 3) {
            World.pause()
            console.log("Hardy")
            Hardy.play()
        }else if (counter == 4) {
            Hardy.pause()
            console.log("Sun Day")
            Sun.play()
        }
    
    console.log("Music is working")
}
