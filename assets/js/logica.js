
function show() {
  document.getElementById("text2").style.display = "block";
}

function hidden() {
  document.getElementById("text2").style.display = "none";
}


function enlarge() {
  document.getElementById("img").style.width = "100%";
}


function shrink() {
  document.getElementById("img").style.width = "20%";
}


function increaseFontSize() {
  document.getElementById("caja3").style.fontSize = "24px";
}

document.getElementById("text1").addEventListener("mouseover", show);
document.getElementById("text1").addEventListener("mouseout", hidden);
document.getElementById("caja2").addEventListener("click", enlarge);
document.getElementById("caja2").addEventListener("mouseout", shrink);
document.getElementById("caja3").addEventListener("dblclick", increaseFontSize);