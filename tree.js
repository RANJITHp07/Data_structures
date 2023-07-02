// class Node{
//     constructor(data){
//         this.data=data;
//         this.right=null;;
//         this.left=null;
//     }
// }


// class Tree{
//     constructor(){
//         this.root=null;
//     }

//     insert(data){
//         const newNode=new Node(data);
//         if(!this.root){
//             this.root=newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.data<root.data){
//                if(!root.left){
//                    root.left=newNode
//                }
//                else{
//                 this.insertNode(root.left,newNode)
//                }
//         }else{
//             if(!root.right){
//                 root.right=newNode
//             }
//             else{
//              this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     search(root,data){
//          if(!root){
//             console.log("Not found")
//             return;
//          }
//          if(root.data===data){
//             console.log('Found')
//             return;
//          }

//         if(root.data>data){
//             this.search(root.left,data)
//         }else{
//             this.search(root.right,data)
//         }
//     }

//     bfs(){
//         let qeueu=[];
//         qeueu.push(this.root);

//         while(qeueu.length){
//             let curr=qeueu.shift();
  
//             console.log(curr.data)
//             if(curr.left){
//                   qeueu.push(curr.left)
//             }
//             if(curr.right){
//                 qeueu.push(curr.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.data
//         }
//         return this.min(root.left)
//     }

//     delete(data){
//         if(this.root){
//             this.root=this.deleteNode(this.root,data)
//         }
//     }

//     deleteNode(root,data){
//            if(!root){
//              return root;
//            }
//            if(root.data>data){
//              root.left=this.deleteNode(root.left,data)
//            }
//            else if(root.data<data){
//             root.right=this.deleteNode(root.right,data)
//            }

//            else{
//              if(!root.left){
//                 return root.right;
//              }
//               if(!root.right){
//                 return root.left
//              }
//               root.data=this.min(root.right);
//               root.right=this.deleteNode(root.right,root.data)
             
//            }

//            return root
           
//     }

//     height(root){
//        if(!root){
//          return 0;
//        }

//        let left=this.height(root.left);
//        let right=this.height(root.right);

//        return Math.max(left,right)+1
//     }
    
//     inOrder(root){
        
//         let result=[];

//         function traverse(root){
//               if(root){
//                 traverse(root.left);
//                 result.push(root.data);
//                 traverse(root.right)
//               }
//         }
//         traverse(root);
        
//     }
// }

// const t=new Tree();

// t.insert(30);
// t.insert(20);
// t.insert(40);
// t.insert(10);
// t.insert(100);
// t.insert(40);
// // console.log(t.min(t.root))
// // t.delete(20)

// // // t.search(t.root,450)
// // console.log(t.root)

// // console.log(t.height(t.root))

// t.inOrder(t.root)


class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class Tree{
    constructor(){
        this.root=null;
    }

    insert(data){
        let newNode=new Node(data);
        if(!this.root){
           this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
         if(newNode.data<root.data){
            if(!root.left){
               root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
         }
         else{
            if(!root.right){
                root.right=newNode
             }else{
                 this.insertNode(root.right,newNode)
             }
         }
    }

    search(root,data){
        if(!root){
            return;
        }
         if(root.data===data){
            console.log(root.data);
            return;
         }
         else{
             if(root.data>data){
                  this.search(root.left,data)
             }else{
                this.search(root.right,data)
             }
         }
    }

    bfs(root){
        let qeueu=[];
        qeueu.push(root)
        while(qeueu.length){
           let curr=qeueu.shift();
           console.log(curr.data);
           if(curr.left){
              qeueu.push(root.left)
           }
           if(curr.right){
            qeueu.push(root.right)
           }
        }
    }

    delete(data){
       if(this.root){
           this.root=this.deleteNode(this.root,data)
       }
    }

    min(root){
       if(!root.left){
         return root.data
       }

       return this.min(root.left)
    }

    deleteNode(root,data){
        if(root===null){
            return root;
        }

        if(root.data>data){
             root.left=this.deleteNode(root.left,data)
        }
        else if(root.data<data){
            root.right=this.deleteNode(root.right,data)
        }
        else{
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }
            else{
                root.data=this.min(root.right);
                root.right=this.deleteNode(root.right,root.data)
            }
        }
        return root
    }
}

const t=new Tree();

t.insert(30);
t.insert(20);
t.insert(40);
// t.search(t.root,0)
// t.bfs(t.root)
// console.log(t.root)
t.delete(30);
console.log(t.root)
