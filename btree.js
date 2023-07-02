class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    postOrder(root){
        if(root){
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value);
        }
    }

  }
  
  function treeHeight(node) {
    if (node === null) {
      return 0;
    }
    
    const leftHeight = treeHeight(node.left);   
    const rightHeight = treeHeight(node.right)
   
    return Math.max(leftHeight, rightHeight) + 1;
  }
  
  
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
root.postOrder(root)
  