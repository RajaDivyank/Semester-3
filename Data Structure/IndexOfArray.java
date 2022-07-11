// Read n numbers in an array then read two different numbers, replace 1st number with 2nd number 
// in an array and print its index and final array.

import java.util.Scanner;
public class IndexOfArray{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Size Of Array = ");
        int n =sc.nextInt();
        int[] numbers = new int[n];
        
        for(int i = 0;i<n;i++){
            System.out.println("Enter the Number =  ");
            numbers[i] = sc.nextInt();
        }
        System.out.println("Enter the number in you want to replace:");
        int x = sc.nextInt();
        System.out.println("Enter the number which you want to give");
        int y = sc.nextInt();
        for(int i = 0;i<n;i++){
            if(numbers[i]==x){
                numbers[i]=y;
                System.out.println("index "+i+" is changed");
            }
        }
        for(int i = 0; i<n; i++){
            System.out.println("number"+(i+1)+" is " +numbers[i]);
        }

    }
}