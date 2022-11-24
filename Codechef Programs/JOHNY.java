import java.util.*;
import java.io.*;

class JOHNY{
	public static void main (String[] args) throws java.lang.Exception{
		BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
		int t = Integer.parseInt(read.readLine());
		for(int i =0;i<t;i++){
		    int n = Integer.parseInt(read.readLine());
		    int a[] = new int[n];
		    int a1[] = new int[n];
		    String s = read.readLine();
		    String l[] = s.split(" ");
		    for(int j = 0;j<n;j++){
		        a[j] = Integer.parseInt(l[j]);
		        a1[j] = Integer.parseInt(l[j]);
		    }
		    Arrays.sort(a1);
		    int k = Integer.parseInt(read.readLine());
		    int num = a[k-1];
		    int result = 0;
		    for(int j = 0;j<n;j++){
		        if(num==a1[j]){
		            result = j;
		        }
		    }
		    System.out.println(result+1);
		}
	}
}