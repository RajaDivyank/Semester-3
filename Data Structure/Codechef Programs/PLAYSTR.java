import java.util.*;

class PLAYSTR{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc=new Scanner(System.in);
		int t=sc.nextInt();
		for(int i=0;i<t;i++)
		{
		    int n=sc.nextInt();
		    String s=sc.next();
		    String r=sc.next();
		    int arr[]=new int[2];
		    for(int j=0;j<n;j++)
		    {
		        if(s.charAt(j)=='1' )
		        {
		            arr[0]=arr[0]+1;
		        }
		        else
		        {
		            arr[1]=arr[1]+1;
		        }
		    }
		    for(int j=0;j<n;j++)
		    {
		        if(r.charAt(j)=='1' )
		        {
		            arr[0]=arr[0]-1;
		        }
		        else
		        {
		            arr[1]=arr[1]-1;
		        }
		    }
		    if(arr[0]==0 && arr[1]==0)
		    {
		        System.out.println("YES");
		    }
		    else
		    {
		        System.out.println("NO");
		    }
		}
	}
}
