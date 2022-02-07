

import java.util.Arrays;

/**
 * O(n) < TC < O(n2)
 * ^            ^
 * |            |
 * sorted      reverse sorted 
 * Inplace and Stable
 * Best for small sized arrays
 */
public class insertionsort {
    
    // till (i-1)th iteration, the 1st half is a sorted array
    // from ith it is unsorted
    // taking ith in the unsorted and putting in sorted part in
    // correct position.
    /*
    *    sorted (ith value=key) unsorted   
    *      1...................n-1 
    */
    public int[] doSort(int[] arr){
        int n = arr.length;
        for(int i=1; i < n; i++){
            int key = arr[i];
            int j=i-1;
            while(j>=0 && arr[j]>key){ //if >= , then will become unstable
                arr[j+1]=arr[j];
                j--;
            }
            arr[j+1]=key;
        }
        return arr;
    }

    public static void main(String[] args) {
        int[] arr1 = {4,5,2,7,8,6,3,1};
        arr1 = new insertionsort().doSort(arr1);
        System.out.println(Arrays.toString(arr1));
    }
}
