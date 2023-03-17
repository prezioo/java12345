
const przycisk1zadanie = document.querySelector("#zadanie1przycisk");
console.log(przycisk1zadanie)
function oknoAlert(){
    alert("Ptaki latają kluczem");
}
przycisk1zadanie.addEventListener('click',()=>{oknoAlert();});
