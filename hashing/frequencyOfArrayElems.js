const arr = [10,12,10,15,10,20,12,12];

console.log(calcFrequency(arr));

//TC = AS = O(n)
function calcFrequency(arr){
    let map = new Map();
    
    for(let i=0; i<arr.length; i++){
        if(map.get(arr[i]) != undefined){
            map.set(arr[i],map.get(arr[i])+1);
        }else{
            map.set(arr[i],1);
        }
    }
    return map;

}