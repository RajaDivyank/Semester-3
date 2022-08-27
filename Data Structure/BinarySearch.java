import java.util.Scanner;

class Binary{
    int a[] = new int[5];
    int key=0;
    int start=0;
    int end=5;
    int pos=0;
    int flag=0;
    int mid=0;
    public void getData(){
        Scanner sc = new Scanner(System.in);
        for(int i=0 ; i<5 ; i++){
            System.out.println("Enter Array Number = ");
            a[i] = sc.nextInt();
        }
        System.out.println("Enter Number Search = ");
        key = sc.nextInt();
    }
    public void search(){
        while(start<=end && flag==0){
            mid=(start+end/2);
            if(a[mid]==key){
                flag=1;
                pos=mid+1;
            }
            if(a[mid]>key){
                end=mid-1;
            }
            if(a[mid]<key){
                start=mid+1;
            }
        }
        if(flag==0){
            System.out.println("Not Found");
        }
        else{
            System.out.println("Number is Found at = "+pos);
        }
    }
}
public class BinarySearch{
    public static void main(String[] args) {
        Binary b = new Binary();
        b.getData();
        b.search();
    }
}
// public class BinarySearch{
//         public static int search(int a[] , int n){
//             int start = 0;
//             int end = a.length;
//             int mid = (start+end/2);
//         while(start<=end){
//             mid = (start+end/2);
//             if(a[mid]==n){
//                 return 0;
//             }
//             else if(a[mid]>n){
//                 end = mid-1;
//             }
//             else{
//                 end = mid+1;
//             }
//         }
//         return 0;
//         }
//     public static void main(String[] args) {
//         int[] a = new int[5];
//         int j=1;
//         for(int i=0;i<a.length;i++){
//             a[i]=j;
//             j++;
//         }
//         System.out.println(search(a,5));
//     }
// }