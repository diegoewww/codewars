/*Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).*/

function pipeFix(numbers) {
    let first = numbers[0];
    let last = numbers[numbers.length - 1];
    let newarr = [];

    for (let i = first; i <= last; i++) {
        newarr.push(i)
    }

    return newarr;
}

numbers = [3,4,7,10]

console.log(pipeFix(numbers))
