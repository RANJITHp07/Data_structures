// class Node{
//     constructor(){
//         this.children=new Map();
//         this.end=false
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new Node();
//     }

//     insert(data){
//        let current=this.root;

//          for(let i=0;i<data.length;i++){
//             let char=data[i];

//             if(!current.children.has(char)){
//                   current.children.set(char,new Node())
//             }

//             current=current.children.get(char)
//          }

//          this.end=true
//     }


//     search(data){
//           let curr=this.root

//         for(let i=0;i<data.length;i++){
//             let char=data[i]
//              if(!curr.children.has(char)){
//                  return false
//              }
//              curr=curr.children.get(char)
//         }
//            return curr.end
//     }

//     startWith(data){
//         let curr=this.root

//         for(let i=0;i<data.length;i++){
//             let char=data[i]
//              if(!curr.children.has(char)){
//                  return false
//              }
//              curr=curr.children.get(char)
//         }
//            return true
//     }
    
// }

// const t=new Trie();

// t.insert("Apple");
// t.insert("banana");

// t.startWith("App")


// class Node{
//     constructor(){
//         this.children=new Map();
//         this.end=false
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new Node();

//     }

    // addWord(l){
    //     let curr=this.root
    //     for(let i=0;i<l.length;i++){
    //         let char=l[i];

    //         if(!curr.children.has(char)){
    //             curr.children.set(char,new Node())
    //         }

    //         curr=curr.children.get(char)
    //     }
    //     curr.end=true
    // }

//     addWord(word) {
//         let curr = this.root;
//         for (let i = 0; i < word.length; i++) {
//           let char = word[i];
    
//           if (!curr.children.has(char)) {
//             curr.children.set(char, new Node());
//           }
    
//           curr = curr.children.get(char);
//         }
//         curr.end = true;
//       }

//     serach(l){
//         let curr=this.root
//         for(let i=0;i<l.length;i++){
//             let char=l[i];

//             if(!curr.children.has(char)){
//                 return false
//             }

//             curr=curr.children.get(char)
        
//         }
//         console.log(1)
//         return curr.end
//     }

//     suggestWord(w){
//         let curr=this.root;
//         let s=[]
//         for(let i=0;i<w.length;i++){
//             let char=w[i]
//             if(!curr.children.has(char)){
//                 return [];
//             }
//             curr=curr.children.get(char)
//         }

//         this.traverse(curr,w,s)

//         console.log(s)
//     }

//     traverse(node,w,s){
//         if(node.end){
//             s.push(w)
//         }
//         for(let i=0;i<)
//     }

// }

// const t=new Trie();

// t.addWord("apple");
// t.addWord("app")
// t.suggestWord("app")

// console.log(t.root)
class Node{
    constructor() {
         this.children=new Map();
         this.end=false
    }
}

class Trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
       let curr=this.root;

       for(let i=0;i<word.length;i++){
           let char=word[i]
           if(!curr.children.has(char)){
                curr.children.set(char,new Node())
           }
           curr=curr.children.get(char)
       }

       curr.end=true
    }

    search(word){
        let curr=this.root;

        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!curr.children.has(char)){
                 return false
            }
            curr=curr.children.get(char)
        }
        return curr.end
    }

    suggest(word){
        let curr=this.root;
         let r=[];
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!curr.children.has(char)){
                return [];
            }
            curr=curr.children.get(char)
        }
        this.traverse(curr,word,r)
        console.log(r)
    }

    traverse(node,word,r){
        if(node.end){
            r.push(word)
        }


        for(let [char,child] of node.children){
            this.traverse(child,word+char,r)
        }
    }
}

const t=new Trie();

t.insert("apple");
t.insert("app");
t.insert("appne");
t.insert("banana")
t.suggest("app");


// console.log(t.root)

