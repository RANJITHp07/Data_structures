class Hash{
   constructor(size) {
       this.item=new Array(size);
       this.size=size
   }

   hash(key){
    let total=0
       for(let i=0;i<key.length;i++){
        total=total+key.charCodeAt(i)
       }
       return total%this.size
   }

   insert(key ,value){
      let index=this.hash(key)
      
      let bucket=this.item[index];

      if(bucket){
          let samKey=this.item[index].find((n)=>n[0]===key);

          if(samKey){
            samKey[1]=value
          }else{
            this.item[index].push([key,value])
          }
      }else{
        this.item[index]=[[key,value]]
      }
   }

   remove(key){
      let index=this.hash(key);
      let bucket=this.item[index]
      let samKey=this.item[index].find((n)=>n[0]===key);
      console.log(samKey)
      if(samKey && bucket){
         let temp=[...this.item[bucket.length-1]];
         this.item[bucket.length-1]=[...samKey];
         samKey=temp
      }
      console.log(samKey,this.item[bucket.length-1])
      this.item[index].pop()
   }
}

const h=new Hash(10);


h.insert("nmae","ranjith");
h.insert("name","ranju");
h.remove("nmae")
console.log(h.item)