function res(){
    let s = document.getElementById("sub").value;
    let m = document.getElementById("num").value;
    let result = (m <= 35) ? "failed" : "passed";
    let results = (s <= 35) ? "failed" : "passed";

    document.getElementById("result").innerHTML=result;
    document.getElementById("results").innerHTML=results;
    
}