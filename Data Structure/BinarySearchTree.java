import java.util.Stack;
class Node{
    Node left;
    Node right;
    int data;
    Node(int data){
        this.left=null;
        this.right=null;
        this.data=data;
    }
}
class Tree{
    Node root;
    public void insert(int a){
        Node newNode=new Node(a);
        if(root==null){
            root=newNode;
        }
        else{
        Node temp=root;
        while(temp.left!=null || temp.right!=null){
            if(newNode.data>=temp.data && temp.right != null ){
                temp=temp.right;
            }
            else if(newNode.data<=temp.data && temp.left!=null){
                temp=temp.left;
            }
            else{
                break;
            }
        }
        if(newNode.data>=temp.data){
            temp.right=newNode;
        }
        else{
            temp.left=newNode;
        }
    }
    } 
    public void inOrder(){
        Node temp=root;
        Stack <Node> st=new Stack <Node>();

        if(root==null){
            System.out.println("tree is empty ");
        }
        while(temp!=null || !st.empty()){
            while(temp!=null){
                st.push(temp);
                temp=temp.left;
            }
            temp= st.pop();
            System.out.print(temp.data+"  ");
            temp=temp.right;
        }
    }
    public void preOrder(){
        if(root==null){
            System.out.println("stack empty");
        }
        else{
            Stack<Node> st=new Stack<>();
            st.push(root);
            while(st.size()>0){
                Node t = st.pop();
                System.out.print(t.data+"  ");
                if(t.right!=null){
                    st.push(t.right);
                }
                if(t.left!=null){

                   st.push(t.left);
                }
            }
        }
    }
    public void postOrder(){
        Stack<Node> st1=new Stack<>();
        Stack<Node> st2=new Stack<>();
        st1.push(root);
        while(st1.size()>0){
            Node temp = st1.pop();
            st2.push(temp);
            if(temp.right!=null){
                st1.push(temp.right);
            }
            if(temp.left!=null){
                st1.push(temp.left);
            }
        }
        while(st2.size()>0){
            Node temp = st2.pop();
            System.out.print(temp.data+" ");
        }
    }
    public Node inOrderSuccessor(Node temp){
        boolean rightChild=true;
        Node parent = temp;
        temp = temp.right;
        if(temp.left!=null){
            rightChild = false;
        }
        while(temp.left!=null){
            parent=temp;
            temp=temp.left;
        }
        if(rightChild){
            parent.right=temp.right;
        }
        else{
            parent.left=temp.right;
            System.out.println("h");
        }
        return temp;
    }
    public void delete(int a){
        Node parent = null;
        Node temp = root;
        while(temp!=null && temp.data!=a){
            parent=temp;
            if(a>=temp.data){
                temp=temp.right;
            }
            else{
                temp=temp.left;
            }
        }
        if(temp.right==null && temp.left==null){
            if(temp.data>=parent.data){
                parent.right=null;
            }
            else{
                parent.left=null;
            }
        }
        else if(temp.right!=null && temp.left==null){
            if(parent.data<=temp.data){
                parent.right=temp.left;
            }
            else{
                parent.left=temp.left;
            }
        }
        else if(temp.left!=null && temp.right==null){
            if(parent.data<=temp.data){
                parent.right=temp.left;
            }
            else{
                parent.left=temp.left;
            }
        }
        else if(temp.right!=null && temp.left!=null){
           Node t = inOrderSuccessor(temp);
           temp.data = t.data;
        }
    } 
}

public class BinarySearchTree{
    public static void main(String[] args) {
        Tree tree=new Tree();
        tree.insert(1);
        tree.insert(2);
        tree.insert(3);
        tree.insert(4);
        tree.insert(5);
        tree.insert(6);
        tree.insert(8);
        tree.insert(10);
        tree.insert(11);
        System.out.print("InOrder :");
        tree.inOrder();
        // System.out.println();
        // System.out.print("preOrder :");
        // tree.preOrder();
        // System.out.print("postOrder : ");
        // tree.postOrder();
        System.out.println(" ");
        tree.delete(5);
        System.out.print("After delete InOrder :");
        tree.inOrder();
    }
}