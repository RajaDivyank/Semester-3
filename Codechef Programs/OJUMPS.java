import java.util.*;

class OJUMPS{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner scan = new Scanner(System.in);
		long a = scan.nextLong();
		a = a%6;
		if(a==0 || a==1 || a==3 || a==6){
		    System.out.println("yes");
		}
		else{
            System.out.println("no");
        } 
	}
}
