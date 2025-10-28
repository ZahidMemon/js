function demo() {

    let a = document.getElementById("num").value;
    let b;

    switch (Number (a)) {
        case 1:
            b = "red";
            break;

        case 2:
            b = "green";
            break;

        case 3:
            b = "yellow";
    }

    console.log(b);

    document.getElementById("result").innerHTML = b;
}