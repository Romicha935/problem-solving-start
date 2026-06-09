const numbers = [3,8,12,7,21,30];

let even = 0;
let evenArray = []
for(let i = 0; i< numbers.length; i++ ){
    if(numbers[i] % 2 == 0) {
        // even = even + numbers[i]
        even++
        evenArray.push(numbers[i])
    }
}

console.log(even)
console.log(evenArray)
