function eachCons(array, n) {
    let newArr = []

    for (let i = 0; i <= array.length - n; i++) {
        newArr.push(array.slice(i, (i + n)))
    }

    return newArr
}

let array = [3, 5, 8, 13]
let n = 2

console.log(eachCons(array, n))