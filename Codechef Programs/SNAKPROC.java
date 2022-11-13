import java.util.*;

class SNAKPROC{
	public static void main (String[] args) throws java.lang.Exception
	{
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t-->0){
		    int l=sc.nextInt();
		    String s=sc.next();
		    int count=0;
		    boolean b=true;
		    for(int i=0;i<l;i++){
		        if(s.charAt(i)=='H'){
		            count++;
		        }
		        else if(s.charAt(i)=='T'){
		            count--;
		        }
		        if(count<0||count>1){
		            b=false;
		            break;
		        }
		    }
		    if(b&&count==0){
		        System.out.println("Valid");
		    }
		    else{
		        System.out.println("Invalid");
		    }
		}
	}
}
