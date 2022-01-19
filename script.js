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

let x = Math.floor(Math.random()*101);
console.log(x);

function one(x){
    function two(){
        const a = +prompt("Введите число");
        if (isNaN(a)){
            alert('Введите число!');
            two();
        } else if (a == false){
            return;
        }

        if (a != x){
            if (x < a){
                alert('Загаданное число меньше!');
                two();
            } else if (x > a){
                alert('Загаданное число больше!');
                two();
            }
            
        } else {
            alert('Вы победили')
        }
    }

    two();

}

one(x);
