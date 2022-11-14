import java.util.*;
class F1RULE{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    double X = sc.nextDouble();
		    double Y = sc.nextDouble();
		    double ans = (X*1.07);
		    if(ans>Y){
		        System.out.println("Yes");
		    }
		    else if(Y==ans){
		        System.out.println("Yes");
		    }
		    else{
		        System.out.println("No");
		    }
		}
	}
}
