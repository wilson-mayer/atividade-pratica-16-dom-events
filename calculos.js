/* Desenvolva aqui a rotina */

function calcular() {
  var valorBase = document.getElementById("valor_base");
  var ajudaComTransporte = document.getElementById("valor_transporte");
  var ajudaAlimentacao = document.getElementById("valor_alimentacao");
  var valorReceita = document.getElementById("valor_receita");
  var n1 = Number(valorBase.value);
  var n2 = Number(ajudaComTransporte.value);
  var n3 = Number(ajudaAlimentacao.value);
  var descontoDeAutomovel = document.getElementById("valor_automovel");
  var faltas = document.getElementById("faltas");
  var valorDescontos = document.getElementById("valor_descontos");
  var d1 = Number(descontoDeAutomovel.value);
  var d2 = Number(faltas.value);
  var valorTotal = document.getElementById("valor_total");

  var receitaTotal = n1 + n2 + n3;
  var descontosTotal = d1 + d2;

  var total = receitaTotal - descontosTotal;

  valorReceita.value = receitaTotal;

  valorDescontos.value = descontosTotal;

  valorTotal.value = total;
}
