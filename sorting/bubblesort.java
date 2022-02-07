

import java.util.Arrays;

//In place(O(1) auxiliary space) and STABLE
//Never changes order of equal elements

public class bubblesort {

    //TC: O(n2)
    public int[] doSort(int[] arr){
        int n = arr.length;
        for(int i=0;i<n-1;i++){
            //if we are at ith iteration, then `i` elements
            //are already fixed to their last position, no point 
            //comparing with them
            for(int j=0;j<n-i-1;j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j+1];
                    arr[j+1] =  arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    //O(n) -> (linear time) array sorted from the beginning
    //O(n) < TC < O(n2)  -> array became sorted somewhere in between

    public int[] doOptimizedSort(int[] arr){
        int n = arr.length;
        for(int i=0;i<n-1;i++){
            Boolean swapped = false;
            for(int j=0;j<n-i-1;j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j+1];
                    arr[j+1] =  arr[j];
                    arr[j] = temp;
                    swapped = true;
                }
            }
            if(swapped == false) break;
        }
        return arr;
    }

    public static void main(String[] args) {
        int[] arr1 = {2,10,8,7,1,14};
        arr1 = new bubblesort().doSort(arr1);
        System.out.println(Arrays.toString(arr1));

        int[] arr2 = {2,1,7,8,10,14};
        arr1 = new bubblesort().doOptimizedSort(arr2);  
        System.out.println(Arrays.toString(arr2));
    }
}


