/* 

*/

/*eslint-env browser*/


//Animate away the pre-loader and entry-header
function finishload() {
    document.getElementById("loadcontent").className = "loaded";
  //  document.getElementsByTagName("BODY")[0].setAttribute("class", "loaded");
    var j = document.getElementById("loadcontent");
    j.parentNode.removeChild(j);
    displaypage();
}

function displaypage()  {
    document.getElementById("home").style.display= "flex";
    document.getElementById("about").style.display= "flex";
    document.getElementById("contact").style.display= "flex";
}

    setTimeout(finishload, 3000);

