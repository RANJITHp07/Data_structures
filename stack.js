class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.head=null;
        this.size=0

    }

    insert(data){
         const newNode=new Node(data);
        let curr=this.head

         if(!this.head){
            this.head=newNode;
            return;
         }
         while(curr.next){
            curr=curr.next
         }
         curr.next=newNode;
         this.size++;
    }

    remove(){
        let curr=this.head

         if(!this.head){
            this.head=null;
            return;
         }
         let prev=null;
         while(curr.next){
            prev=curr
            curr=curr.next
         }
         prev.next=null;
         this.size--
         return curr;
    }
}


const s=new Stack();
const s1=new Stack()
s.insert(10);
s.insert(20);
s.insert(30);
s.insert(40);

function enter(s1,s2){
     let c=0;
     if(c<=this.size-2){
        
     }
}
console.log(s1.head)