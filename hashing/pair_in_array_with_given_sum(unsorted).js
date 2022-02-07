let arr = [3,2,8,15,-8];   //? [n*(n-1)]/2 possible pairs //n=5
const sum = 17;

//*Approch 1 : Using hashing
//TC = O(n)
//SC = O(n)
console.log(isPairPresent(arr));
function isPairPresent(arr){
    let set = new Set();
    for(let i=0; i<arr.length; i++){
        let diff = sum - arr[i];
        if(set.has(diff)){
            return true;
        }else{
            set.add(arr[i]);
        }
    }
    return false;
}

//* TODO 
// Approach 2 : Sort + 2 pointer approach 
// TC = O(nlogn) {logn for sort + n for linear search for the pair}
// TC = O(n) for sorted array