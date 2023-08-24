var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice"+randomNumber1+".png";
var randomImageSrc = "./images/"+randomImage1;

document.getElementById("img1").setAttribute("src",randomImageSrc);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice"+randomNumber2+".png";
var randomImageSrc = "./images/"+randomImage2;

document.getElementById("img2").setAttribute("src",randomImageSrc);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Ajay Wins";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Anjali Wins🚩";
}
else
{
    document.querySelector("h1").innerHTML="🚩Its a Draw🚩";
}