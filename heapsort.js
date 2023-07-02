function heapify(a,n,i){
     let largest=i;
     let left=2*i+1;
     let right=2*i+2;

     if(left<n && a[left]>a[largest]){
         largest=left
     }
     if(right<n && a[right]>a[largest]){
        largest=right;
     }

     if(largest!=i){
        let temp=a[i];
        a[i]=a[largest];
        a[largest]=temp;
        heapify(a,n,largest)
     }

}

function heapSort(a){
    for(let i=parseInt(a.length/2);i>=0;i--){
         heapify(a,a.length,i)
    }

    for(let i=a.length-1;i>=0;i--){
        let temp=a[i];
        a[i]=a[0];
        a[0]=temp;
        heapify(a,i,0)
    }
    console.log(a)
}

heapSort([2,3,6,2,1,4])