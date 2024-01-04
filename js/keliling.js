function hitungKeliling() {
    var s1 = parseInt(document.getElementById("sideA").value);
    var s2 = parseInt(document.getElementById("sideB").value);
    var s3 = parseInt(document.getElementById("sideC").value);
    var k = s1 + s2 + s3;

    var hasilText = "K = S1 + S2 + S3 <br>";
    hasilText += `K = ${s1} + ${s2} + ${s3} <br>`;
    hasilText += `K = ${k}` ;

    document.getElementById("result").innerHTML =  hasilText;
}

function resetForm() {
    document.getElementById("sideA").value = "";
    document.getElementById("sideB").value = "";
    document.getElementById("sideC").value = "";
    
    document.getElementById("result").innerHTML = "";
}
