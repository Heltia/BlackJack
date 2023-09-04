let ACE=[1, 11]

const valores=[...ACE, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let valorUm = Math.floor(Math.random() * valores.length + 1);

let valorDois = Math.floor(Math.random() * valores.length + 1);

let ValorExtra =  Math.floor(Math.random() * valores.length + 1);



let element = document.getElementById('cardOne');
element.id('cardOne') = "valorUm";

let total = 0;

let startHand = total + valorUm + valorDois;




//function game() {
//    if (startHand === 21) {
//        return valorUm + " " + valorDois + " Blackjack!!";
//    }while (startHand < 21) {
//        total = ValorExtra + valorUm + valorDois
//        return total + " " + ValorExtra + " Pedir carta";
//    }
// }
