const sentence = 'i am learning web dev.';

//const result = '.ved bew gninrael ma i';

// let reverse = '';

// // for(const letter of sentence){
// //     // console.log(letter);
// //     reverse = letter + reverse;
// // }
// // console.log(reverse);

// let rev = ''
// for(let i=0; i<sentence.length; i++){

//     // console.log(i)
//     // console.log(sentence[i]);
//     const letter = sentence[i];
//     rev = letter + rev;
// }
// console.log(rev);

const reverse = sentence.split('').reverse().join('');
console.log(reverse);