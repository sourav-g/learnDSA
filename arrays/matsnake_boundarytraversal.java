public class matsnake_boundarytraversal{

    public static void main(String []args){
      
      int a[][] = {{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}};
      
      for(int i=0; i < a.length; i++){
          for(int j=0; j< a[i].length; j++){
              if(a[i][j]>9)
                   System.out.print(a[i][j]+"  ");
              else
                   System.out.print(a[i][j]+"   ");
          }
          System.out.println("\n");
      }
    
    
    
    //print matrix in snake pattern
    System.out.print("Matrix print in snake pattern : \n\n");
    for(int i= 0; i < a.length; i++){
        if(i%2==0){
             for(int j = 0; j < a[i].length; j++){
               System.out.print(a[i][j]+"  ");
             }
        }else{
             for(int j = a[i].length-1; j >=0; j--){
               System.out.print(a[i][j]+"  ");
             }
        }
    }
    
    System.out.println("\n\n\n");
    System.out.print("Matrix boundary traversal : \n\n");
    
    for(int j= 0; j < a[0].length; j++){
       System.out.print(a[0][j]+"  ");
    } 
    System.out.print(". ");
    for(int i= 1; i < a.length; i++){
       System.out.print(a[i][a[0].length-1]+"  ");
    }
    System.out.print(". ");
    for(int j= a[0].length-2; j >=0 ; j--){
       System.out.print(a[a.length-1][j]+"  ");
    }
    System.out.print(". ");
    for(int i= a.length-2; i > 0; i--){
       System.out.print(a[i][0]+"  ");
    }
    
    
    
    
    
    
    
    
    
    
    
    
   }
}