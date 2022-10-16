import java.util.*;

class COVID19{
	public static void main (String[] args) throws java.lang.Exception{
		Scanner sc =  new Scanner(System.in);
        int T = sc.nextInt();
        while (T-->0){
            int p=sc.nextInt();
            int[] arr = new int[p];
            for(int i=0;i<p;i++){
                arr[i] = sc.nextInt();
            }
            int min=p,temp=1,max=0;
            for(int i=0;i<p-1;i++){
                if(arr[i+1]-arr[i]<=2 && arr[i+1]-arr[i]>=0){
                    temp++;
                }
                else{
                    if(temp>max) max=temp;
                    if(temp<min) min=temp;
                    temp=1;
                }
            }
            if(temp>max) max=temp;
            if(temp<min) min=temp;
            System.out.println(min + " " +max);
        }
	}
}
