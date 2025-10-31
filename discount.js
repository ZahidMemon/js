function fun1(){
    let m = document.getElementById("member").value;
    let p = document.getElementById("price").value;
    let total;

    total=(m=="yes") ? p = p - (p*0.10) : p;

    document.getElementById("result").innerHTML=total;


}
