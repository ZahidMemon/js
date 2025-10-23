function results() {
    let s = document.getElementById("num1").value;
    let a = document.getElementById("num2").value;
    let m = document.getElementById("opreator").value;
    let i;
    if (m == "+") {
        i = Number(s) + Number(a);
    } else if (m == "*") {
        i = Number(s) * Number(a);
    } else if (m == "/") {
        i = Number(s) / Number(a);
    } else {
        i = Number(s) - Number(a);
    }


    console.log(i)

    document.getElementById("results").innerHTML = i;
}
