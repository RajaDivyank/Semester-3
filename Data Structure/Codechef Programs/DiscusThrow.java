import java.util.*;

class DiscusThrow{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    int A = sc.nextInt();
		    int B = sc.nextInt();
		    int C = sc.nextInt();
		    if(A>B){
		        if(A>C){
		            System.out.println(A);
		        }
		        else{
		            System.out.println(C);
		        }
		    }
		    else{
		        if(B>C){
		            System.out.println(B);
		        }
		        else{
		            System.out.println(C);
		        }
		    }
		}
	}
}

