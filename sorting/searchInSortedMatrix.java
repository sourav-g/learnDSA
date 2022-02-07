public class searchInSortedMatrix {
    
    public  boolean search(int[][] mat, int num){

        //possible start points -> top-right (or) bottom-left
        //using bottom-left
        //O(r+c)

        int r = mat.length-1;
        int c = 0;
        while(r >= 0 && c < mat[0].length){
             if(mat[r][c] == num) return true;
             else if( num > mat[r][c] ) c++;
             else r--;
        }
        return false;
    }


    //driver code
    public static void main(String[] args) {
        int matrix[][] = {{10,20,30,40},{15,25,35,45},{27,29,37,48},{32,33,39,50}};
        boolean bool = new searchInSortedMatrix().search(matrix,29);
        System.out.println(bool);
    }
}
