public class star_patterns{

    public static void main(String []args){
       int arr[][] = new int[6][];
       
       
       System.out.println("\n");
       for(int i=0 ; i<arr.length; i++){
           arr[i] = new int[i+1];
           for(int j=0; j< arr[i].length ; j++){
               System.out.print("*"+"  ");
           }
           System.out.println("\n");
       }
       
       
       System.out.println("\n");
       for(int i=0 ; i<arr.length; i++){
           arr[i] = new int[arr.length-i];
           for(int j=0; j< arr[i].length ; j++){
               System.out.print("*"+"  ");
           }
           System.out.println("\n");
       }
       
       System.out.println("\n");
       for(int i=0 ; i<arr.length; i++){
           arr[i] = new int[arr.length-i];
           int j=0;
           for(; j< arr[i].length ; j++){
               System.out.print("*"+"  ");
           }
           System.out.println("\n");
           for(int m=0; m <= i; m++){
               System.out.print(" "+"  ");
           }
       }
       
       System.out.println("\n");
       for(int i=0 ; i<arr.length; i++){
           arr[i] = new int[i+1];
           
           for(int m=0; m < (arr.length-i)-1; m++){
               System.out.print(" "+"  ");
           }
           
           int j=0;
           for(; j< arr[i].length ; j++){
               System.out.print("*"+"  ");
           }
           System.out.println("\n");
           
       }
       
       
       
       System.out.println("\n");
       for(int i=0 ; i<arr.length; i++){
           arr[i] = new int[i+1];
           
           /*for(int m=0; m < (arr.length-i)-1; m++){
               System.out.print(" "+"  ");
           }*/
           
           
           for(int j=0,k=arr[i].length-1;  j< arr[i].length&k>0  ; j++,k--){
               if(k<=j)
               System.out.print("*"+"  ");
           }
           System.out.println("\n");
           
           /* for(int m=0; m <= i; m++){
               System.out.print(" "+" ");
           }*/
           
       }
    }
}