import java.util.*;

class AMR15A{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int[] A = new int[N];
		int even = 0;
		int odd = 0;
		for (int i=0;i<N;i++){
		    A[i] = sc.nextInt();
		} 
		for(int i=0;i<N;i++){
		    if(A[i]%2==0){
		        even++;
		    }
		    else{
		        odd++;
		    }
		}
		if(even<=odd){
		    System.out.println("NOT READY");
		}
		else{
		    System.out.println("READY FOR BATTLE");
		}
	}
}