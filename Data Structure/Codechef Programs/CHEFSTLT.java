import java.util.*;

class CHEFSTLT{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t-- > 0){
		    String s1 = sc.next();
		    String s2 = sc.next();
		    int distinct = 0,question=0;
		    for(int i = 0;i<s1.length();i++){
		        if(s1.charAt(i) != '?' && s2.charAt(i) != '?'){
		            if(s1.charAt(i) != s2.charAt(i)){
		                distinct++;
		            }
		        }
		        else{
		            question++;
		        }
		    }
		    question += distinct;
		    System.out.println(distinct + " " + question);
		}
	}
}

