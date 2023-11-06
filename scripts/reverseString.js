const reverseString = (str) => {
    const array = str.split("");
    const reversed = array.reverse();
    const result = reversed.join("");
    return result;
}

export default reverseString;