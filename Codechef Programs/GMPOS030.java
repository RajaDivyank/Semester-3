import java.util.*;

class GMPOS030{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t-- > 0){
		    int point = sc.nextInt();
		    int needPoint = sc.nextInt();
		    int remainingGame = sc.nextInt();
		    System.out.println(remainingGame*2+point >= needPoint ? "YES" : "NO");
		}
	}
}
