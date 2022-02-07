
import java.util.Arrays;

/**
 * Divide and Conquer algorithm (divide,conquer and merge)
 * Stable
 * O(nlogn) time and O(n) aux space
 * Well suited for Linked Lists. Works in O(1) aux space
 * In general, for Arrays, QuickSort outperforms
 * Used in external sorting. The whole input is not required at once
 */
public class mergesort {
   
    public void doSort(int[] arr,int l, int r){
        if(l < r){ //checking atleast 2 elements are there in the array
            int m = l + (r-l)/2; 
            doSort(arr, l, m);
            doSort(arr, m+1, r);
            merge(arr,l,m,r);
        }
    }

    private void merge(int[] arr, int l, int m, int r) {
        //create 2 subarrays
        int[] left_arr = new int[m-l+1];
        int[] right_arr = new int[r-m];
        int i=0,j=0;
        for(; i<left_arr.length; i++){
            left_arr[i] = arr[l+i];
        }
        for(; j<right_arr.length; j++){
            right_arr[j] = arr[m+1+j];
        }   
        i=0;j=0;
        int k=l;
        while(i<left_arr.length && j<right_arr.length){
            if(left_arr[i] <= right_arr[j]){
                arr[k++] = left_arr[i];
                i++;
            }else{
                arr[k++] = right_arr[j];
                j++;
            }
        }
        while(i<left_arr.length){
            arr[k++] = left_arr[i];
            i++;
        }
        while(j<right_arr.length){
            arr[k++] = right_arr[j];
            j++;
        }

    }


    public static void main(String[] args) {
        int[] arr = {4,0,5,2,7,22,8,6,3,1};
        new mergesort().doSort(arr,0,arr.length-1);
        System.out.println(Arrays.toString(arr));
    }
}
