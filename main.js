// Variables
var tool = 0;
var Color = 0;
var ImageNumber = 0; 
var value;
var tooltype = "line"

// Painting code
function preload(){
 // animals
 CatImage = loadImage("CatImage.jpg");
 DogImage = loadImage("DogImage.png");
 FishImage = loadImage("FishImage.png");

 // furniture
 OvenImage = loadImage("OvenImage.png");
 FlowerPotImage = loadImage("FlowerPotImage.png");
 ChairImage = loadImage("ChairImage.jpg");
}

function setup(){
    canvas = createCanvas(1240,695);
}

function draw(){
    //Colors part//

    if(Color == 0){
        stroke("black");
    }

    if(Color == 1){
        stroke("red");
    }

    if(Color == 2){
        stroke("blue");
    }

    if(Color == 3){
        stroke("green");
    }

    if(Color == 4){
        stroke("yellow");
    }

    if(Color == 5){
        stroke("grey");
    }

    if(Color == 6){
        stroke("pink");
    }

    if(Color == 7){
        stroke("white");
    }

    if(Color == 8){
        stroke("black");
    }

    if(Color == 9){
        stroke("orange");
    }

    if(Color == 10){
        stroke("brown");
    }

    if(Color == 11){
        stroke("violet");
    }

    if(Color == 12){
        stroke("indigo");
    }

    //Tools part//

    if(tool == 0){
    strokeWeight(5);
    }

    if(tool == 1){
        strokeWeight(15);
    }

    if(tool == 2){
        strokeWeight(15);
        stroke("white");
    }
    
    if(tool == 3){
        strokeWeight(35);
    }

    if(tool == 4){
        strokeWeight(10);
    }

    if(mouseIsPressed){
        if(tooltype == "line"){
            line(pmouseX,pmouseY,mouseX,mouseY);
        }

        if(tooltype == "dot line"){
            line(mouseX,mouseY,mouseX,mouseY);
        }
    }
}
//Tools code//

function Clear(){
 background("white");
}

function brush(){
    tool = 1;
    tooltype = "line";

    document.getElementById("brush").className = "btn btn-primary space";
    document.getElementById("bigbrush").className = "btn btn-success space";
    document.getElementById("pencil").className = "btn btn-success space";
    document.getElementById("dotter").className = "btn btn-success space";
    document.getElementById("eraser").className = "btn btn-warning space";
}

function pencil(){
    tool = 0;
    tooltype = "line";

    document.getElementById("brush").className = "btn btn-success space";
    document.getElementById("bigbrush").className = "btn btn-success space";
    document.getElementById("pencil").className = "btn btn-primary space";
    document.getElementById("dotter").className = "btn btn-success space";
    document.getElementById("eraser").className = "btn btn-warning space";
}

function eraser(){
    tool = 2;
    tooltype = "line";

    document.getElementById("brush").className = "btn btn-success space";
    document.getElementById("bigbrush").className = "btn btn-success space";
    document.getElementById("pencil").className = "btn btn-success space";
    document.getElementById("dotter").className = "btn btn-success space";
    document.getElementById("eraser").className = "btn btn-primary space";

    alert("be careful! You cannot undo anything if you erased something!");
}

function bigbrush(){
    tool = 3;

    document.getElementById("brush").className = "btn btn-success space";
    document.getElementById("bigbrush").className = "btn btn-primary space";
    document.getElementById("pencil").className = "btn btn-success space";
    document.getElementById("dotter").className = "btn btn-success space";
    document.getElementById("eraser").className = "btn btn-warning space";

    tooltype = "line";
}

function dotter(){
    tooltype = "dot line";

    document.getElementById("brush").className = "btn btn-success space";
    document.getElementById("bigbrush").className = "btn btn-success space";
    document.getElementById("pencil").className = "btn btn-success space";
    document.getElementById("dotter").className = "btn btn-primary space";
    document.getElementById("eraser").className = "btn btn-warning space";

    tool = 4;
}

// Colors
function Red(){
    Color = 1;
}

function Blue(){
    Color = 2;
}

function Green(){
    Color = 3;
}

function Yellow(){
    Color = 4;
}

function Grey(){
    Color = 5;
}


function Pink(){
    Color = 6;
}

function White(){
    Color = 7;
}


function Black(){
    Color = 8;
}

function Orange(){
    Color = 9;
}

function Brown(){
    Color = 10;
}

function Violet(){
    Color = 11;
}

function Indigo(){
    Color = 12;
}

// Image Generater

function generate(){
    var dropdown = document.getElementById("AGI");
    value = dropdown.options[dropdown.selectedIndex].value;
    generateimage();
}

function generateimage(){
    // Animals
    if(value == "Cat"){
     image(CatImage,340,100,500,500);
    }

    if(value == "Dog"){
        image(DogImage,340,100,500,500);
    }

    if(value == "Fish"){
        image(FishImage,340,100,500,500);
    }

    // Furniture
    if(value == "Oven"){
        image(OvenImage,340,100,500,500);
    }

    if(value == "Chair"){
        image(ChairImage,340,100,500,500);
    }

    if(value == "Pot"){
        image(FlowerPotImage,340,100,500,500);
    }
}