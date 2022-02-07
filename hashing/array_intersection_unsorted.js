let a = [10,20,10,30,20];  //--> m
let b = [20,10,10,40];     //--> n

//? ****Solution -- 1*****/
//* TC = Theta(m+n)
//* SC = O(m+n)
let arrayIntersection = function(a,b){
    const set_a = new Set();
    const set_b = new Set();
    for(let i=0; i<a.length; i++){      //O(m)
        set_a.add(a[i]);
    }
    for(let i=0; i<b.length; i++){      //O(n)
        set_b.add(b[i]);
    }
    let count=0;
    set_a.forEach(function(value){      //O(m)        
        if(set_b.has(value)) count++;   //search => O(1)
    })
    return count;
}
console.log(arrayIntersection(a,b));



//? ****Solution -- 2 (Reducing Aux space) *****/
//* TC = Theta(m+n)
//* SC = O(m)
console.log(arrayIntersection_2(a,b));
function arrayIntersection_2(a,b){
    const set_a = new Set();
    for(let i=0; i<a.length; i++){      //O(m)
        set_a.add(a[i]);
    }

    let count = 0;
    for(let i=0; i<b.length; i++){      //O(n)
        if(set_a.has(b[i])){
            count++;
            set_a.delete(b[i]);
        }
    }
    return count;
}    