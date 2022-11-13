import java.util.*;

class TSTROBOT{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t-->0){
		    int n = sc.nextInt();
		    int x = sc.nextInt();
		    String s = sc.next();
		    HashSet<Integer> hs = new HashSet<>();
		    hs.add(x);
		    for(int i=0 ; i<n ; i++){
		        if(s.charAt(i) == 'L'){
		            x--;
		            hs.add(x);
		        }else{
		            x++;
		            hs.add(x);
		        }
		    }
		    System.out.println(hs.size());
		}
	}
}
