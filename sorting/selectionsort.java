

import java.util.Arrays;

/**
 * Does less memory writes compared to quick,merge,insertion,bubble sort,etc
 * Cycle Sort is optimal in terms of memory writes
 * Basic idea for Heap Sort
 * In place and Not stable
 * 
 * memory write can be constly operation in situations like EEPROM.
 * In EEPROM, with more writes age of memory reduces.
 * 
 * T.C = O(n2) in all cases
 */
public class selectionsort {
    
    // till ith iteration, the 1st half is a sorted array
    // from i+1 it is unsorted
    // finding minimum in the unsorted and putting in sorted part
    /*
    *    sorted (ith) unsorted   
    */
    public int[] doSort(int[] arr){
        int n = arr.length;
        for(int i=0; i < n-1; i++){
            int min_index = i;   
            for(int j=i+1; j < n; j++){
                if(arr[j] < arr[min_index]){
                    min_index = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index] = temp;
        }
        return arr;
    }

    public static void main(String[] args) {
        int[] arr1 = {4,5,2,7,8,6,3,1};
        arr1 = new selectionsort().doSort(arr1);
        System.out.println(Arrays.toString(arr1));
    }
}
