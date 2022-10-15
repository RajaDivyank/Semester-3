import java.util.*;

class CHEALG{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc=new Scanner(System.in);
		int t=sc.nextInt();
		while(t-->0){
		   String s=sc.next();
		   int c=0,v=1;
		   int l=s.length();
		    for(int k=1;k<=l;k++){
		        if(k==l||s.charAt(k)!=s.charAt(k-1)){
		            if(v<10){
                        c=c+2;
                    }
		            else if(v<100){
                        c=c+3;
                    }
		            else if(v<1000){
                        c=c+4;
                    }
		            else{
                        c=c+5;
                    }
		            v=1;
		        }
		      else{
                ++v;
              }
		    }
            if(c>=l){
                System.out.println("NO");
            }
            else{
                System.out.println("YES");
            } 
		}
	}
}
