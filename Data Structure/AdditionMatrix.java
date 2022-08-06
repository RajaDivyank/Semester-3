import java.util.Scanner;

class Matrix{
    int m;
    int n;
    int[][] matrix = new int[m][n];
    public void printMatrix(){
        for(int i = 0;i<m;i++){
            for(int j = 0;j<n;j++){
                System.out.print(matrix[i][j]+"  ");
            }
            System.out.println("");
        }
    }

    public void storeMatrix(){
        for(int i = 0;i<m;i++){
            for(int j = 0;j<n;j++){
                System.out.println("Enter the number ["+(i+1)+"]["+(j+1)+"]:");
                matrix[i][j] = sc.nextInt();
            }
        }
    }
    public void addMatrix(Matrix m1){
        for(int i = 0;i<m;i++){
            for(int j = 0;j<n;j++){
                this.matrix[i][j] += m1.matrix[i][j];
            }
        }   
        this.printMatrix();
    }
}
public class AdditionMatrix {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of Rows = ");
        int m = sc.nextInt();
        System.out.println("Enter number of column = ");
        int n = sc.nextInt();
        Matrix m1 = new Matrix();
        m1.storeMatrix();
        Matrix m2 = new Matrix();
        m2.storeMatrix();
        m1.addMatrix(m2);
    }   
}