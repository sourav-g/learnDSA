let arr = [140,11,50,10000,30]

//TC = O(n)
//SC = O(1)
let isLargest = 0;  
for(let i=1; i< arr.length; i++){
    if(arr[i] > arr[isLargest]){
        isLargest = i;
    }
}

console.log(isLargest);