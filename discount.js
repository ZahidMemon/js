function fun1(){
    let m = document.getElementById("member").value;
    let p = document.getElementById("price").value;
    let total;

    total=(m=="yes") ? p = p - (p*0.20) : p;
    console.log(total);

    document.getElementById("result").innerHTML=total;


}
