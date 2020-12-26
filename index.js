var a, b, x, y; 

function calculateRelatedFunction() {
    const x1 = parseInt(document.getElementById("x1").value);
    const y1 = parseInt(document.getElementById("y1").value);
    const x2 = parseInt(document.getElementById("x2").value);
    const y2 = parseInt(document.getElementById("y2").value);


    if (x1 == x2) {
        alert("It's not a related function...");
        return;
    }

    a = (y1 - y2) / (-x2 + x1);
    var first_part;

    if (a==0) {
        first_part = "";
    }else if(a==1){
        first_part = "x";
    }else{
        first_part = a+"x";
    }


    b = y2 - (a*x2);
    var second_part;

    if (b>0) {
        second_part = "+"+b;
    }else if(b<0){
        second_part = b;
    }else{
        second_part = "";
    }


    var related_function = `f(x) = ${first_part} ${second_part}`;

    document.getElementById("related_function").innerHTML = related_function;
}

function calculateAnotherPoint(typeOfCordenate) {
    if (typeOfCordenate) {
        const yi = null;
        // se 1 vai seguir o calculo para descobrir o X
        // x = (yi - b) / a
    }else{
        const xi = null;
        // se 0 vai seguir o calculo para descobrir o Y
        // y = a*xi + b
    }
}
