// Switch case

let day;
let date = new Date().getDay();
switch(date){
    case 0:
        day = "Red";
        break;
    
    case 1:
        day = "Yellow";
        break;

    case 2:
        day = "Blue";
        break;

    case 3:
        day = "Black";
        break;

    case 4:
        day = "White";
        break;

    case 5:
        day = "Green";
        break;

    case 6:
        day = "Grey";
}

console.log(day);