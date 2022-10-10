var spanCreated = false;
var size = 12;
function revealLetter(){
    var container = document.getElementById("textcontainer");


    if(spanCreated == false){
        var innerText = container.innerText;
        console.log(innerText);
        var splitHtml = innerText.split(innerText[45]);
        console.log(splitHtml);
        innerText = splitHtml[0] + "<span id='pspan' style='font-size:12pt;'>p</span>" + splitHtml[1];
        container.innerHTML = innerText;
        spanCreated = true;
    }

    size++;
    document.getElementById("pspan").style.fontSize = size+"pt";
}
