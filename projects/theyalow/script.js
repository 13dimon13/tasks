var n = 0;

function mobile(){
    

    var viewport = document.querySelector('[name="viewport"]');
   
if(n == 0){

var a  = document.getElementById("main");

a.style.width = "640px";

alert('К сожалению, с изменением внешнего блока ничего не получилось, device-width=640 тоже не сработал, но при изменении окна непосредственно в браузере все работает отлично, страница полностью оптимизируется. ');

n++;

var v = document.getElementsByClassName("version")[0];

v.innerHTML = "Desktop";

}
else{

    var a  = document.getElementById("main");

    a.style.width = "1300px";

    var v = document.getElementsByClassName("version")[0];

    v.innerHTML = "Mobile";

    n--;
   
}
}