class Heap{
    constructor(){
        this.item=[];
        this.size=0;
    }

    insert(data){
        this.item.push(data);
        this.size++;
        this.heapifyUp()
    }

    heapifyUp(){
        let curr=this.item.length-1
        while(curr>=0 && this.item[Math.floor((curr-1)/2)]>this.item[curr]){
            let temp=this.item[Math.floor((curr-1)/2)];
            this.item[Math.floor((curr-1)/2)]=this.item[curr];
            this.item[curr]=temp;
            curr=Math.floor((curr-1)/2)
        }

    }

    remove(){
        this.item[0]=this.item[this.item.length-1];
        this.size--;
        this.heapifyDown(); 
    }

    heapifyDown(){
        let index=0;
        while((2*index+1)<this.size){
            let smallIndex=2*index+1
              if(((2*index+2)<this.size)&&(this.item[2*index+1]>this.item[2*index+2])){
                   smallIndex=2*index+2
              }

              if(this.item[index]<this.item[smallIndex]){
                    break;
              }
              else{
                let temp=this.item[index];
                this.item[index]=this.item[smallIndex];
                this.item[smallIndex]=temp;
                index=smallIndex
              }
        }
    }
}

const h=new Heap();

h.insert(10);
h.insert(0);
h.insert(30);
h.insert(4);
h.insert(50);
h.remove()
console.log(h.item)
