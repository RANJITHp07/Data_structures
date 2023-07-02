function bubbleSort(a){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length-1-i;j++){
             if(a[j]>a[j+1]){
                let temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp
             }
        }
    }
    console.log(a)
}

bubbleSort([1,3,2,5,3])

function insertionSort(a){
     for(let i=1;i<a.length;i++){
        let curr=a[i];
        j=i-1;
        while(j>0 && a[j]>curr){
            a[j+1]=a[j];
            j--;
        }
        a[j+1]=curr
     }
    console.log(a)
}

insertionSort([1,3,4,2,45])


function selectionSort(a){
    for(let i=0;i<a.length;i++){
        let mid=i;
        for(let j=i+1;j<a.length;j++){
            if(a[j]<a[mid]){
                mid=j
            }
        }
        if(mid!=i){
            let temp=a[i];
            a[i]=a[mid];
            a[mid]=temp;
        }
    }
    console.log(a)
}

selectionSort([2,3,4,1])

function quickSort(a){
     if(a.length<2){
        return a
     }
     let p=a.length-1;
     let left=[];
     let right=[];

     for(let i=0;i<a.length-1;i++){
        if(a[i]<a[p]){
            left.push(a[i])
        }
        else{
            right.push(a[i])
        }
     }
     return [...quickSort(left),a[p],...quickSort(right)]
}


console.log(quickSort([2,3,1,5,4]))

function mergeSort(a){
    if(a.length<2){
        return a
    }

    let mid=Math.floor(a.length/2);
    let left=a.slice(0,mid);
    let right=a.slice(mid);

    return merge(mergeSort(left),mergeSort(right))

}

function merge(left,right){
      let merge=[];
      let leftIndex=0;
      let rightIndex=0;

      while(leftIndex<left.length &&  rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            merge.push(left[leftIndex]);
            leftIndex++
        }
        else{
            merge.push(right[rightIndex]);
            rightIndex++
        }
      }

      while(leftIndex<left.length){
        merge.push(left[leftIndex]);
        leftIndex++
      }

      while(rightIndex<right.length){
        merge.push(right[rightIndex]);
        rightIndex++
      }
    return merge
}

console.log(mergeSort([1,4,3,2,54]))
