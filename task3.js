const fruit = 'banana, Apple, mango, orange are most healty fruits';

// const fruits = fruit.split('');
let hasVowel = fruit.includes('a') && fruit.includes('e') && fruit.includes('i') && fruit.includes('o') && fruit.includes('u');

if(hasVowel){
    console.log('It has all vowel');
    }
else{
    console.log('It has not all vowel');
 }   
