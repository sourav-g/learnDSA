let a = [10,5,18,20];

//TC = O(n)

let large = 0;
let second_large = -1;

for(let i=1; i<a.length; i++){
    if(a[i] > a[large]){
        second_large = large;
        large = i;
    }else{
        if(second_large==-1) second_large= i;
        else if(a[i] > a[second_large]){
            second_large = i;
        }
    } 

}
console.log(second_large);