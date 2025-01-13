// A function that reverses a string

function reverseString(string){
    return string.split('').reverse().join('');
}

console.log(reverseString('This string should be reversed'));
console.log(reverseString('Hello world!'));