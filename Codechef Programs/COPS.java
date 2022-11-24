import java.util.*;

class COPS{
	public static void main (String[] args) throws java.lang.Exception{
	   	Scanner sc=new Scanner(System.in);
		int t=sc.nextInt();
		while(t-->0){
		    int m=sc.nextInt();
		    int x=sc.nextInt();
		    int y=sc.nextInt();
		    int[] arr=new int[m];
		    for(int i=0;i<m;i++){
		        arr[i]=sc.nextInt();
		    }
		    int temp=x*y;
		    int count=0;
		    int[] temporary=new int[101];
		    for(int i=0;i<m;i++){
		        int l=arr[i]-temp;
		        int r=arr[i]+temp;
		        if(l<1){
		            l=1;
		        }
		        if(r>100){
		            r=100;
		        }
		        for(int j=l;j<=r;j++){
		            temporary[j]=1;
		        }
		    }
		    for(int i=1;i<=100;i++){
		        if(temporary[i]==0){
		            count++;
		        }
		    }
		    System.out.println(count);
		}
	}
}
