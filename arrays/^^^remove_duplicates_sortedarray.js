let a = [10,20,20,30,30,30,40,50];

//TC = O(n)
//SC = O(n) -> Using extra array
function removeDuplicates(a){
    let b = [];
    b.push(a[0]);
    for(let i=1; i<a.length; i++){
        if(a[i]!=a[i-1]){
            b.push(a[i]);
        }
    }
    console.log(b);
}

//?** Check again later

removeDuplicatesEfficient(a);


function removeDuplicatesEfficient(a){
    let index = 0;
    for(let j=1; j<a.length; j++){
        if(a[j]!=a[index]){
            index++;
        }else{
            //TODO
        }
    }
    console.log(a);
}