let arr = [1,4,-4,-3,-10,5];  

//?Sub Array is contiguos, else its a subsequence
//*No of subarrays => (n+1)+ n(n-1)/2 => 22 (for n=6) 
//*Prefix sum + hashing
// TC = O(n)
// SC = O(n)

console.log(isZeroSumSubArray(arr));
function isZeroSumSubArray(arr){
    let prefixSum = 0;
    let set = new Set();
    for(let i=0; i<arr.length; i++){
        //prefixSum = 1,5,18,15,5,10  => 5 repeats
        prefixSum += arr[i];
        if(set.has(prefixSum)){
            return true;
        }else{
            if(prefixSum==0) return true;
            else
            set.add(prefixSum);
        }
    }
    return false;
}
