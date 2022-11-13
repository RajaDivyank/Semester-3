import java.util.*;

class SPELLBOB{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc = new Scanner(System.in);
		int n=sc.nextInt();
		while(n-->0){
		    String upface=sc.next();
		    String btface=sc.next();
            if((upface.charAt(0)=='o' || btface.charAt(0)=='o') && (upface.charAt(1)=='b' || btface.charAt(1)=='b') && (upface.charAt(2)=='b' || btface.charAt(2)=='b')){
                System.out.println("yes");
            }
            else if((upface.charAt(0)=='b' || btface.charAt(0)=='b') && (upface.charAt(1)=='o' || btface.charAt(1)=='o') && (upface.charAt(2)=='b' || btface.charAt(2)=='b')){
                System.out.println("yes");
            }
            else if((upface.charAt(0)=='b' || btface.charAt(0)=='b') && (upface.charAt(1)=='b' || btface.charAt(1)=='b') && (upface.charAt(2)=='o' || btface.charAt(2)=='o')){
                System.out.println("yes");
            }
            else
                System.out.println("no");
		}
	}
}
