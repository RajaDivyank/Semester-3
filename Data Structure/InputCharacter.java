// Write a program to determine if an input character string is of the form aibi where i >= 1 i.e. 
// Number of ‘a’ should be equal to number of ‘b’.
import java.util.Scanner;
class Stack1{
	public char [] a=new char[100];
	public int top=-1;

	public void push(char ch){
		if(top>=99){
			System.out.println("Stack Overflow");
		}
		else{
			top++;
			a[top]=ch;
		}
	}
	public void pop(){
		if(top<=-1){
			System.out.println("Stack underflow");
		}
		else{
			top--;
		}
	}
	
}
public class InputCharacter{
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter String = ");
		String str=sc.next();
		Stack1 s1=new Stack1();
		int countB=0;
		int length=str.length();
		for(int i=0;i<length;i++){
			char ch=str.charAt(i);
			if(ch=='a'){
				s1.push(ch);
			}
			else{
				countB=countB+1;
			}
		}
		while(s1.top!=-1){
			s1.pop();
			countB--;
		}
		if(countB==0){
			System.out.println("Valid String");
		}
		else{
			System.out.println("Not valid String");
		}
	}
}