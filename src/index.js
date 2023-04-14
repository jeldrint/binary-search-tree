const body = document.querySelector('body');
body.style.backgroundColor = 'rgb(33,33,33)';

const Node = (num, left = null, right = null) => {
    return {
        num,left,right
    }
}

const Tree = (arr) => {
    let root;
    const newArr = [];
    arr.sort((a,b)=>a-b)
    .map((e)=>{
        if (!newArr.includes(e)){
            newArr.push(e)
        }
    })
    return newArr
}

const buildTree = (arr) => {
    arr = Tree([7,3,2,1,4,5,6,6,5,4,3,2,1]);
    
    arr.forEach(item => {
        let sam = Node(item)
        console.log(sam)
    });
    //return arr
}

buildTree();