let arr = [1,6,2,9,3,3,4,9,4];

//TC = O(nlogn)
//AS = 1) If array modification allowed, then O(n), since create array with distinct elements
//     2) O(1)

arr = arr.sort((a,b)=>{
    return a-b;
});
//console.log(arr);

let result = 1;
let count = 1;
for(let i=1; i<arr.length; i++){
    if(arr[i] == arr[i-1]+1){
        count++;
    }else{   
        if(count > result) result = count;
        count = 1;
        if(arr[i] == arr[i-1]){
            i++;
        }
    }
}
if(count > result) result = count;
//console.log(result);

//?--------------------------------------------------------------------------
//! Efficient solution

//* TC = O(n) { Since constant 2n lookups}
//* SC = O(n)
let arr1 = [1,3,4,3,3,2,9,10];

let set = new Set();
for(let i=0; i < arr1.length; i++){
    set.add(arr1[i]);
}
console.log(set);
let maxLength = 1;
let currentCount = 1;

for(let num of set){
    if(!set.has(num-1)){              //constant 2n
        while(set.has(num+1)){        //lookups where n is size of set
            currentCount++;
            num = ++num;
        }
        if(currentCount > maxLength) maxLength = currentCount;
        currentCount = 1
    }
}
if(currentCount > maxLength) maxLength = currentCount;
console.log(maxLength);






