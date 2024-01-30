document.addEventListener("DOMContentLoaded", function () {
  var selectEmpresa = document.getElementById("selectEmpresa");
  var selectOperador = document.getElementById("selectOperador");
  var selectFornecedor = document.getElementById("selectFornecedor");
  var selectMotorista = document.getElementById("selectMotorista");
  var selectTransportadora = document.getElementById("selectTransportadora");
  var selectCarga = document.getElementById("selectCarga");

  var opcoesEmpresa = Array.from(selectEmpresa.options);
  var opcoesOperador = Array.from(selectOperador.options);
  var opcoesFornecedor = Array.from(selectFornecedor.options);
  var opcoesMotorista = Array.from(selectMotorista.options);
  var opcoesTransportadora = Array.from(selectTransportadora.options);
  var opcoesCarga = Array.from(selectCarga.options);

  function filtrarSelect(input, select, opcoes) {
      var filtro = input.value.toUpperCase();
      var filtrados = opcoes.filter(function (opcao) {
          return opcao.value.toUpperCase().indexOf(filtro) > -1;
      });
      select.innerHTML = "";
      filtrados.forEach(function (opcao) {
          select.appendChild(opcao);
      });
  }

  var inputEmpresa = document.getElementById("link1");
  var inputOperador = document.getElementById("link1");
  var inputFornecedor = document.getElementById("link1");
  var inputMotorista = document.getElementById("link1");
  var inputTransportadora = document.getElementById("link1");
  var inputCarga = document.getElementById("link1");

  inputEmpresa.addEventListener("input", function () {
      filtrarSelect(inputEmpresa, selectEmpresa, opcoesEmpresa);
  });

  inputOperador.addEventListener("input", function () {
      filtrarSelect(inputOperador, selectOperador, opcoesOperador);
  });

  inputFornecedor.addEventListener("input", function () {
      filtrarSelect(inputFornecedor, selectFornecedor, opcoesFornecedor);
  });

  inputMotorista.addEventListener("input", function () {
      filtrarSelect(inputMotorista, selectMotorista, opcoesMotorista);
  });

  inputTransportadora.addEventListener("input", function () {
      filtrarSelect(
          inputTransportadora,
          selectTransportadora,
          opcoesTransportadora
      );
  });

  inputCarga.addEventListener("input", function () {
      filtrarSelect(inputCarga, selectCarga, opcoesCarga);
  });

  var botaoSalvar = document.getElementById("adicionarElemento");
  botaoSalvar.addEventListener("click", function () {
      adicionarAoHistorico();
  });
});
document.addEventListener("DOMContentLoaded", function () {
    var botaoSalvar = document.getElementById("adicionarElemento");
    botaoSalvar.addEventListener("click", function () {
        adicionarAoHistorico();
    });

    function adicionarAoHistorico() {
        var tabelaHistorico = document.getElementById("historico-body");
        var newRow = tabelaHistorico.insertRow(tabelaHistorico.rows.length);

        // Adicione as células na ordem desejada
        newRow.insertCell(0).innerHTML = document.getElementById("numero").value;
        newRow.insertCell(1).innerHTML = document.getElementById("selectEmpresa").value;
        newRow.insertCell(2).innerHTML = document.getElementById("selectFornecedor").value;
        newRow.insertCell(3).innerHTML = document.getElementById("pinicial").value;
        newRow.insertCell(4).innerHTML = document.getElementById("pfinal").value;
        newRow.insertCell(5).innerHTML = document.getElementById("cidade").value;
        newRow.insertCell(6).innerHTML = document.getElementById("cargaFinal").value;
        newRow.insertCell(7).innerHTML = document.getElementById("placa").value;
        newRow.insertCell(8).innerHTML = document.getElementById("selectTransportadora").value;
        newRow.insertCell(9).innerHTML = document.getElementById("carga").value;
        newRow.insertCell(10).innerHTML = document.getElementById("notaf").value;
        newRow.insertCell(11).innerHTML = document.getElementById("qtde").value;
        newRow.insertCell(12).innerHTML = document.getElementById("OsIt").value;
        newRow.insertCell(13).innerHTML = document.getElementById("OsIt2").value;
        newRow.insertCell(14).innerHTML = document.getElementById("CodP1").value;
        newRow.insertCell(15).innerHTML = document.getElementById("CodP2").value;
        newRow.insertCell(16).innerHTML = document.getElementById("selectMotorista").value;

        // Limpe os campos após adicionar ao histórico
        document.getElementById("numero").value = "";
        document.getElementById("selectEmpresa").selectedIndex = 0;
        document.getElementById("selectFornecedor").value = "";
        document.getElementById("pinicial").value = "";
        document.getElementById("pfinal").value = "";
        document.getElementById("cidade").value = "";
        document.getElementById("cargaFinal").value = "";
        document.getElementById("placa").value = "";
        document.getElementById("selectTransportadora").value = "";
        document.getElementById("carga").value = "";
        document.getElementById("notaf").value = "";
        document.getElementById("qtde").value = "";
        document.getElementById("OsIt").value = "";
        document.getElementById("OsIt2").value = "";
        document.getElementById("CodP1").value = "";
        document.getElementById("CodP2").value = "";

        // Defina a seleção nos campos de seleção de volta para o valor padrão
        document.getElementById("selectEmpresa").selectedIndex = 0;
        document.getElementById("selectTransportadora").selectedIndex = 0;
        document.getElementById("selectMotorista").selectedIndex = 0;
        document.getElementById("selectCarga").selectedIndex = 0;

        // Você pode adicionar lógica para limpar outros campos, se necessário
    }
});