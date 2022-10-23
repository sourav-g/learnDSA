let a=[0,8,5,23,0,34,20,0,0,-3];

moveZerosToEnd(a);

//* TC = O(n)
function moveZerosToEnd(a){
    let res=0;                //* count of non-zero elements
    for(let i=0; i<a.length; i++){
        if(a[i]!=0){
            if(i!=res){
                a[res]=a[i];  //* swap a[i] and a[res]
                a[i]=0;
            }    
            res++;
        }
    }
    console.log(a);

}