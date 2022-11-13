import java.util.*;

class CHEFZOT{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc = new Scanner(System.in);
		int loop = sc.nextInt();
		int[] arr = new int[loop];
		for(int i=0 ; i<loop ; i++)
		    arr[i] = sc.nextInt();
		
		ArrayList<Integer> arrL = new ArrayList<>();
		int count=0;
		for(int j=0 ; j<loop ; j++)
		{
		    if (arr[j] != 0){
		        count++;
		    }
		    else if(arr[j]==0){
		        count=0;
		    }
		    arrL.add(count);
		}
		int output = Collections.max(arrL);
		System.out.println(output);
	}
}

