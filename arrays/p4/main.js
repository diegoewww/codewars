// Your task is to sum the differences between consecutive pairs in the array in descending order.
function sumOfDifferences(arr) {
  
    let newArr = arr.sort((a,b)=> b-a)
    
    let resultado = 0;

    console.log(newArr)

    for(let i=0; i<newArr.length-1;i++){
      resultado = resultado + (newArr[i]-newArr[i+1]);
      console.log(resultado)
    }
    return resultado
   
  }

let arr = [1,2,10]

console.log(sumOfDifferences(arr))