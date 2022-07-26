// Read two matrices, first mxn and second mxn, perform multiplication operation and store result in 
// third matrix and print it.
import java.util.Scanner;

class Matrix{
    Scanner sc2 = new Scanner(System.in);
    int i;
    int j;
    int[][] matrixValues;

    public void createMatrix(){
        matrixValues = new int[i][j];
    }    
    public  void createMatrixSetValues(){    
        matrixValues = new int[i][j];
        this.setElementsValues();
    }
    public Matrix(int i,int j){
        this.i = i;
        this.j = j;
    }
    public void printElements(){
        for(int m = 0; m<i;m++){
            for(int n = 0; n<j;n++){
                System.out.print(matrixValues[m][n]+"       ");
            }
            System.out.println("");
        }
    }
    public Matrix(){
        System.out.println("Enter the number of rows : ");
        this.i = sc2.nextInt();
        System.out.println("Enter the number of columns : ");
        this.j = sc2.nextInt();
    }
    public void setElementsValues(){
        for(int m = 0;m<this.i;m++){
            for(int n = 0; n<this.j ; n++){
                System.out.println("Enter the number["+(m+1)+"]["+(n+1)+"]");
                matrixValues[m][n] = sc2.nextInt();
            }
        }
    }
    public Matrix multiplyMatrix(Matrix gMatrix){
        Matrix aMatrix = new Matrix(this.i,gMatrix.j);
        if(gMatrix.i != this.j){
            System.out.println("your matrix can't be multiplied.The Answer you may get will be wrong");
        }
        else{
            aMatrix.createMatrix();
            for(int x = 0; x<this.i ; x++){
                for(int y = 0; y<gMatrix.j ; y++){
                    for(int z = 0; z < gMatrix.i ;z++){
                        aMatrix.matrixValues[x][y] += this.matrixValues[x][z]*gMatrix.matrixValues[z][y]; 
                    }
                }
            }
        }
        return aMatrix;
    }
}
public class MatrixMultiplication{
    public static void main(String[] args) {
        Matrix m1 = new Matrix();
        m1.createMatrixSetValues();
        Matrix m2 = new Matrix();
        m2.createMatrixSetValues();
        Matrix m3 = m1.multiplyMatrix(m2);
        System.out.println("Matrix Multiplication is = ");
        m3.printElements();
    }
}
