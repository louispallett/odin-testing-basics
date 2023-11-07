const analyzeArray = (arr) => {
    const sortedArr = sort(arr);
    const result = {
        average: (arr.reduce((a, b) => a + b)) / arr.length,
        min: sortedArr[0],
        max: sortedArr[arr.length - 1],
        length: arr.length
    }
    return result;
}

// Helper function: sort
const sort = (arr) => {
    if(arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const lefthand = arr.slice(0, mid);
    const righthand = arr.slice(mid, arr.length);

    return merge(sort(lefthand), sort(righthand));
}

// Helper function: merge
const merge = (left, right) => {
    let i = 0;
    let j = 0;

    const result = [];

    for(; i < left.length && j < right.length;) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++
        }
    }

    while(i < left.length) {
        result.push(left[i]);
        i++;
    }

    while(j < right.length) {
        result.push(right[j]);
        j++
    }

    return result;
}


export default analyzeArray;