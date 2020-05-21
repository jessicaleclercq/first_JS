function pyramid() {
    var total = prompt("Combien d'étages veux-tu dans ta pyramid?");
    var output="";
    for (var i = 1; i <= total; i++) {
        for (var j = 1; j <= i; j++) {
            output+='#' + " ";
        }
        console.log(output);
        output="";
    }
}  

pyramid()