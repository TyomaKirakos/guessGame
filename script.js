'use strict';

// function one(x){
//     function two(){
//         const a = +prompt("Введите число");
//         x--;

//         console.log(a);
//         console.log(x);

//         if (a !== x){
//             two();
//         }
//     }

//     two();

// }

// one(10);

// function counter(n){
//     return function(x){
//         return x + n;
//     };
// };

// let sum = counter(1);
// console.log(sum(15));
// console.log(sum(20));

// function pathGenerator(url){
//     return function (imageName){
//         return url + imageName;
//     }
// }


// let x = Math.floor(Math.random()*11);
// console.log(x);

// function guessNumber(){
//     let a = +prompt('Попробуйте угадать число: ');
//     if (x !== a){
//         guessNumber(x);
//     } else{
//         alert('Ура, вы победили!')
//     }
// }

// guessNumber(x);



function one() {
    let moves = 3;

    return function two(secretNumber) {
        console.log(secretNumber);
        if (moves == 0) {
            if (prompt("У вас уже нет свободных ходов. Хотите сыграть ещё?")) {
                number(Math.floor(Math.random() * 101));
            } else {
                return;
            }
        }

        let userNumber = +prompt("Введите число");

        if (isNaN(userNumber) || userNumber == '') {
            alert('Введите число!');
            two(secretNumber);
        } else if (userNumber == false) {
            return
        }

        if (userNumber != secretNumber) {
            moves--;
            if (secretNumber < userNumber) {
                alert(`Загаданное число меньше! У вас осталось ${moves} ходов`);
                two(secretNumber);
            } else if (secretNumber > userNumber) {
                alert(`Загаданное число больше! У вас осталось ${moves} ходов`);
                two(secretNumber);
            }
        } else {
            alert('Вы победили')
            return
        }
    }

    // two();
}

let number = one();
number(Math.floor(Math.random() * 101));