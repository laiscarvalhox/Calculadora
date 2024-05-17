function Somar()
{
    var e1 = parseInt(document.getElementById("n1").value);
    var e2 = parseInt(document.getElementById("n2").value);
    var resultado = e1 + e2;
    document.getElementById("Resultado").innerHTML = resultado;
}
function Subtrair()
{
    var e1 = parseInt(document.getElementById("n1").value);
    var e2 = parseInt(document.getElementById("n2").value);
    var resultado = e1 - e2;
    document.getElementById("Resultado").innerHTML = resultado;
}
function Multiplicar()
{
    var e1 = parseInt(document.getElementById("n1").value);
    var e2 = parseInt(document.getElementById("n2").value);
    var resultado = e1 * e2;
    document.getElementById("Resultado").innerHTML = resultado;
}
function Dividir()
{
    var e1 = parseInt(document.getElementById("n1").value);
    var e2 = parseInt(document.getElementById("n2").value);
    var resultado = e1 / e2;
    document.getElementById("Resultado").innerHTML = resultado;
}