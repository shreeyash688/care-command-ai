function upper(){
    //alert("Hello World");
    var k,p;
    k=document.getElementById("UserInput").value;
    p=k.toUpperCase();
    document.getElementById("Output").value=p;
}
function lower(){
    //alert("Hello World");
    var k,p;
    k=document.getElementById("UserInput").value;
    p=k.toLowerCase();
    document.getElementById("Output").value=p;
}
function getLength(){
    var k,p;
    k=document.getElementById("UserInput").value;
    p=k.length;
    document.getElementById("Output").value=p;
}
function split(){
    var k,p;
    k=document.getElementById("UserInput").value;
    p=k.split("@");
    document.getElementById("Output").value=p;
}