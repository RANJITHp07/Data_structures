class Node{
    constructor(data) {
        this.vertex=data;
        this.edges=[]
    }
}

class Graph{
    constructor(){
        this.item=[]
    }

    addVertex(data){
         let f=this.item.find((node)=>node.vertex===data);
         
         if(!f){
            const newNode=new Node(data)
            this.item.push(newNode)
         }
    }

    addConnect(data1,data2){
        let f1=this.item.find((node)=>node.vertex===data1);
        let f2=this.item.find((node)=>node.vertex===data2);

        if(!f1.edges.includes(f2) && !f2.edges.includes(f1)){
            f1.edges.push(f2);
            f2.edges.push(f1)
        }
    }


   dfs(data){
    let f=this.item.find((node)=>node.vertex===data);
    if(f){
        let visited=new Set();
        this.dfsNode(f,visited)
    }
   }
   dfsNode(f,visited){
     
   }

}

const g=new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addConnect("A","C");
g.addConnect("A","B")

g.addConnect("D","C");
g.addConnect("B","C")


g.bfs("A")
// console.log(g.item)