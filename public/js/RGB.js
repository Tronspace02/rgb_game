var numSquares=6;
var colors=generaterandomColors(numSquares);
var pickedColor=pickColor();
var squares=document.querySelectorAll(".Squares");
var rgb=document.getElementById("picked");
var h1=document.querySelector("h1");
var message=document.getElementById("result");
var easybtn=document.getElementById("easy");
var hardbtn=document.getElementById("hard");
var resetbtn=document.getElementById("reset");

easybtn.addEventListener("click",function(){
    this.classList.add("selectedbtn");
    hardbtn.classList.remove("selectedbtn");
    numSquares=3;
    colors=generaterandomColors(numSquares);
    pickedColor=pickColor();
    rgb.textContent=pickedColor;    

    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
});
hardbtn.addEventListener("click",function(){
    this.classList.add("selectedbtn");
    easybtn.classList.remove("selectedbtn");
    numSquares=6;
    colors=generaterandomColors(numSquares);
    pickedColor=pickColor();
    rgb.textContent=pickedColor;
    
    for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
        }
});

resetbtn.addEventListener("click",function(){
    colors=generaterandomColors(numSquares);
    pickedColor=pickColor();
    rgb.textContent=pickedColor;
    resetbtn.textContent="New Colors";
    h1.style.backgroundColor="steelblue";
    message.textContent="";

    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor=colors[i];
    }    
});

rgb.textContent=pickedColor;
for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor){
            message.textContent="Correct";
            resetbtn.textContent="Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else{
            this.style.backgroundColor="black";
            message.textContent="Try Again";
        }
    })
}

function changeColors(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var randomno=Math.floor(Math.random()*colors.length);
    return colors[randomno];
}

function generaterandomColors(num){
    var arr=[];

    for(var i=0;i<num;i++){
        arr.push(randomColors())
    };
    return arr;
}

function randomColors(){
    var r=Math.floor(Math.random()*266);
    var g=Math.floor(Math.random()*266);
    var b=Math.floor(Math.random()*266);

    return "rgb("+r+", "+g+", "+b   +")";
}
