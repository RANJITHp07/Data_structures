

class Queue{
    constructor(size){
         this.item=new Array(size);
         this.size=size;
         this.length=0
         this.rear=-1;
         this.front=-1
    }

    insert(data){
         if(this.length<this.size){
            this.item.push(data)
            this.length++;
            this.rear=(this.rear+1)%this.size;
            if(this.front===-1){
                this.front=this.rear
            }
         }
    }

    remove(){
        this.item.shift();
        this.front=(this.front+1)%this.size;
        this.length--;
    }
}

const q=new Queue(5);

q.insert(10);
q.insert(20);
q.insert(30);
q.insert(40);

q.insert(10);
q.insert(20);
q.insert(30);
q.insert(40);
console.log(q.item)