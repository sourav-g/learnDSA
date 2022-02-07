let arr = [10,10,10];

console.log(countDistinct(arr));
function countDistinct(arr){
    let set = new Set();
    for(let i=0; i<arr.length; i++){
        set.add(arr[i]);   //average O(1) search/insert, hash fn
    }
    return set.size;
}

//TC = O(n)
//SC = O(n)