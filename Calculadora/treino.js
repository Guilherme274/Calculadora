
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = numero + num;
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado)
    {
        var operacao = resultado + '=' + eval(resultado);

        document.getElementById('resultado').innerHTML = eval(resultado);
        addToHistorico(operacao);
    }
}


function voltar()
{
    var resultado = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

function addToHistorico(operacao)
{
    var historico = document.getElementById('historico');
    var historicoAtual = historico.innerHTML;
    
    historico.innerHTML = historicoAtual + operacao + '<br>';
}
