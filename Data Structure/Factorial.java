//  Write a program to find factorial of a number. (Using Loop)

import java.util.Scanner;

class Factorial{
    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Number = ");
        int n= sc.nextInt();

        double ans=1;

        for(int i=n;i>0;i--){
            ans = ans*i;
        }
            System.out.println("the answer is : "+ans);
    }

}