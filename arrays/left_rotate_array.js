let a = [1,2,3,4,5];

let D = 1;

console.log(rotateArray3(a,D));

//* TC = O(nD)
function rotateArray(a,D){
    let n = a.length;
    for(let i=0; i<D; i++){
        let first = a[0];
        for(let j=1; j<n; j++ ){
            a[j-1]=a[j];
        }
        a[n-1]=first;
    }
    return a;
}


//* TC = O(n); SC = O(D)
function rotateArray2(a,D){
    let temp = new Array(D);
    let n = a.length;
    for(let i=0; i < n; i++){
        if(i<D){
            temp[i] = a[i];
        }else{
            a[i-D] = a[i];
        }
        if((n-i)<=D){
            a[i] = temp[D-(n-i)];
        }
    }
    return a;
}


//TC=O(n)

function rotateArray3(a,D){
    const n = a.length;
    reverseArray(a,0,D);
    reverseArray(a,D,n);
    reverseArray(a,0,n);
    return a;
}

function reverseArray(a,begin,end){
    for(let i=begin,j=end-1; i<j; i++,j--){
        a[i] = a[i]+a[j];    
        a[j] = a[i]-a[j];
        a[i] = a[i]-a[j];
    }
}