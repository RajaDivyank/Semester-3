import java.util.*;

class AVGFLEX{
	public static void main (String[] args) throws java.lang.Exception{
	    Scanner sc = new Scanner(System.in);
	    Integer T = sc.nextInt();
	    while(T-->0){
	        int N = sc.nextInt();
	        int[] arr = new int[N];
	        for(int k=0;k<N;k++){
	            arr[k] = sc.nextInt();
	        }
	        int res = 0;
	        for(int i=0; i< N;i++){
	            int less = 0; int high = 0;
	            for(int j=0;j<N;j++){
	                if(arr[i]>=arr[j]){
	                    less+=1;
	                }
	                else{
	                    high+=1;
	                }
	            }
	            if(less > high){
	                res+=1;
	            }
	        }
	        System.out.println(res);
	    }
    }
}
