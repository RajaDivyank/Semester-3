import java.util.*;

class ALPHABET{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc = new Scanner(System.in); 
		String st = sc.next(); 
		int t = sc.nextInt(); 
		while(t-->0){
		    int count = 1;
		    String s1 = sc.next(); 
		    for(int i=0;i<s1.length();i++){
		        char fg = s1.charAt(i);
		        if(st.indexOf(fg) == -1){
		            count = 0;
		        }
		    }
            if(count==1){
                System.out.println("YES");
            }
            else{
                System.out.println("NO");
            }
		}
	}
}
