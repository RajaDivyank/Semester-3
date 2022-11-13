import java.util.*;
import java.lang.*;
import java.io.*;

class CFPARTY{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc=new Scanner(System.in);
		int t=sc.nextInt();
		for(int j=0; j<t; j++){
		    String s=sc.next();
		    char [] arr=s.toCharArray();
		    for(int i=0; i<arr.length-4; i++){
		        if(arr[i]=='p' && arr[i+1]=='a' && arr[i+2]=='r' && arr[i+3]=='t' && arr[i+4]=='y'){
		            arr[i+2]='w';
		            arr[i+3]='r';
		            arr[i+4]='i';
		            i=i+4;
		        }
		    }
		    String str=new String(arr);
		    System.out.println(str);
		}	
	}
}
