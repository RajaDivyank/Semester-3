import java.util.*;

class CHEFARRP{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc= new Scanner(System.in);
		int t=sc.nextInt();
		while(t-->0){
		    int n=sc.nextInt();
		    int a[]=new int[n];
		    for(int i=0;i<n;i++){
		        a[i]=sc.nextInt();
		    }
		    int temp=0;
		    for(int i=0;i<n;i++){
		        int sum=0,pro=1;
		        for(int j=i;j<n;j++){
		            sum +=a[j];
		            pro *=a[j];
		           if(sum==pro)
		            temp++;
		        }
		    }
		    System.out.println(temp);
		}
	}
}