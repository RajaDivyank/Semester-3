// Create array of object of class Student_Detail with attributes Enrollment_no, Name, Sem, CPI for 5 students, scan their information and print it. (Home Work)
import java.util.Scanner;

class Student_Detail{
    long enrollment_no;
    String name;
    byte sem;
    double cpi;

    public Student_Detail(){
        Scanner sc = new Scanner(System.in);
        Scanner sc2 = new Scanner(System.in);
        System.out.println("Enter your enrollment number : ");
        enrollment_no = sc.nextLong();
        System.out.println("Enter the your name : ");
        name = sc2.nextLine();
        System.out.println("Enter the semester : ");
        sem = sc.nextByte();
        System.out.println("Enter the cpi : ");
        cpi = sc.nextDouble();
        sc.close();
        sc2.close();
    }

    public void printStudentDetails(){
        System.out.println("the name of student is : "+name);
        System.out.println("the enrollment number of student is : "+enrollment_no);
        System.out.println("The semester of the student is : "+sem);
        System.out.println("The cpi of the given student is : "+cpi);
    }
}
public class Student{
    public static void main(String[] args) {
        Scanner sc = new  Scanner(System.in);
        System.out.println("Enter the number of students");
        int n = sc.nextInt(); 
        Student_Detail[] student = new Student_Detail[n];
        for(int i = 0;i<n;i++){
            student[i] = new Student_Detail();
            student[i].printStudentDetails();
        }
    } 
}