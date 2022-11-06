import java.util.*;

class SHKNUM{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc=new Scanner(System.in);
		int t=sc.nextInt();
		while(t-->0){
		    long n=sc.nextInt();
		    if(n==1) {
		        System.out.println(2);
		        --t;
		        continue;
		    }
		    long x=2;
		    while(x<n) {
		        x*=2;
		    }
		    if(x==n) {
		        System.out.println(1);
		    }
		    else {
		        long ans=Math.min(Math.abs(x+1-n),Math.abs(n-(x/2+1)) );   
		        long diff=x-x/2,y=2;
		        while(y<diff) {
		            ans=Math.min(ans,Math.abs(x/2+y-n));
		            y=y<<1;
		        }
		        System.out.println(ans);
		    }
		}
	}
}
