import java.io.*;
import java.util.*;

class PASSORFAIL{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T-->0) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();
            int res = (a-b)*-1 + (b*3);
            if (res >= c){
                System.out.println("PASS");
            }else{
                System.out.println("FAIL");
            }
        }
    }
}