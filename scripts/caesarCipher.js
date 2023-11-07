const caesarCipher = (str, enCode) => {

    if(enCode > 25 || enCode < 1) {
        return "Encryption code must between (and including) 1 and 25."
    }

    const result = [];
    
    for(let i = 0; i < str.length; i++) {
        if(isAlphanumeric(str.charAt(i))) {
            const letter = str.charAt(i);
            const ascii = letter.charCodeAt(0) + enCode;
            let newLetter;
            // determine if upper or lower case
            if(str.charAt(i) == str.charAt(i).toUpperCase()) {
                // determine whether ascii is valid
                if(ascii > 90) {
                    // if invalid, calculate how much over 90 it is, take that number, and add 64 (the value before 'A')
                    const overBy = ascii - 90;
                    newLetter = String.fromCharCode(overBy + 64);
                } else {
                    newLetter = String.fromCharCode(ascii);
                }
            } else if(str.charAt(i) === str.charAt(i).toLowerCase()) {
                // if lower case... (96 is the value before 'a')
                if(ascii > 122) {
                    const overBy = ascii - 122;
                    newLetter = String.fromCharCode(overBy + 96);
                } else {
                    newLetter = String.fromCharCode(ascii);
                }
            }
            result.push(newLetter);
        } else {
            result.push(str.charAt(i));
        }
    }
    return result.join("");
};


const isAlphanumeric = (str) => {
    return /^[a-zA-Z0-9]+$/.test(str);
}

export default caesarCipher;