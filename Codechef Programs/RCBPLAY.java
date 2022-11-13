import java.util.*;

class RCBPLAY{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc=new Scanner(System.in);
            int t=sc.nextInt();
            while(t-->0){
            int a=sc.nextInt();
            int b=sc.nextInt();
            int z=sc.nextInt();
            if(b<=(a+z*2)){
                    System.out.println("yes");
            }
            else{
                    System.out.println("no");
            }
        }
	}
}
