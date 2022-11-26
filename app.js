//loop
// for => for in, for of

//  fruits=[
//     'olma',
//     'anor',
//     'banan',
//     'kivi',
//     'mandarin',
//     'limon',
//      'ananas',
//      'qulupnay',
//     'xurmo'
// ]
// for (let i = 0; i < fruits.length; i++){
//     if (fruits[i] === "Banana") {
//         console.log(fruits[i].toUppercase());
//     }
//     else {
//         console.log(fruits[i]);
//     }
// }


// //12
let son = +prompt("Son kiriting ");

for ( i = 0; i <= son; i++) {
        if (i % 2 === 0) {
            console.log(` ${i} soni juft:`);
        }
        else {
            continue;
        }
    }

alert(
  `
Keyingi sahifa yig'indi hisoblash uchun 'OK' tugmasini bosing ➡️`
);

    
let index = +prompt("Son kiriting yig'indisini bilish uchun");
let Summa = 0;
for (let i = 1; i <= index; i++) {
    Summa = Summa + i;
    
}
console.log(`SIZ KIRITGAN SONGACHA BO'LGAN, SONLAR YIG'INDISI: ${Summa} GA TENG.`)

    


