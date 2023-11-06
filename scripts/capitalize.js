const capitalize = (word) => {
    const result = word.charAt(0).toUpperCase() + word.slice(1);
    return result;
}

export default capitalize;