function getSubs(){
    var k = document.getElementById("branch").value;
    alert(k);
if(k=='AIML'){
    aimlsubs();
}
else if(k=='AIDS'){
    dssubs();
}
else if (k=='CCCS'){
    cssubs();
}
else{
    alert("Select any branch");
}
}
function aimlsubs(){
    var data= `<tr><td>ML</td></tr>
    <tr><td>DL</td></tr>
    <tr><td>NLP</td></tr>`;
    $("#result").html(data);

    document.getElementById("result").innerHTML(data);
}
function dssubs(){
    var data= `<tr><td>DS</td></tr>
    <tr><td>AI</td></tr>`;
    $("#result").html(data);
    document.getElementById("result").innerHTML(data);
}
function cssubs(){
    var data= `<tr><td>CC</td></tr>
    <tr><td>CS</td></tr>`;
    $("#result").html(data);
    document.getElementById("result").innerHTML(data);
}


/*
AIML:
ML
DL
NLP

AIDS:
DS
AI
CCCS:
CC */