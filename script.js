var n = 0;

function edu() {

if(n == 0){

var a  = document.getElementsByClassName("edu-list")[0];

a.style.display = "block";

n++;

}
else{

    var a  = document.getElementsByClassName("edu-list")[0];

    a.style.display = "none";

    n--;

}
}
var m = 0;

function arrow(){
                
var b  = document.getElementsByClassName("theyalow")[0];

var c  = document.getElementsByClassName("repair-design-project")[0];

if(m == 0){

b.style.display = "none";

c.style.display = "grid";

m = 1;

}
else{

b.style.display = "grid";

c.style.display = "none";

m = 0;

}
}

