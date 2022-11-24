import java.util.*;
import java.lang.*;
import java.io.*;

class VILWAY{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t-- > 0){
		    int cops = sc.nextInt();
		    int arr[] = new int[cops];
		    int speed = sc.nextInt();
		    int maxTime = sc.nextInt();
		    for(int i=0; i<cops; i++){
		        arr[i] = sc.nextInt();
		    }
		    int houseCheck[] = new int[cops*2];
		    int up = 0;
		    int maxHouse = 0;
		    for(int i=0; i<cops; i++){
		        maxHouse = speed * maxTime;
		        if(arr[i] - maxHouse > 0){
		            houseCheck[up] = arr[i] - maxHouse; up++;
		        }
		        else{
		            houseCheck[up] = 1; up++;
		        }
		        if(arr[i] + maxHouse < 101){
		            houseCheck[up] = arr[i] + maxHouse; up++;
		        }
		        else{    
		            houseCheck[up] = 100; up++;
		        }
		    }
		    int total[] = new int[101];
		    for(int i=0; i<houseCheck.length-1; i+=2){
		        int start = houseCheck[i];
		        int end = houseCheck[i+1];

		        for(int j=start; j<=end; j++){
		            total[j] = j;
		        }
		    }
		    int temp = 0;
		    for(int i=0; i<101; i++){
		        if(total[i] == 0){
		            temp++;
		        }
		    }
		    System.out.println(temp-1);
		}
	}
}