// Write a program to check whether a number is prime or not.

import java.util.Scanner;

public class Prime{
	public static void main(String[] args) {
			
		Scanner sc = new Scanner(System.in);

		System.out.println("enter the number :");
		int n = sc.nextInt();
		int m=1;

		for(int i=2;i<=(n/2);i++){
				if(n%i==0){
					m=2;					
				}
			}

		if(m==1){
				System.out.print("prime number");
			}
		else{
				System.out.print("Not prime number");
			}
        }
}