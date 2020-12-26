var a, b, x, y; 

function calculateRelatedFunction() {
    const x1 = parseInt(document.getElementById("x1").value);
    const y1 = parseInt(document.getElementById("y1").value);
    const x2 = parseInt(document.getElementById("x2").value);
    const y2 = parseInt(document.getElementById("y2").value);

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        alert("You should fill all fields...");
        return;
    }


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
    if (a == null || b == null) {
        alert("You should define a related function first...");
        return;
    }
    
    if (typeOfCordenate) {
        const yi = parseInt(document.getElementById("yi").value);
        if(isNaN(yi)){alert("you should fill the current field"); return;}
        x = (yi - b) / a;
        var content = `(${x}, ${yi})`;
        document.getElementById("point_with_y").innerHTML=content;
    }else{
        const xi = parseInt(document.getElementById("xi").value);
        if(isNaN(xi)){alert("you should fill the current field"); return;}
        y = a*xi + b;
        var content = `(${xi}, ${y})`;
        document.getElementById("point_with_x").innerHTML=content;
    }
}
