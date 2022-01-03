let res=document.getElementById("result");
let calculate=(number)=>{res.value+=number;}

let Result=()=>{
    try{
        res.value=eval(res.value)
    }
    catch(err){
        alert("Only numbers are allowed");
    }
}

function clr(){
    res.value=" ";
}

function del(){
    res.value=result.value.slice(0,-1);
}