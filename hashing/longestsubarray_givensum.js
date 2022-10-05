let arr = [8,3,1,5,-6,6,2,2];  //<- i
let sum = 4;

//* prefixSum map   => (3,0)
//                     (4,1) (4,2) <- ignore, since earlier entry will
//                     (5,3)          ensure longer subarray with same sum.
//                     (13,4)
//                     (15,5)
//                     (18,6)
//                     (24,7)         
//                     (29,8) 
//?                     ^  ^
//?                     |  |
//?         k = prefixSum  v=index    
//* prefixSum - sum => -2,-1,-1,0,8,10,13,19,24 <- i

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