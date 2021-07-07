const isEven = (num) => {
  if (num%2==0) {
    return true
    
  }
else {
  return false
}
  
  // write code for numbers.isEven

}

const sum = (arr) => {
  let sum = 0
  for (let i=0; i < arr.length; i++) {
 sum=sum + arr[i]
  }
  // write code for numbers.sum
return sum
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((arr[i] + arr[j]) === sum) {
        return true;
      } else {
        return false;
      }
    }
  }

}

module.exports = {
  isEven,
  sum,
  comboSum
}