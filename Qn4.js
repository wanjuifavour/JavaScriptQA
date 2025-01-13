// A function in JavaScript to check if a given string is a pangram.

function checkPangram(string) {
    string = string.toLowerCase();
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    for (let char of string) {
        alphabet.delete(char);
    }
    return alphabet.size === 0;
}

console.log(checkPangram('The quick brown fox jumps over the lazy dog'));
console.log(checkPangram('Hello World'));
