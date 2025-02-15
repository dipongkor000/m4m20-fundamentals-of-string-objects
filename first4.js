const sentence = 'I am learning Web Dev.'
// const result = '.veD beW gninrael ma I'

let div = '';
for(const s of sentence){
    // console.log(letter);
    div = s + div;
}
console.log(div);

//alternative ----
// let reverse = '';
// for(let i = 0; i < sentence.length; i++){
//     // console.log(i);
//     // console.log(sentence[i]);
//     const letter = sentence[i];
//     reverse = letter + reverse;
// }
// console.log(reverse);

//alternative shortcut----
// let reversed = sentence.split('').reverse().join('');
// console.log(reversed);
