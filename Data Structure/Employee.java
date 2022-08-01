// Create class Employee_Detail with attributes Employee_id, Name, Designation, and Salary. Write a 
// program to read the detail from user and print it. 
import java.util.Scanner;

class Employee_Detail{
    String employee_Id;
    String name;
    String designation;
    double salary;
    
    public Employee_Detail(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your employee_Id : ");
        employee_Id = sc.nextLine();
        System.out.println("Enter your name : ");
        name = sc.nextLine();
        System.out.println("Enter your designation : ");
        designation = sc.nextLine();
        System.out.println("Enter your salary : ");
        salary = sc.nextInt();
        sc.close();
    }
    
    public void printEmployeeDetails(){
        System.out.println("your name is : "+name);
        System.out.println("your employee_Id is : "+employee_Id);
        System.out.println("your designation is : "+designation);
        System.out.println("your salary is : "+salary);
    }
}

public class Employee{
    public static void main(String[] args) {
        Employee_Detail e1 = new Employee_Detail();
        e1.printEmployeeDetails();
    }

}
