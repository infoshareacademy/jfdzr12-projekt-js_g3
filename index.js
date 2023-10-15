// const sentense = "Pierwszy #projekt #javascript"

// const words = sentense.split(" ");
// for (let i=0; i < words.length; i++) {
//     if (words[i].charAt(0) === "#") {
//         let word = words[i].slice(1);
//         console.log(word);
//     }
// }

let word = "kebab-case";
const re = /-|_/;
let result = word.split(re);
for(let i=0; i < result.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1);
}
console.log(result.join(""));
