// Find k’th smallest element in an array
import java.util.Scanner;
public class KthSortElement{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Array Size = ");
        int n = sc.nextInt();
        int[] a = new int[n];
        for(int i=0;i<n;i++){
            System.out.println("Enter Array Element = ");
            a[i] = sc.nextInt();
        }

        System.out.println("Enter kth smallest element in an array = ");
        int k = sc.nextInt();

         for(int i=0; i<a.length-1; i++) {
            for(int j=i+1; j<a.length; j++){
                if (a[i]>a[j]){
                    int extra = a[i];
                    a[i] = a[j];
                    a[j] = extra;
                }
            }
        }
        System.out.println("The "+k+"th smallest element is "+a[k-1]);
    }
}
