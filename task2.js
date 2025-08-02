const fruit = 'banana, Apple, mango, orange are most healty fruits';

let fruits = fruit.split('');
console.log(fruits);

let count = 0;
for(i=0 ; i< fruits.length ; i++){
    if(fruits[i].toUpperCase() === 'A' || fruits[i].toLowerCase() === 'a'){
        count++;
    }
}
console.log(count);