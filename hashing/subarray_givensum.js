let arr = [1,7,13,2,7,5];
let sum = 15;

//?Sub Array is contiguos, else its a subsequence
//*No of subarrays => (n+1)+ n(n-1)/2 => 22 (for n=6) 
//*Prefix sum + hashing
// TC = O(n)
// SC = O(n)

console.log(isGivenSumSubArray(arr));
function isGivenSumSubArray(arr){
    let prefixSum = 0;
    let set = new Set();
    for(let i=0; i<arr.length; i++){
        prefixSum += arr[i];
        if(prefixSum==sum) return true; //of subarray starts from 0 case
        set.add(prefixSum);
        console.log(prefixSum);
    }
    
    //prefixsum => 1,8,21,23,30,35

    for(let value of set){
        if(set.has(value+sum)){ //O(1) considering good hashing fn.
            return true;
        }
    }
    return false;
}    
