export function sum(numone, numtwo) {
  return numone + numtwo;
}

export function sumAll(num){
  let hasil = 0;
  for (const number of num) {
    hasil += number
  }
  return hasil;
}