import java.util.Scanner;

public class NumberCount{
    public static int countOccurrence(int a[],int n,int x){
        int count=0;
        for(int i=0;i<n;i++){
            if(x==a[i]){
                count++;
            }
        }
        return count;
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array = ");
        int n = sc.nextInt();
        int a[] = new int[n];
        for(int i=0;i<n;i++){
            System.out.println("Enter array Number = ");
            a[i]=sc.nextInt();
        }
        System.out.println("Enter number which is find = ");
        int x = sc.nextInt();
        System.out.println("Output = "+countOccurrence(a, n, x));
        
    }
}