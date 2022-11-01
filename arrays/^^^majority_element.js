let a = [8,7,6,8,6,6,6,6];

console.log(majorityElementIndex(a));

//*TC => O(n^2)
function majorityElementIndex(a){
    const n = a.length;
    for(let i=0; i<n; i++){
        let count = 1;
        for(let j=i+1; j<n; j++){
            if(a[i]==a[j]){
                count++;
            }
        }
        if(count> n/2) return i; //~majority element check
    }
    return -1;
}


//!using Moore Voting algorithm