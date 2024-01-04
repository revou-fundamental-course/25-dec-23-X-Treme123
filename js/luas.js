function hitungLuas() {
    var base = parseInt(document.getElementById("base").value);
    var height = parseInt(document.getElementById("height").value);
    var l = 0.5 * base * height;
  
    var hasilText = "L = 1/2 x a x t <br>";
    hasilText += `L = 1/2 x ${base} x  ${height} <br>`;
    hasilText += `L = ${l}`;
  
    document.getElementById("result").innerHTML = hasilText;
}
  
function resetForm() {
    document.getElementById("base").value = "";
    document.getElementById("height").value = "";
  
    document.getElementById("result").innerHTML = "";
}
