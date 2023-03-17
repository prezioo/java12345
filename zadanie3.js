const tekst = document.querySelector("#tekstP");

document.querySelector("#zwiekszanie").addEventListener("click", function(){
    console.log(tekst);
    tekst.style.fontSize="larger"
});


document.querySelector("#zmniejszanie").addEventListener("click", function(){
    console.log(tekst);
    tekst.style.fontSize="smaller"
});
