import java.util.ArrayList;
import java.util.LinkedList;

public class Hash {
    int BUCKET = 0;
    ArrayList<LinkedList<Integer>> hashTable;

    public Hash(int number){
        BUCKET = number;
        hashTable = new ArrayList<LinkedList<Integer>>();
        for(int i=0; i < number; i++){
            hashTable.add(new LinkedList<Integer>());
        }
    }   
    
    void insert(int number){
        int key = number % BUCKET;  //Typical Hash function
        hashTable.get(key).add(number);
    }

    boolean search(int number){
        int key = number % BUCKET;
        boolean isFound = hashTable.get(key).contains(number);
        return isFound;
    }

    void delete(int number){
        int key = number % BUCKET;
        hashTable.get(key).remove((Integer)number); 
        //2 versions of remove, one with index (default)
        //and one with object, typecase to use the latter.
    }

}

class Driver{
    public static void main(String[] args) {
        Hash myHash = new Hash(7);
        myHash.insert(22);
        myHash.insert(43);
        myHash.insert(56);
        myHash.insert(44);
        myHash.insert(98);

        System.out.println(myHash.search(56));
        System.out.println(myHash.search(12));

        myHash.delete(44);
        System.out.println(myHash.search(44));
    }
}
