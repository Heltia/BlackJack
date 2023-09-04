let ACE=[1, 11]

const valores=[...ACE, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let ACE2=[1, 11]

if (valores === 1) {
    ACE2 = 11;
} else if (valores === 11) {
    ACE2 = 1;
}

const valores2=[...ACE2, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let valorUm = Math.floor(Math.random() * valores.length + 1);


let valorDois = Math.floor(Math.random() * valores.length + 1);


let somamao = (valorUm + valorDois);

if (somamao === 22) {
    somamao = 21;
}

if (somamao === 21) {
    somamao = "blackjack!!!";

}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cardOne").innerHTML = valorUm;
    document.getElementById("cardTwo").innerHTML = valorDois;
    document.getElementById("somamao").innerHTML = "Tens: " + (somamao) + "!";
});


let total = 0;

let startHand = total + valorUm + valorDois;
//continuar aqui a definir função de adicionar carta em click
function pedirCarta() {
    let ValorExtra =  Math.floor(Math.random() * valores.length + 1);
    let total = (startHand + ValorExtra) 
    let somamao = (total + ValorExtra);

if (somamao === 21) {
    somamao = "blackjack!!!";

}
    document.getElementById("somamao").innerHTML = "Tens: " + (somamao) + "!";
    document.getElementById("extracard").innerHTML += '<div class="card"><p>' + ValorExtra + '</p></div>';
}

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("pedir");
    button.addEventListener('click', pedirCarta);
});

