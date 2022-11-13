// Mathison and pangrams

import java.util.Scanner;

class Matpan{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc=new Scanner(System.in);
		int t=sc.nextInt();
		while(t-- >0){
		    int arr[]=new int[26];
		    for(int i=0;i<26;i++){
		        arr[i]=sc.nextInt();
		    }
		    String st=sc.next();
		    String str="abcdefghijklmnopqrstuvwxyz";
		    int sum=0;
		    for(int i=0;i<26;i++){
		        if(st.indexOf(str.charAt(i))==-1){
		            sum+=arr[i];
		        }
		    }
		    System.out.println(sum);
		}
	}
}
