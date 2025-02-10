const sentence = 'I am learning Web Dev.'
// const result = '.veD beW gninrael ma I'

// rule

let reverse = '';
for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);

//alternative 

// let reverse = '';
// for(let i = 0; i < sentence.length; i++){
//     // console.log(i);
//     // console.log(sentence[i]);
//     const letter = sentence[i];
//     reverse = letter + reverse;
// }
// console.log(reverse);

//alternative shortcut

// let reversed = sentence.split('').reverse().join('');
// console.log(reversed);