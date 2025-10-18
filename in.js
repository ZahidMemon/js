function result(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = document.getElementById("opreator").value;
    let d;
    if (c == "+"){
        d = Number (a) + Number (b);
    } else if (c == "*") {
        d = Number (a) * Number (b);
    } else if (c == "/") {
        d = Number (a) / Number (b);
    } else {
        d = Number (a) - Number (b); 
    } 

    
    console.log(d)

    document.getElementById("result").innerHTML=d;
}
