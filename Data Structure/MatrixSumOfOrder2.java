// Read two 2x2 matrices and perform addition of matrices into third matrix and print it.

import java.util.Scanner;
class Matrix{
    int[][] matrix = new int[2][2];
    Scanner sc = new Scanner(System.in);
    public void printMatrix(){
        for(int i = 0;i<2;i++){
            for(int j = 0;j<2;j++){
                System.out.print(matrix[i][j]+"  ");
            }
            System.out.println("");
        }
    }
    public void storeMatrix(){
        for(int i = 0;i<2;i++){
            for(int j = 0;j<2;j++){
                System.out.println("Enter the number ["+(i+1)+"]["+(j+1)+"]:");
                matrix[i][j] = sc.nextInt();
            }
        }
    }
    public void addMatrix(Matrix m1){
        for(int i = 0;i<2;i++){
            for(int j = 0;j<2;j++){
                this.matrix[i][j] += m1.matrix[i][j];
            }
        }   
        this.printMatrix();
    }
}
public class MatrixSumOfOrder2{
    public static void main(String[] args) {
        Matrix m1 = new Matrix();
        m1.storeMatrix();
        Matrix m2 = new Matrix();
        m2.storeMatrix();
        System.out.println("Matrix Addition is = ");
        m1.addMatrix(m2);
    }   
}
