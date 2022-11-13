import java.util.*;

class Codechef{
	public static void main (String[] args) throws java.lang.Exception{
	    Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t-->0) {
			int n = sc.nextInt();
			int a[] = new int[n];
			for (int i = 0; i < a.length; i++) {
				a[i] = sc.nextInt();
			}
			for (int i = 0; i < n; i++) {
				int c = 0;
				for (int j = i+1; j < n; j++) {
					if(a[j]>a[i])
						c++;
				}
				System.out.print(c+" ");
			}
			System.out.println();
		}
	}
}
