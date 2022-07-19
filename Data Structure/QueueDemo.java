class Demo{

	int[] array=new int[100];
	int rear=-1;
	int front=-1;
		
	public void enQueue(int n){
		if(rear>array.length-1){
			System.out.print("Queue overflow");
		}
		if(rear==-1){
			front++;
		}
		rear++;
		array[rear]=n;
	}

	public int deQueue(){
		if(front>rear){
			System.out.print("Queue Underflow");
		}
		else{
			front++;
		}
		return array[front-1];
	}

	public void displayQueue(){
		for(int i=front;i<rear+1;i++){
			System.out.println(array[i]);
		}
	}
}
	public class QueueDemo{
		public static void main(String[] args){
			Demo D1=new Demo();
			D1.enQueue(4);
			D1.enQueue(5);
			D1.deQueue();
			D1.displayQueue();
		}
	}
