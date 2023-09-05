let a = 3;
function test1(){
    let b =2;
    console.log(a+b);
} 
test1();

function test2(){
    console.log(a+b);
    const c = 4;
}


function test3(){
    console.log(a+c);
}
test3();