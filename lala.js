popUp = document.getElementById('button');
calcular = document.getElementById('button1');
enviar = document.getElementById("button1")


popUp.onclick = function() {
    window.open("lala.html", 'window', 'width=400, height=500, top=100, left=699, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no')
}

function soma() {
    num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    ph = -Math.log10(num1)
    document.getElementById('resultado').innerHTML= "o pH é: "+ ph.toFixed(2);
    if (ph<7) {
        document.getElementById('pH').innerHTML = "Sua substância é ácida."
    }
    else {
        document.getElementById('pH').innerHTML = "Sua substância é básica."
    }
}





