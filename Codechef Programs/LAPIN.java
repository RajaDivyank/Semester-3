import java.util.*;

class LAPIN{
	public static void main (String[] args) throws java.lang.Exception{
		try{
            Scanner sc=new Scanner(System.in);
            int t=sc.nextInt();
            for(int i=0;i<t;i++){
                String s=sc.next();
                int n=s.length();
                String s1="";
                String s2="";
                if(n%2==0){
                    s1=s.substring(0,(n/2));
                    s2=s.substring(n/2);
                }
                else{
                    s1=s.substring(0,(n/2));
                    s2=s.substring((n/2)+1);
                }
                char [] c1=s1.toCharArray();
                char [] c2=s2.toCharArray();
                Arrays.sort(c1);
                Arrays.sort(c2);
                if(Arrays.equals(c1,c2)){
                    System.out.println("YES");
                }
                else{
                    System.out.println("NO");
                }
            }
        }
        catch(Exception e){
            System.out.println(e);
        }
	}
}
