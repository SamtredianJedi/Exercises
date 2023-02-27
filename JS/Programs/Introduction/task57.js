// Encode a String to Base64

/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will encode a string to Base64.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation.

Example 1: Encode a String to Base64 Using btoa()
// program to encode a string to Base64
// defining the string
const str = "Learning JavaScript"; 

// encoding the string
const result = window.btoa(str);
console.log(result);

// decoding the string
const result1 = window.atob(result);
console.log(result1);





In the above example, the btoa() method is used to convert the string to Base64.

The atob() method is used to convert the Base64 to a string.

Example 2: Encode a String to Base64 Using Base64 Object
// program to encode a string to Base64
// create Base64 Object
const Base64 = {
// private property
_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

// public method for encoding
encode : function (input) {
    let output = "";
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {




            The encode() method encodes a string to Base64. The decode() method decodes the Base64 to a string.

            
 */