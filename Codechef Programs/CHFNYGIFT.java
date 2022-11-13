import java.util.*;

class CHFNYGIFT{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t-- > 0){
		    int n = sc.nextInt();
		    int arr[] = new int[n];
		    int temp = 0;
		    for(int i=0; i<n; i++){
		        arr[i] = sc.nextInt();
		    }
		    int diff = Math.abs(arr[0] - arr[1]);
		    for(int i=0; i<n-1; i++){
		        for(int j=i+1; j<n; j++){
		            temp = Math.abs(arr[i] - arr[j]);
		            if(temp < diff){
		                diff = temp;
		            }
		        }
		    }
		    System.out.println(diff);
		}
	}
}
