//  Write a program to find angle between Hour & Minute hand 

import java.util.Scanner;

public class AngleTime{
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Hour = ");
        int hour = sc.nextInt();

        System.out.println("Enter Minute = ");
        int minute = sc.nextInt();

        double hourintominute = (5*hour)+(0.083*minute);
        double diff = Math.abs(hourintominute-minute);

        System.out.println("Angle is " + diff*6);
    }
}