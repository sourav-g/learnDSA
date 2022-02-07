import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

public class diagonal_traverse {
    HashMap<Integer,List<Integer>> map = new HashMap<>();

    public int[] findDiagonalOrder(int[][] mat) {
        
        //building the dictionary based on row+col sum
        for(int i=0; i < mat.length; i++){
            for(int j=0; j < mat[i].length; j++){
                if(map.containsKey(i+j)){
                    (map.get(i+j)).add(mat[i][j]);
                }else{
                    map.put(i+j, new ArrayList<>(Arrays.asList(mat[i][j])));
                }
            }    
        }
        
        //iterate map/dictionary and print diagonals
        List<Integer> result = new ArrayList<>();
        map.forEach((key,value) -> {
            if(key % 2 == 0) Collections.reverse(value);
            result.addAll(value);
        });

        int[] finalResult = new int[result.size()];
        for (int i = 0; i < result.size(); i++){
            Integer temp = (Integer)result.get(i);
            finalResult[i] = temp.intValue();
        }
        return finalResult;
        
    }

    //driver code
    public static void main(String[] args) {
        int matrix[][] = {{1,2,3},{4,5,6}};
        int[] arr = new diagonal_traverse().findDiagonalOrder(matrix);
        System.out.println(Arrays.toString(arr));
    }
}


