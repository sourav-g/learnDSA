public class arrayrotateby90{

    public static void printMatrix(int[][] arr){
       for(int i=0; i < arr.length; i++){
           for(int j=0; j< arr[i].length; j++){
               if(arr[i][j]>9)
                    System.out.print(arr[i][j]+"  ");
               else
                    System.out.print(arr[i][j]+"   ");
           }
           System.out.println("\n");
       }
    }
       
     public static void main(String []args){
       int a[][] = {{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}};
       
       //print matrix
       printMatrix(a);
       
       System.out.print("Matrix rotate by 90 deg anti-clockwise (naive): \n\n");
       System.out.print("TC = O(n2) & AS = O(n2) \n\n");
        
         int result[][] = new int[4][4];
         for(int i=0; i< a.length; i++){
             for(int j=0 ; j< a[i].length; j++){
                 result[(a.length-j)-1][i] = a[i][j]; 
             }
             
         }
      //print matrix
       printMatrix(result);
      
     }
}