import java.util.*;
import java.lang.*;
import java.io.*;

class WAV2{
	public static void main (String[] args) throws java.lang.Exception{
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st=new StringTokenizer(br.readLine());
		int n=Integer.parseInt(st.nextToken());
		int q=Integer.parseInt(st.nextToken());
		int[] arr=new int[n];
		String inp[]=br.readLine().trim().split(" ");
		for (int i=0;i<n;i++)
		    arr[i]=Integer.parseInt(inp[i]);
	    Arrays.sort(arr);
Out:	 while (q-->0){
	        int x=Integer.parseInt(br.readLine());
	        int l=0, r=n-1, m=(l+r)/2, ans=0;
	        while (true){
	            m=(r+l)/2;
	            if (r<l){
	                break;
	            }
	            if (x>arr[m]){
	                l=m+1;
	                ans=l;
	            }
	            else if (x<arr[m]){
	                r=m-1;
	                ans=r;
	            }
                else{
                    System.out.println(0);
                    continue Out;
                }
	        }
	        if (x>arr[0])
	            m++;
	            
            int neg=n-m;
            if (neg%2==0)
                System.out.println("POSITIVE");
            else
                System.out.println("NEGATIVE");
	    }
	}
}
