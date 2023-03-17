const input1 =document.querySelector("#input1");
console.log(input1.dataset);
document.querySelector("#input2").addEventListener("click",function(){
    let para1 = document.createElement("input")
    console.log(para1);
    para1.setAttribute('value', input1.dataset.song1);
    diwacz.appendChild(para1);

    let para2 = document.createElement("input")
    console.log(para2);
    para1.setAttribute('value', input1.dataset.song2);
    diwacz.appendChild(para2);

    let para3 = document.createElement("input")
    console.log(para3);
    para1.setAttribute('value', input1.dataset.song3);
    diwacz.appendChild(para3);
});