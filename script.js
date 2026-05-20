let myarr = [4,2,8,-3,-7,9,1,5]


function maxnum(arr){
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>arr[0]){
          arr[0]=arr[i]
        }
    }
    return arr[0]
}

console.log("The maximum number in the given array is: ",maxnum(myarr));

// let myarr1=[1,2,3,4,5]
let myarr1 = [65,34,98,12,36,69]

let sum = function (arr){
    let suma = 0;
    for(let i=0;i<arr.length;i++){
      arr[i]
      suma+=arr[i]      
    }
    return suma;
}

console.log("The sum of all numbers in the given array is:", sum(myarr1));

let myarr2 = [32,67,55,87,34,60,13,87]


let oddno = (arr)=>{
    let count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            count+=1
        }
    }
    return count
}

console.log("The odd numbers in the given array is:", oddno(myarr2));


