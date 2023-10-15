//Zadanie1
// const sentense = "Pierwszy #projekt #javascript"
// const words = sentense.split(" ");
// for (let i=0; i < words.length; i++) {
//     if (words[i].charAt(0) === "#") {
//         let word = words[i].slice(1);
//         console.log(word);
//     }
// }

//Zadanie2
// let word = "kebab-case";
// const re = /-|_/;
// let result = word.split(re);
// for(let i=0; i < result.length; i++) {
//     result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1);
// }
// console.log(result.join(""));

//Zadanie3
const passwordLength = 12;
const minOccurence = 1;
const characters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!#$%&()*+,-./:;<=>?@[^_`{|}"];
let result = "";
let listofSigns = "";
function randomSign(list){
    return list[Math.floor( Math.random() *  list.length)];
}
for (let j = 0; j < 4; j++){
    for (let k = 0; k < minOccurence; k++){
    listofSigns = listofSigns + randomSign(characters[j]);
    }
}
while (listofSigns.length <= passwordLength) {
    listofSigns = listofSigns + randomSign(characters.join("")); 
}
for (let m = passwordLength; m > 0; m--) {
    rand = randomSign(listofSigns);
    result = result + rand;
    listofSigns = listofSigns.replace(rand, "");
}
console.log(result);