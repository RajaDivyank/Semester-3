import java.util.*;

class TTENIS{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    int one=0;
		    int zero=0;
		    String s = sc.next();
		    for(int i=0;i<s.length();i++){
		        char c = s.charAt(i);
		    }
		    for(int i=0;i<s.length();i++){
		        if(s.charAt(i)=='1'){
		            one++;
		        }
		        else if(s.charAt(i)=='0'){
		            zero++;
		        }
		    }
		    if(one>=zero){
		        System.out.println("WIN");
		    }
		    else{
		        System.out.println("LOSE");
		    }
		}
	}
}
