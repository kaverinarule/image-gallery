let images = document.querySelectorAll(".gallery img");
let current = 0;

function filterSelection(category){

images.forEach(img=>{

if(category=="all"){
img.classList.remove("hide");
}
else{

if(img.classList.contains(category))
img.classList.remove("hide");
else
img.classList.add("hide");

}

});

}

function openLightbox(img){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=img.src;

current=[...images].indexOf(img);

}

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}

function changeImage(step){

current=current+step;

if(current<0)
current=images.length-1;

if(current>=images.length)
current=0;

document.getElementById("lightbox-img").src=images[current].src;

}