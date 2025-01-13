// Write a function in JavaScript to check if a given password contains repetitive numbers.
// should return true if repetitive numbers are found and false otherwise.

function checkPassword(password) {
    let stringPass = password.trim().toString();
    for (let i = 0; i < stringPass.length; i++) {
        let num = stringPass[i];
        let count = 1;
        if (num >= '0' && num <= '9') {
            while (num === stringPass[i + count]) {
                count++;
            }
            if (count > 1) {
                return true;
            }
        }
    }
    return false;
}

console.log(checkPassword("pass123111word"));
console.log(checkPassword("secure456password"));