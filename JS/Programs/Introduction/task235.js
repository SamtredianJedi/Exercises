// JavaScript: Reverse the order of the bits in a given integer



/**
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-127 with Solution
Write a JavaScript program to reverse the order of the bits in a given integer.

14 -> 00001110 -> 01110000 -> 112
56 -> 00111000 -> 00011100 -> 28
234 -> 11101010 -> 01010111 -> 87



Sample Solution:

JavaScript Code:

function mirror_bits(n) {
    let t = n.toString(2).split("");
    let str_len = t.length;
    for (let i = 0; i < 8 - str_len; i++) {
        t.unshift("0");
    }
    return parseInt(t.reverse().join(""), 2);
}
// 14 -> 00001110 -> 01110000 -> 112
console.log(mirror_bits(14));
// 56 -> 00111000 -> 00011100 -> 28
console.log(mirror_bits(56));
// 234 -> 11101010 -> 01010111 -> 87
console.log(mirror_bits(234));




Live Demo:



function mirror_bits(n) {
    let t = n.toString(2).split("");
    let str_len = t.length;
    for (let i = 0; i < 8 - str_len; i++) {
        t.unshift("0");
    }
    return parseInt(t.reverse().join(""), 2);
}
// 14 -> 00001110 -> 01110000 -> 112
console.log(mirror_bits(14));
// 56 -> 00111000 -> 00011100 -> 28
console.log(mirror_bits(56));
// 234 -> 11101010 -> 01010111 -> 87
console.log(mirror_bits(234));


 */