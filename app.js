var mergeTrees = function(root1, root2) {
    if(!root1 && !root2) return null

    let sum = root1?.val || 0
    sum += root2?.val || 0

    const left = mergeTrees(root1?.left, root2?.left)
    const right = mergeTrees(root1?.right, root2?.right)

    return new TreeNode(sum, left, right)
};