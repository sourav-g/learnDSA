let arr = [8,3,0,5,-6,6,2,2];  //<- i
let sum = 10;

//* prefixSum map   => (8,0)
//                     (11,1) 
//                     (11,2) <- ignore, since earlier entry will
//                     (16,3)    ensure longer subarray with same sum.
//                     (10,4)
//                     (16,5) <- ignore
//                     (18,6) 
//                     (20,7)
//?                     ^  ^
//?                     |  |
//?         k = prefixSum  v=index    
//* prefixSum - sum => -2,1,1,6,0,6,8,10 

//~ TC = O(n)
//~ SC = O(n)
console.log(getLengthOfLongestSubArray(arr));

function getLengthOfLongestSubArray(arr){
    let prefixSum = 0;
    let map = new Map();
    let maxLength = 0;
    for(let i=0; i < arr.length; i++){
        prefixSum += arr[i];
        if(prefixSum == sum) maxLength = i+1;
        //console.log(prefixSum-sum);
        if(map.has(prefixSum-sum)){
           let len = i-map.get(prefixSum-sum);
           if(len > maxLength){
                maxLength = len;
           }
        }
        if(!map.has(prefixSum)){
            map.set(prefixSum,i);
        }
    }
    console.log(map);
    return maxLength;
}