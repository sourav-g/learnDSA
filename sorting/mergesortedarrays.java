

import java.util.Arrays;

public class mergesortedarrays {

    public int[] doMerge(int[] a, int[] b){
        //using O(a.length+b.length) auxiliary space
        int[] mergedArr = new int[a.length+b.length]; 
        int i=0,j=0;
        int count = 0;
        while(i<a.length && j<b.length){
            if(a[i] <= b[j]){
                mergedArr[count++] = a[i];
                i++;
            }else{
                mergedArr[count++] = b[j];
                j++;
            };
        }
        while(i<a.length){
            mergedArr[count++] = a[i];
            i++;
        }
        while(j<b.length){
            mergedArr[count++] = b[j];
            j++;
        }
        return mergedArr;
    }


    public static void main(String[] args) {
        int[] arr1 = {10,15,20,22};
        int[] arr2 = {5,6,6,15,21,50};
        int[] mergedArr = new mergesortedarrays().doMerge(arr1, arr2);
        System.out.println(Arrays.toString(mergedArr));
    }
}
