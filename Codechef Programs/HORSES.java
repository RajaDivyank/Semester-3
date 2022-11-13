import java.util.*;

class HORSES{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc=new Scanner(System.in);
		int t=sc.nextInt();
		while(t-->0){
		    int n=sc.nextInt();
		    long arr[]=new long[n];
		    for(int i=0;i<n;i++)
		    arr[i]=sc.nextLong();
		    Arrays.sort(arr);
		    long d=9999999999l;
	        for(int i=1;i<n;i++){
	            if(arr[i]-arr[i-1]<d)
	                d=arr[i]-arr[i-1];
	        }
		System.out.println(d);
	    }
    }
}
