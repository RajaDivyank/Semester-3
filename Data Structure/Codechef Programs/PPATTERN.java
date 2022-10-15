import java.util.Scanner;

public class PPATTERN {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while(T-->0){
            int n = sc.nextInt();
            int[][] a = new int[n][n];
            int ans = 1;
            for (int l = 0; l < n; l++) {
                int i = 0;
                for (int j = l; j >= 0; j--){
                    a[i++][j] = ans++;
                }   
            }
            for (int l = 1; l < n; l++) {
                int i = n - 1;
                for (int j = l; j < n; j++){
                    a[j][i--] = ans++;
                }  
            }
            for(int i=0;i<n;i++) {
                for (int j = 0; j < n; j++){
                    System.out.print(a[i][j]+" ");                
                }
                System.out.println();
            }
        }
    }
}
