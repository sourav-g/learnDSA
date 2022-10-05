let arr = [1,0,1,1,1,0,0,1,0];

//* MOST ASKED in Interviews
//* Modified array => {1,-1,1,1,1,-1,-1} 

//~ TC = O(n)
//~ SC = O(n)
console.log(getLengthOfLongestSubArray(arr));

function getLengthOfLongestSubArray(arr){
    let map = new Map(); 
    let maxLength = 0;
    let prefixSum = 0;
    let modifiedArr = arr.map((element)=>{
        if(element==0) return -1;
        return 1;
    })
    for(let i=0; i<modifiedArr.length; i++){
        prefixSum += modifiedArr[i];
        if(map.has(prefixSum)){
            let length = i - map.get(prefixSum);
            if(length > maxLength){
                maxLength = length;
            }
        }else{
            map.set(prefixSum,i);
        }
    }
    return maxLength;
}