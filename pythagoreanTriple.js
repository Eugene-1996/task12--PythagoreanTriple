
function isPythagoreanTriple(integers) {
    let int = integers.sort((a,b) => (a-b))
    console.log(int)
    let a = Math.pow(int[0], 2)
    console.log(a)
    if (Math.pow(int[0], 2) + Math.pow(int[1], 2) == Math.pow(int[2], 2)){
      return true
    }
  else{ 
    return false 
  }
}


console.log(isPythagoreanTriple([5, 13, 12]))

