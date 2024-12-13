const seznam = [
    {name:"Chleba", price:90},
    {name:"Čepice", price:921},
    {name:"Židle", price:2010}
];

const kosik = [];

function del(){
    output.innerHTML = "";}

function vypis(array, output){
    let out_value = document.getElementById(output);
    for(let i = 0; i < array.length; i++){
        out_value.innerHTML += i + 1 + ". " + array[i] + "<br>";
    }
}

function Add(){
    const input = document.getElementById("add-component")

    if((input.ariaValueMax<=nabidka.length) && (input.value> 0) && (!isNaN(input.value))){
        kosik.push(seznam[input.value -1]);
        seznam.splice(input.value - 1,1);
    }
    else{
        alert("chyba")
    }
    vypis(kosik, "user-cart");
    vypis(seznam, "content");
    upadateKosikOptions();
}

function updateKosikOptions() { 
    const select = document.getElementById("kosik-nabidka"); 
    select.innerHTML = ""; 
    
    for (let i = 0; i < kosik.length; i++) { 
        let option = document.createElement("option"); 
        option.value = i + 1; 
        option.text = kosik[i];
        select.appendChild(option); 
    } 
} 


seznam.sort( (p1, p2) => {
    if (p1.price < p2.price) return -1;
    if (p1.price > p2.price) return 1;
    return 0;
  });
  
  let txt = "";
  seznam.forEach(myFunction);
  
  function myFunction(value) {
    txt += value.name + " " + value.price + " Kč" + "<br>"; 
  }
  document.getElementById("list").innerHTML = txt;
