const caesarCipher = (str) => {
    const result = [];
    
    for(let i = 0; i < str.length; i++) {
        if(isAlphanumeric(str.charAt(i))) {
            const letter = str.charAt(i);
            if(letter == "z") {
                result.push("a");
            } else {
                const ascii = letter.charCodeAt(0) + 1;
                const newLetter = String.fromCharCode(ascii);
                result.push(newLetter);
            }
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