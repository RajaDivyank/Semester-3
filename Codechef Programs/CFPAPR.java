import java.util.*;

class CFPAPR{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t-- > 0){
		    int totalQuestion = sc.nextInt();
		    int correctQuestion = sc.nextInt();
		    int needMarks = sc.nextInt();
		    System.out.println(correctQuestion*3-(totalQuestion-correctQuestion) >= needMarks ? "PASS" : "FAIL");
		}
	}
}
