const promptowanie = document.querySelector('#zadanie2przycisk');
console.log(promptowanie);
function oknoPrompt(){
    var sufit= prompt("Wpisz kolor sufitu: ");
    if(sufit){
        alert("Twoje niebo ma kolor " +sufit);
    }
    else{
        alert("Anulowałeś akcję, a okno prompt zwróciło " +sufit);
    }
}
promptowanie.addEventListener('click',()=>{oknoPrompt();});