// Implement a program to convert in-fix notation to post-fix notation using stack.

import java.util.Scanner;
class PostFixDemo{
    char[] operators;
    int top=-1;
    public PostFixDemo(int n){
        operators= new char[n];
    }
    public void push(char op){
        if(top>=operators.length){
            System.out.println("Stack overflow");
        }
        else{
            top++;
            operators[top] = op;            
        }
    }
    public char getTop(){
        if(top==-1){
            return 'n';
        }
        else{
            return operators[top];
        }
    }
    public char pop(){
        if(top<=-1){
            System.out.println("Stack Underflow");
            return 'n';
        }
        else{
            return operators[top--];
        }
    }
}
public class PostFix{
    public static int checkPrecedence(char operator){
        int operatorPrecedence = 0;    
        switch(operator){
            case'+':
            operatorPrecedence = 2;
            break;
            
            case'-':
            operatorPrecedence = 2;
            break;
    
            case'*':
            operatorPrecedence = 4;
            break;
    
            case'/':
            operatorPrecedence = 4;
            break;

            case 'n':
            operatorPrecedence = 0;
        }
            return operatorPrecedence;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the operation you want to convert in PostFix");
        String str = sc.next();
        String postfixOperation = "";
        PostFixDemo s1 = new PostFixDemo(str.length());
        for(int i=0;i<str.length();i++){
            char ch=str.charAt(i);
            if(Character.isLetter(ch)){
                postfixOperation+=ch;
            }
            else if(ch=='('){
                s1.push(ch);
            }
            else if(ch==')'){
                while(s1.getTop()!='(' && s1.top!=-1){
                    postfixOperation+=s1.pop();
                }
                s1.pop();
            }
            else{
                if(checkPrecedence(ch)<=checkPrecedence(s1.getTop())){
                    postfixOperation+=s1.pop();
                }
                s1.push(ch);
            }
        }
        while(s1.top!=-1){
            postfixOperation+=s1.pop();
        }
        System.out.println("Post Fix Answer is = "+postfixOperation);
    }
}