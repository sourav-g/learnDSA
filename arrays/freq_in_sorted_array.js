let a = [10,10,10,20,20,30,30];

findFrequency(a);

//* Method 1 : Works only for SORTED array
//* TC = O(n)
function findFrequency(a){
    const n = a.length;
    let counter = 1;
    for(var i=1; i<n; i++){
        if(a[i]==a[i-1]){
            counter++;
        }else{
            console.log(a[i-1]+'-->'+counter);
            counter=1;
        }
    }
    if(n>0) console.log(a[i-1]+'-->'+counter);
}

//* Method 2 :  Using hashing [Array can be Sorted/Unsorted]
//* TC = SC = O(n)
function findFrequencyUsingMap(a){
    const n = a.length;
    let map = new Map();
    for(let i=0; i<n; i++){
        if(map.get(a[i])){
            map.set(a[i],map.get(a[i])+1);
        }else{
            map.set(a[i],1);
        }
    }
    console.log(map);
}