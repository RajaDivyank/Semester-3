import java.util.*;

class CHEFPARK{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t-- > 0){
		    int cost = sc.nextInt();
		    int scost = sc.nextInt();
		    String binary = sc.next();
		    int day = 0;
		    int streak = 0, temp = 0;
		    for(int i=0; i<binary.length(); i++){
		        if(binary.charAt(i) == '1'){
		            day++;
		            temp++;
		             if(temp > streak){
		                streak = temp;
		            }
		        }
		        else{
		            temp = 0;
		        }
		    }
		    System.out.println((cost*day)+(scost*streak));
		}
	}
}
