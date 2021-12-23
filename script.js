let entrada = prompt("ingrse numero a factorizar");
let entradaInt = parseInt(entrada);
if(entradaInt === 0){
    console.log(1);
}
else{
    let contador = 1;
    for(let i = 1; i <= entradaInt; i++){
        contador = contador * i;
    }
    alert("tu numero factorizado es " + contador);
}

let entrada2 = prompt("ingresa un numero");
let entrada2Int = parseInt(entrada2);
let contador = 0;
while (contador < entrada2Int){
    console.log("que lindo JavaScript!")
    contador++;
}


