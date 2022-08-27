import java.util.Scanner;

class Linear{
    int a[] = new int[5];
    int key;
    public void getData(){
        Scanner sc = new Scanner(System.in);
        for(int i=0;i<5;i++){
            System.out.println("Enter Array element = ");
            a[i] = sc.nextInt();
        }
        System.out.println("Enter Search Number = ");
        key = sc.nextInt();
    }
    public void Search(){
        int flag=0;
        int i=0;
        int pos;
        for( i=0 ; i<5 && flag==0 ;i++){
            if(a[i]==key){
                flag=1;
                pos = i+1;
            }
        }
        if(flag==1){
            System.out.println("Search Element is Found");
        }
        else{
            System.out.println("Search Element is Not Found");
        }
    }
}
public class LinearSearch {
    public static void main(String[] args) {
        Linear li = new Linear();
        li.getData();
        li.Search();
    }
}
