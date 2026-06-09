// const numbers = [10,20,30,40,50];

// let sum = 0 

// for(let i = 0; i<numbers.length; i++){
//     sum = sum + numbers[i]
// }
// for(const num of numbers){
//     sum += num
// }

// console.log(sum)


const nums =[1,2,3,4,5,6];
 let sum = 0;

 for(let i = 0; i< nums.length; i++){
    if(nums[i] % 2 === 0) {
        sum = sum + nums[i]
        sum1 =  sum.length
    }
 }

 console.log(sum)
 console.log(sum1)
 