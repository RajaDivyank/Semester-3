import java.util.Scanner;

public class SwapDemo {

    static void swapDisplay(int a , int b){
        a = a+b;
        b = a-b;
        a = a-b;
        System.out.println("First number is Swap = "+a);
        System.out.println("Second number is Swap = "+b);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter First number = ");
        int a = sc.nextInt();
        System.out.println("Enter Second number = ");
        int b = sc.nextInt();

        swapDisplay(a, b);

    }
}
