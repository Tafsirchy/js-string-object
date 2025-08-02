let text = 'Xavier and Yasmine exciting expedition'

// console.log(text);

let XY = text.includes('X') || text.includes('Y');
let xy = text.includes('x') || text.includes('y');

if (XY && xy) {
    let newText1 = text.replace(/X/g, 'x').replace(/Y/g, 'y');
    console.log(newText1);
}
if (xy){
     let newText2 = text.replace(/x/g, 'X').replace(/y/g, 'Y');
    console.log(newText2);
}