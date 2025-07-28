/* Laço de repetição While e Do While */
let i = 1;

function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(7,11);
let rand2 = random(1,3);

while (rand === rand2) {
    console.log('deu igual: ', i);
    i++
    rand = random(1,3);
    rand2 = random(1,3);
}

while(rand != 10) {
    console.log('Deu diferente de 10: ', i, 'valor randomizado foi: ', rand);
    i++
    rand = random(7,11);
}

/* Executa primeiro e depois checa a condição */
do {
    console.log('No DoWHile diferente de 10: ', i, 'valor randomizado foi: ', rand);
    i++
    rand = random(7,11);
} while (rand !== 10);

console.log(rand, rand2);


// let i = 0;

// while (i <=10) {
//     console.log(i);
//     i++; // incremento dentro👀 
// }

// console.log('Segue a vida...');
