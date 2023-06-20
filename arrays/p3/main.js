function findAverage(array) {
    // your code here
    let newArr = array.reduce((acc, x) => acc + x, 0) / array.length

    if (array.length == 0) {
        return 0
    } else {
        return newArr
    }

}

let array = [1, 2, 3, 4]

console.log(findAverage(array))