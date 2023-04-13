const body = document.querySelector('body');
body.style.backgroundColor = 'rgb(33,33,33)';

const Node = () => {
    let num = '';
    let left = ''
    let right = '';
}

const Tree = (arr) => {

}

const buildTree = (arr) => {
    const newArr = [];
    arr.sort((a,b)=>a-b)
    .map((e)=>{
        if (!newArr.includes(e)){
            newArr.push(e)
        }
    })
    return newArr
}

buildTree([7,3,2,1,4,5,6]);